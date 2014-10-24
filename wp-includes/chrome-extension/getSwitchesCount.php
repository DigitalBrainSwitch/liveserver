<?php 

//$con = mysql_connect("digitalbrain-test.lancs.ac.uk","urashid","password");
$con = mysql_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0") or die(mysql_error());

if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

$user_id = $_POST['user_id'];
$date = $_POST['date'];

//mysql_select_db("wordpress", $con);
mysql_select_db("i769690_wp1", $con)
$today = new DateTime($date);
$tomorrow = new DateTime($date);
date_modify($tomorrow, '+1 day');
$today = $today->format('Y-m-d H:i:s');
$tomorrow = $tomorrow->format('Y-m-d H:i:s');

$query = sprintf("SELECT * from `i769690_wp1`.`sessions` WHERE `user_id` = %s and `end` > '%s' and `end` < '%s'", $user_id,$today,$tomorrow);

$res = mysql_query($query);
$switchCount = 0;
while($r = mysql_fetch_assoc($res)) {
    $switchCount += $r['switches'];
}
print_r($switchCount);
mysql_close($con);
?>