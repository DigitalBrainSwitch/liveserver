<?php
        $id    = $_POST['id'];
        $experiment_id      = $_POST['experiment_id'];
        $user_id    = $_POST['user_id'];
        $time    = $_POST['time'];
        $enabled    = $_POST['enabled'];
        $type = $_POST['type'];
        $url = $_POST['url'];


	$connection = mysqli_connect("localhost", "*******", "*******", "*******") or die(mysql_error());
    $data = [];
        //Select database
        //mysql_select_db("wordpress", $connection) or die(mysql_error());
        
        if ( $id!='null' )
        {
            $sql = "UPDATE `wp_bp_experiments_notifications` SET `user_id` = $user_id, `experiment_id` = $experiment_id, `enabled` = '$enabled', `time` = '$time', `type` = '$type', `url` = '$url' WHERE `wp_bp_experiments_notifications`.`id` = $id";
            mysqli_query($connection, $sql);
            echo $sql;
        } else {
            // Ensure that variable is not already a variable of the experiment before inserting
            //if ( $wpdb->get_var( $wpdb->prepare( "SELECT id FROM wp_bp_experiments_report WHERE id = %d AND experiment_id = %d", $id, $experiment_id ) ) ) {
            //    return false;
            // }
            $sql = "INSERT INTO `wp_bp_experiments_notifications`(`user_id`, `experiment_id`, `enabled`, `time`, `type`, `url` ) VALUES ($user_id, $experiment_id, '$enabled', '$time' ,'$type', '$url')";
            mysqli_query($connection, $sql);
        }

?>