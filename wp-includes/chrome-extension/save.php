<?php 
//$con = mysql_connect("digitalbrain-test.lancs.ac.uk","root","dbsproject2013");
$con = mysql_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0") or die(mysql_error());
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

$user_id = $_POST['user_id'];
$start = $_POST['start'];
$end = $_POST['end'];
$switches = $_POST['switches'];
$time = $_POST['time'];
$url = $_POST['url'];

mysql_select_db("i769690_wp1", $con);

mysql_query("INSERT INTO `i769690_wp1`.`sessions` (`user_id`, `start`, `end`, `switches`, `active_time`, `url`) VALUES ('$user_id', '$start', '$end', '$switches', '$time', '$url');");

mysql_close($con);

print_r("HELLO");

?>