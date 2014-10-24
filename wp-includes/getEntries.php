<?php

    $user_id = $_POST['user_id'];
    $date = $_POST['date'];
    $variable_id = $_POST['variable_id'];

    //$connection = mysql_connect("localhost", "root", "") or die(mysql_error());
    //$connection = mysqli_connect("localhost", "urashid", "password", "wordpress") or die(mysql_error());
	//$connection = mysql_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0") or die(mysql_error());
	$connection = mysqli_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0", "i769690_wp1") or die(mysql_error());
		
    $data = [];
    //Select database
    //mysql_select_db("wordpress", $connection) or die(mysql_error());
    //mysql_select_db("i769690_wp1", $connection) or die(mysql_error());
		
    $today = DateTime::createFromFormat('d/m/Y', $date);
    $tomorrow = DateTime::createFromFormat('d/m/Y', $date);
    date_modify($tomorrow, '+1 day');
    $today = $today->format('Y-m-d'); 
    $tomorrow = $tomorrow->format('Y-m-d');
    $report=mysqli_query($connection, "select * from wp_bp_experiments_report where variable_id ='$variable_id' AND user_id ='$user_id' and `date_modified` > '$today' and `date_modified` < '$tomorrow'");
    while($row = mysqli_fetch_assoc($report)){
        $data[] = $row;
    }
    echo json_encode($data);
?>