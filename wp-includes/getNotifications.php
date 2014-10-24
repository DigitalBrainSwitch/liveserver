<?php
    $user_id = $_POST['user_id'];
    $experiment_id = $_POST['experiment_id'];

    //$connection = mysql_connect("localhost", "root", "") or die(mysql_error());
   
    //$connection = mysqli_connect("localhost", "urashid", "password", "wordpress") or die(mysql_error());
	
	$connection = mysqli_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0", "i769690_wp1") or die(mysql_error());
    $data = [];
    //Select database
    //mysql_select_db("wordpress", $connection) or die(mysql_error());
    $report= mysqli_query($connection, "select * from wp_bp_experiments_notifications where user_id = '$user_id' AND experiment_id = '$experiment_id' ");
    while($row = mysqli_fetch_assoc($report)){
        $data[] = $row;
    }
    echo json_encode($data);
?>