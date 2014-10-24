<?php
/*
Author: Ming Ki Chong (mingki@acm.org)
*/

//Switch debug mode on/off
$DEBUG = false;
$CRON_TEST = true;
$CRON_SERVER_ADDR = '192.186.247.218';//godaddy cron server address

date_default_timezone_set('Europe/London'); //set to UK timezone

//Check if the user is localhost. If not, kill the page.
if(!$DEBUG){
	if($_SERVER['REMOTE_ADDR'] != $CRON_SERVER_ADDR){
		if($CRON_TEST){
			//write a line into file when a connection is closed
			$access_file_handle = fopen("cron_access.txt", 'a');
			fwrite($access_file_handle, "CON CLOSED: " . $_SERVER['REMOTE_ADDR'] . " | " . date('Y-m-d H:i:s') . "\n");
			fclose($access_file_handle);
		}
		die("Access From " . $_SERVER['REMOTE_ADDR'] . " Not Allowed");
	}
}

$timeNow = strtotime("now");

include 'sendMail.php'; //function for sending email
include 'check_day_of_week.php'; //functions for checking if today is weekday/weekend
$IsTodayWeekday = IsTodayWeekday();

//Database login information
$DB_HOST = "192.186.247.218";
$DB_USER = "i769690_wp1";
$DB_PASS = "L(XSQCgQ1l64(&0";
$DB_NAME = "i769690_wp1";
$DB_TABLE = "wp_bp_experiments_notifications";

$HTML_NL = "<br/>";

//Connect to database
$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS);
//If error, kill page
if(mysqli_connect_errno()){
	die ("Fail To Connect to MySQL: " . mysqli_connect_error() . $HTML_NL);
}else{
}
$mysqli->select_db($DB_NAME);

$query = 
"SELECT DISTINCT `time`, `type`, `user_login`, `user_nicename`, `user_email`, `display_name`, `name`, `url` 
FROM  `wp_bp_experiments_notifications` 
INNER JOIN  `wp_users` ON  `wp_bp_experiments_notifications`.user_id =  `wp_users`.id
INNER JOIN  `wp_bp_experiments` ON  `wp_bp_experiments_notifications`.experiment_id =  `wp_bp_experiments`.id
WHERE `enabled`=1
AND (
	`type`='everyday' 
	OR 
	`type`='" . (($IsTodayWeekday) ? "weekday" : "weekend") . "'
	)
AND
(`wp_bp_experiments_notifications`.experiment_id,`wp_bp_experiments_notifications`.user_id) IN
(
	SELECT `wp_bp_experiments_members`.`experiment_id`, `wp_bp_experiments_members`.user_id
	FROM `wp_bp_experiments_members`
	)
ORDER BY `type`
";

/*
$query = 
"SELECT `time`, `type`, `user_login`, `user_nicename`, `user_email`, `display_name`, `name`, `slug` 
FROM  `wp_bp_experiments_notifications` 
INNER JOIN  `wp_users` ON  `wp_bp_experiments_notifications`.user_id =  `wp_users`.id
INNER JOIN  `wp_bp_experiments` ON  `wp_bp_experiments_notifications`.experiment_id =  `wp_bp_experiments`.id
WHERE `enabled`=1 
AND (
	`type`='everyday' 
	OR 
	`type`='" . (($IsTodayWeekday) ? "weekday" : "weekend") . "')
ORDER BY `type`
";
*/

//file handle for output
$handle = fopen("triggers.txt", 'a');

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		// echo "(" . $row['time'] . ", " . $row['type'] . "): " . $row['user_email'] . ", " . $row['slug'] . $HTML_NL;	
		$timeReminder = strtotime($row['time']);
		if(TriggerReminder($timeNow, $timeReminder)){	
			$todayDateTime = date('Y-m-d H:i:s');
			fwrite($handle, "VISIT FROM: " . $_SERVER['REMOTE_ADDR'] . " | " . "Name: " . $row['user_nicename'] . ", Exp: " . $row['name'] . ", Triggered @ " . $todayDateTime . "\n");
			
			//$mail_receiver = "dbs.lancaster@gmail.com"; //test receiver email address 
			
			$mail_receiver = $row['user_email'];
			$mail_sender = "DBS-Project@open.ac.uk"; 
			$mail_subject = "Reminder for Exp: " . $row['name'] . " @ " . $todayDateTime; 
			$mail_message = "
			<p>
			This is an automatic e-mail reminder from <b><a href='http://www.myliferocket.com/'>MyLifeRocket</a></b>.
			\r\n<br/>
			\r\n<br/>
			</p>

			<p>
			User: <b><em>" . $row['user_nicename'] . "</em></b>\r\n<br/>
			\r\n<br/>
			Experiment: \"<b><em>". $row['name'] . "</em></b>\"\r\n<br/>
			<a href='http://www.myliferocket.com/experiments/". $row['url'] ."'>http://www.myliferocket.com/experiments/" . $row['url'] . "</a>" . "
			\r\n<br/>
			\r\n<br/>
			<a href='http://www.myliferocket.com/'><img src='http://www.myliferocket.com/wp-content/themes/ward-pro/library/images/logo.png' alt='MyLifeRocket' height='41'/></a>
			<a href='http://www.scc.lancs.ac.uk/research/projects/DBS/'><img src='http://www.scc.lancs.ac.uk/research/projects/DBS/wp-content/uploads/2013/08/cropped-DigitalBrainSwitch_RGB_Trans.png' alt='Digital Brain Switch' height='41'></a>
			</p>";
			sendMail($mail_receiver, $mail_sender, $mail_subject, $mail_message);
		}else{
			//fwrite($handle, "TEST: ".date('Y-m-d H:i:s')."\n");
		}
		
		// echo "time: " . $row['time'] . $HTML_NL;
		// echo "type: " . $row['type'] . $HTML_NL;
		// echo "user_login: " . $row['user_login'] . $HTML_NL;
		// echo "user_nicename: " . $row['user_nicename'] . $HTML_NL;
		// echo "user_email: " . $row['user_email'] . $HTML_NL;
		// echo "display_name: " . $row['display_name'] . $HTML_NL;
		// echo "name: " . $row['name'] . $HTML_NL;
		// echo "slug: " . $row['slug'] . $HTML_NL;
		// echo $HTML_NL;
		// echo $HTML_NL;
	}
}
else {
	if($DEBUG){
		echo 'NO RESULTS';	
	}
}

$mysqli->close();
fclose($handle);

if($DEBUG){
	echo "END";
}

//determine if currentTime is within a minute intervel of reminderTime
//return true if reminderTime <=  currentTime < reminderTime + 60 (sec)
function TriggerReminder($currentTime, $reminderTime){
	$reminderTime_1min = $reminderTime + 60; //add 60seconds (1min)
	return ($reminderTime <= $currentTime) && ($currentTime < $reminderTime_1min);
}

?>