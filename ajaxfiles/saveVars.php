<?php
        $experiment_id      = $_POST['experiment_id'];
        $user_id    = $_POST['user_id'];
        $variable_id    = $_POST['variable_id'];
        $variable_value    = $_POST['variable_value'];
        $date_modified    = $_POST['date_modified'];
        $id = $_POST['id'];
     	$sql;

		$connection = mysqli_connect("localhost", "********", "****************", "********") or die(mysql_error());
    //$data = [];
        //Select database
        //mysql_select_db("wordpress", $connection) or die(mysql_error());

  		//mysql_select_db("i769690_wp1", $connection) or die(mysql_error());

  
        if ( $id!='null' )
        {
        	
            $sql = "UPDATE wp_bp_experiments_report SET experiment_id = '$experiment_id', user_id='$user_id', variable_id='$variable_id', variable_value = '$variable_value', 
            date_modified = '$date_modified' WHERE id = '$id'";
			
			/*
			$sql = "UPDATE wp_bp_experiments_report SET variable_value = '$variable_value' AND date_modified = '$date_modified' WHERE 
			experiment_id = '$experiment_id' AND user_id='$user_id' AND variable_id='$variable_id'";
			*/
			
           mysqli_query($connection, $sql);
            //echo $sql;
        } else {
            // Ensure that variable is not already a variable of the experiment before inserting
            //if ( $wpdb->get_var( $wpdb->prepare( "SELECT id FROM wp_bp_experiments_report WHERE id = %d AND experiment_id = %d", $id, $experiment_id ) ) ) {
            //    return false;
            // }
            
            
             $sql = "SELECT id from wp_bp_experiments_report where experiment_id = '$experiment_id' AND user_id='$user_id' AND variable_id='$variable_id' AND date_format (date_modified, '%d-%m-%Y') = date_format ('$date_modified', '%d-%m-%Y') ";
			 
			 $result2=mysql_query($sql);
			 //$alreadyExists = false;
			  $count=0;
            //echo "<table>";
            do{
                $row=mysql_fetch_array($result2);
                if($row){
                    //echo $row['report_date']. " ";
                    $count = $row['id'];
                    if($count>0)
					{
						//$alreadyExists = true;
                    	break;
					}

                    
                }//end if($row)
            } while($row);
            
			
			
            if($count==0)
			{
				$sql = "INSERT INTO wp_bp_experiments_report (experiment_id, user_id, variable_id, variable_value, date_modified  ) VALUES ( '$experiment_id', '$user_id', '$variable_id', '$variable_value', '$date_modified')";
            	mysqli_query($connection, $sql);     
            	
			}
			else if($count>0)
			{
			/*		
				$sql = "UPDATE wp_bp_experiments_report SET experiment_id = '$experiment_id', user_id='$user_id', variable_id='$variable_id', variable_value = '$variable_value', 
            	date_modified = '$date_modified' WHERE id = '$id'";
			 *
			 */
			
				$sql = "UPDATE wp_bp_experiments_report SET variable_value = '$variable_value' AND date_modified = '$date_modified' WHERE experiment_id = '$experiment_id' AND user_id='$user_id' AND variable_id='$variable_id'";			 
				mysqli_query($connection, $sql);
			}
			
?>

 <!--script>
 
 	var id = <?php echo json_encode($id)?>;
 	var alreadyExists = <?php echo json_encode($alreadyExists)?>;
 	var count = <?php echo json_encode($count)?>;
 	var sql = <?php echo json_encode($sql)?>;
 	alert("id="+id);
 	alert("alreadyExists="+alreadyExists);
 	alert("count="+count);
 	alert("sql="+sql);
 
 </script-->


<?php			
            //echo $sql;
        }//end else if(id=='null')
?>