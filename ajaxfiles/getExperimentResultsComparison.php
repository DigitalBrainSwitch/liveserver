<?php

    $experimentId=$_REQUEST["experimentId"];
	$userId=$_REQUEST["userId"];
    $friendId=$_REQUEST["friendId"];
	$variable1=$_REQUEST["variable1"];
	$variable2=$_REQUEST["variable2"];
	$typeVar1=$_REQUEST["typeVar1"];
	$typeVar2=$_REQUEST["typeVar2"];	
	//$dateTimes=$_REQUEST["times"];
	//$dateTimesPP=$_REQUEST["timesPP"];
	$dateTimes = array();
	$dateTimesPP = array();
	$times;
	$friend_dateTimes = array();
	
	foreach($_GET['times'] AS $value) 
	{
		$times = $value;	
	}

	$dateTimes = explode(",", $times);
	

	//$experiment_results_start_date = $_REQUEST["experiment_results_start_date"];
    
    $user_variable1_values;
    $friend_variable1_values = array();

    $user_variable2_values;
    $friend_variable2_values = array();
    $query;
 
    $all_variable1_values = array(); 
    $all_variable2_values = array();
    $all_variable3_values = array(); 
    $all_variable4_values = array();

	$connection = mysqli_connect("localhost", "********", "********", "********") or die(mysql_error());




	if($friendId == "All")
	{
		if($variable1!=-1 && $variable2!=-1)
	    {
	        for($x=0; $x<count($dateTimes); $x++)
			{
	       	    $result2;

				if($typeVar1 == "binary" && $typeVar2 == "binary")
				{
					$query1;
					$query2;
					$query3;
					$query4;
					
					$query1 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='Yes' 
								AND variable2.variable_value='Yes'" ;	
								
					$query2 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='Yes' 
								AND variable2.variable_value='No'" ;	
									
					$query3 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='No' 
								AND variable2.variable_value='Yes'" ;
								
					$query4 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='No' 
								AND variable2.variable_value='No'" ;									
									
														
					$result2=mysqli_query($connection, $query1);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable1_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable1_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 
													

													
					$result2=mysqli_query($connection, $query2);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable2_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable2_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 													
													
					$result2=mysqli_query($connection, $query3);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable3_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable3_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 															
																					
					$result2=mysqli_query($connection, $query4);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable4_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable4_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 																						
					
				}//end if($typeVar1 == "binary" && $typeVar2 == "binary")
				else if($typeVar1 == "binary" || $typeVar2 == "binary")
				{
					$query1;
					$query2;
					
					if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))
					{
						
						$query1 = "SELECT avg(variable2.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
									where variable1.experiment_id='$experimentId' 
									AND variable1.variable_id='$variable1' 
									AND variable2.variable_id='$variable2' 
									AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
									AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
									
									AND variable2.user_id = variable1.user_id
									AND variable1.experiment_id = variable2.experiment_id 
									AND variable1.variable_value='Yes'";
						
						$query2 = "SELECT avg(variable2.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
									where variable1.experiment_id='$experimentId' 
									AND variable1.variable_id='$variable1' 
									AND variable2.variable_id='$variable2' 
									AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
									AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
									 
									AND variable2.user_id = variable1.user_id
									AND variable1.experiment_id = variable2.experiment_id 
									AND variable1.variable_value='No'";
												
						
						
					}//end if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))
					
					if($typeVar2 == "binary" && ($typeVar1 == "score" || $typeVar1 == "count"))
					{
						$query1 = "SELECT avg(variable1.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable2.variable_value='Yes'";
						
						$query2 = "SELECT avg(variable1.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable2.variable_value='No'";
					}//end if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))					
					
					
					$result2=mysqli_query($connection, $query1);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['avg_value'];
								if($val!=NULL)
								{
									$all_variable1_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable1_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 
					

					$result2=mysqli_query($connection, $query2);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['avg_value'];
								if($val!=NULL)
								{
									$all_variable2_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable2_values[] = 0;
								}	                    
			
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 					
					
										
				}//end if($typeVar1 == "binary" || $typeVar2 == "binary")
			}//end for($x=0; $x<count($dateTimes); $x++)

		}//end if($variable1!=-1 && $variable2!=-1)
		else if( ($variable1!=-1 && $variable2==-1) || ($variable2!=-1 && $variable1==-1) )
		{
			if($variable1!=-1)
			{
				
				if($typeVar1=="binary")
				{
			        for($x=0; $x<count($dateTimes); $x++)
					{

						$query1 = "SELECT (SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable1' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' AND variable1.variable_value='Yes') as yesvalues, 
						(SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable1' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' and variable1.variable_value='No') as novalues";	
						
						
						$result2=mysqli_query($connection, $query1);
				        if (!$result2) { // add this check.
				            die('Invalid query: ' . mysql_error());
				        }//end if
				        else
				        {
				            do
				            {
				                $row=mysqli_fetch_array($result2);
				                if($row)
				                {
				                	$yes_values = $row['yesvalues'];
									if($yes_values=='null')
										$yes_values = 0;
				                	
				                	$no_values = $row['novalues'];
				                	if($no_values=='null')
				                		$yes_values = 0;
				                		
				                    $all_variable1_values = array_merge($all_variable1_values, array($x=> array($yes_values,$no_values)));
				
				                }//end if($row)
				            } while($row);			        	
						}//end else if ($result2) 	
												
					}//end for($x=0; $x<count($dateTimes); $x++)
										
				}//end if(typeVar1=="binary")
			}//end if(variable1!=-1)
			
			if($variable2!=-1)
			{
				if($typeVar2=="binary")
				{
			        for($x=0; $x<count($dateTimes); $x++)
					{

						$query1 = "SELECT (SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						 AND variable1.variable_value='Yes') as yesvalues, 
						(SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable2' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' AND variable1.variable_value='No') as novalues";	
						
						
						$result2=mysqli_query($connection, $query1);
				        if (!$result2) { // add this check.
				            die('Invalid query: ' . mysql_error());
				        }//end if
				        else
				        {
				            do
				            {
				                $row=mysqli_fetch_array($result2);
				                if($row)
				                {
				                	$yes_values = $row['yesvalues'];
									if($yes_values=='null')
										$yes_values = 0;
				                	
				                	$no_values = $row['novalues'];
				                	if($no_values=='null')
				                		$yes_values = 0;
				                		
				                    $all_variable1_values = array_merge($all_variable1_values, array($x=> array($yes_values,$no_values)));
				
				                }//end if($row)
				            } while($row);			        	
						}//end else if ($result2) 	
												
					}//end for($x=0; $x<count($dateTimes); $x++)
										
				}//end if(typeVar2=="binary")				
							
			}//end if(variable2!=-1)
			
	        $all_variable2_values[0] = 0;
	        $all_variable3_values[0] = 0;
	        $all_variable4_values[0] = 0;
			
		}//end else if( ($variable1!=-1 && $variable2==-1) || ($variable2!=-1 && $variable1==-1) )
		else if($variable1==-1 && $variable2==-1)
		{
	        $all_variable1_values[0] = 0;
	        $all_variable2_values[0] = 0;
	        $all_variable3_values[0] = 0;
	        $all_variable4_values[0] = 0;			
		}//end else if($variable1==-1 && $variable2==-1)

	}//end if($friendId == "All")

	if($friendId == "MeVsAll")
	{
		if($variable1!=-1 && $variable2!=-1)
	    {
	        for($x=0; $x<count($dateTimes); $x++)
			{
	       	    $result2;

				if($typeVar1 == "binary" && $typeVar2 == "binary")
				{
					$query1;
					$query2;
					$query3;
					$query4;
					
					$query1 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='Yes' 
								AND variable2.variable_value='Yes'" ;	
								
					$query2 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='Yes' 
								AND variable2.variable_value='No'" ;	
									
					$query3 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='No' 
								AND variable2.variable_value='Yes'" ;
								
					$query4 = "SELECT count(*) FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable1.variable_value='No' 
								AND variable2.variable_value='No'" ;									
									
														
					$result2=mysqli_query($connection, $query1);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable1_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable1_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 
													

													
					$result2=mysqli_query($connection, $query2);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable2_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable2_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 													
													
					$result2=mysqli_query($connection, $query3);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable3_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable3_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 															
																					
					$result2=mysqli_query($connection, $query4);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['count(*)'];
								if($val!=NULL)
								{
									$all_variable4_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable4_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 																						
					
				}//end if($typeVar1 == "binary" && $typeVar2 == "binary")
				else if($typeVar1 == "binary" || $typeVar2 == "binary")
				{
					$query1;
					$query2;
					
					if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))
					{
						
						$query1 = "SELECT avg(variable2.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
									where variable1.experiment_id='$experimentId' 
									AND variable1.variable_id='$variable1' 
									AND variable2.variable_id='$variable2' 
									AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
									AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
									AND variable1.user_id != '$userId' 
									AND variable2.user_id = variable1.user_id
									AND variable1.experiment_id = variable2.experiment_id 
									AND variable1.variable_value='Yes'";
						
						$query2 = "SELECT avg(variable2.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
									where variable1.experiment_id='$experimentId' 
									AND variable1.variable_id='$variable1' 
									AND variable2.variable_id='$variable2' 
									AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
									AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
									AND variable1.user_id != '$userId' 
									AND variable2.user_id = variable1.user_id
									AND variable1.experiment_id = variable2.experiment_id 
									AND variable1.variable_value='No'";
												
						
						
					}//end if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))
					
					if($typeVar2 == "binary" && ($typeVar1 == "score" || $typeVar1 == "count"))
					{
						$query1 = "SELECT avg(variable1.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable2.variable_value='Yes'";
						
						$query2 = "SELECT avg(variable1.variable_value) as avg_value FROM wp_bp_experiments_report variable1, wp_bp_experiments_report variable2 
								where variable1.experiment_id='$experimentId' 
								AND variable1.variable_id='$variable1' 
								AND variable2.variable_id='$variable2' 
								AND date_format(variable1.date_modified, '%d-%m-%Y')= '$dateTimes[$x]' 
								AND date_format(variable1.date_modified, '%d-%m-%Y') = date_format(variable2.date_modified, '%d-%m-%Y') 
								AND variable1.user_id != '$userId' 
								AND variable2.user_id = variable1.user_id
								AND variable1.experiment_id = variable2.experiment_id 
								AND variable2.variable_value='No'";
					}//end if($typeVar1 == "binary" && ($typeVar2 == "score" || $typeVar2 == "count"))					
					
					
					$result2=mysqli_query($connection, $query1);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['avg_value'];
								if($val!=NULL)
								{
									$all_variable1_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable1_values[] = 0;
								}	                    
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 
					

					$result2=mysqli_query($connection, $query2);
			        if (!$result2) { // add this check.
			            die('Invalid query: ' . mysql_error());
			        }//end if
			        else
			        {
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['avg_value'];
								if($val!=NULL)
								{
									$all_variable2_values[] = $val;
				                    //$friend_variable1_values[] = $val;
									//$friend_dateTimes[] = $dateTimes[$x];
								}
								else{
									$all_variable2_values[] = 0;
								}	                    
			
			
			                }//end if($row)
			            } while($row);			        	
					}//end else if ($result2) 					
					
										
				}//end if($typeVar1 == "binary" || $typeVar2 == "binary")
			}//end for($x=0; $x<count($dateTimes); $x++)

		}//end if($variable1!=-1 && $variable2!=-1)
		else if( ($variable1!=-1 && $variable2==-1) || ($variable2!=-1 && $variable1==-1) )
		{
			if($variable1!=-1)
			{
				
				if($typeVar1=="binary")
				{
			        for($x=0; $x<count($dateTimes); $x++)
					{

						$query1 = "SELECT (SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable1' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' AND user_id!='$userId' AND variable1.variable_value='Yes') as yesvalues, 
						(SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable1' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' and user_id!='$userId' and variable1.variable_value='No') as novalues";	
						
						
						$result2=mysqli_query($connection, $query1);
				        if (!$result2) { // add this check.
				            die('Invalid query: ' . mysql_error());
				        }//end if
				        else
				        {
				            do
				            {
				                $row=mysqli_fetch_array($result2);
				                if($row)
				                {
				                	$yes_values = $row['yesvalues'];
									if($yes_values=='null')
										$yes_values = 0;
				                	
				                	$no_values = $row['novalues'];
				                	if($no_values=='null')
				                		$yes_values = 0;
				                		
				                    $all_variable1_values = array_merge($all_variable1_values, array($x=> array($yes_values,$no_values)));
				
				                }//end if($row)
				            } while($row);			        	
						}//end else if ($result2) 	
												
					}//end for($x=0; $x<count($dateTimes); $x++)
										
				}//end if(typeVar1=="binary")
			}//end if(variable1!=-1)
			
			if($variable2!=-1)
			{
				if($typeVar2=="binary")
				{
			        for($x=0; $x<count($dateTimes); $x++)
					{

						$query1 = "SELECT (SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						and user_id!='$userId' AND variable1.variable_value='Yes') as yesvalues, 
						(SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentId' AND variable1.variable_id= '$variable2' 
						AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' and user_id!='$userId' AND variable1.variable_value='No') as novalues";	
						
						
						$result2=mysqli_query($connection, $query1);
				        if (!$result2) { // add this check.
				            die('Invalid query: ' . mysql_error());
				        }//end if
				        else
				        {
				            do
				            {
				                $row=mysqli_fetch_array($result2);
				                if($row)
				                {
				                	$yes_values = $row['yesvalues'];
									if($yes_values=='null')
										$yes_values = 0;
				                	
				                	$no_values = $row['novalues'];
				                	if($no_values=='null')
				                		$yes_values = 0;
				                		
				                    $all_variable1_values = array_merge($all_variable1_values, array($x=> array($yes_values,$no_values)));
				
				                }//end if($row)
				            } while($row);			        	
						}//end else if ($result2) 	
												
					}//end for($x=0; $x<count($dateTimes); $x++)
										
				}//end if(typeVar2=="binary")				
							
			}//end if(variable2!=-1)
			
	        $all_variable2_values[0] = 0;
	        $all_variable3_values[0] = 0;
	        $all_variable4_values[0] = 0;
			
		}//end else if( ($variable1!=-1 && $variable2==-1) || ($variable2!=-1 && $variable1==-1) )
		else if($variable1==-1 && $variable2==-1)
		{
	        $all_variable1_values[0] = 0;
	        $all_variable2_values[0] = 0;
	        $all_variable3_values[0] = 0;
	        $all_variable4_values[0] = 0;			
		}//end else if($variable1==-1 && $variable2==-1)

	}//end if($friendId == "MeVsAll")

	//else if($friendId != "MeVsAll" && $friendId !="All")
	{
	    if($variable1!=-1)
	    {
	        //$result1=mysql_query("SELECT * FROM wp_bp_experiments_report WHERE experiment_id=$experimentId AND variable_id=$variable1 AND user_id=$userId");
			    	
	        //$result1=mysql_query("SELECT * FROM wp_bp_experiments_report WHERE experiment_id=$experimentId AND variable_id=$variable1 AND user_id=$userId ");
	        
	        
	        for($x=0; $x<count($dateTimes); $x++)
			{
	       	    $result2;
		        if($friendId == "MeVsAll")
		        {
	 			 	if($typeVar1 == "binary")
					{
						/*
						$query = "select * from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						ORDER BY time(date_modified) DESC LIMIT 1";
						*/
						
						$query = "select * from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						ORDER BY time(date_modified)";
			
					}
					if($typeVar1 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
					}	
					
					if($typeVar1 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}			        	
				}//end if($friendId == "MeVsAll")
				else if($friendId == "All")
		        {
	 			 	
					if($typeVar1 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
					}	
					
					if($typeVar1 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}			        	
				}//end if($friendId == "All")

				else if($friendId != "MeVsAll" && $friendId != "All") 
		        {
		        
	 			 	if($typeVar1 == "binary")
					{
						
						$query = "select * from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						ORDER BY time(date_modified)";
			
					}
					if($typeVar1 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}	
					
					if($typeVar1 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable1' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
					}			        	
				}//end if($friendId != "MeVsAll" && $friendId != "All")  
				
				//echo "query=".$query;
	
		        //$result2=mysql_query($query);
				
				if($query!=null)
				{
					$result2=mysqli_query($connection, $query);
			
			        if (!$result2) { // add this check.
			            die('Invalid query: variable1 MevsAll' . mysql_error());
			        }//end if
			        else{
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['variable_value'];
								if($val!=NULL)
								{
									                    //echo $val;
				                    if ($val == 'Yes' || $val == 'yes')
				                        $val = 1;
				                    if ($val == 'No' || $val == 'no')
				                        $val = 0;
				                    
									if($typeVar1 == "score")
										$val = $row['avg(variable_value)'];
									
									if($typeVar1 == "count")
										$val = $row['sum(variable_value)'];
									
				                    $friend_variable1_values[] = $val;
									$friend_dateTimes[] = $dateTimes[$x];
									//$friend_dateTimes[] = 'dateTimes';
								}	                    
			
			                }//end if($row)
			            } while($row);
			        }//end else					
				}//end if($query!=null)
				

				
			}//end for
			
	        
	
	    }//end if(variable1!=-1)
	    else{
	        
	        $friend_variable1_values[0] = 0;
	        $user_variable1_values[0] = 0;
			//$friend_dateTimes[0]=0;
	    }
	    
	
	  
	    if($variable2!=-1)
	    {
	         for($x=0; $x<count($dateTimes); $x++)
			{
	       	    $result2;
		        if($friendId == "MeVsAll")
		        {
	 			 	if($typeVar2 == "binary")
					{
						
						$query = "select * from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						ORDER BY time(date_modified)";
			
					}
					if($typeVar2 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
					}	
					
					if($typeVar2 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id!='$userId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}			        	
				}//end if($friendId == "MeVsAll")
				else if($friendId == "All")
		        {
	 			 	
					if($typeVar2 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
					}	
					
					if($typeVar2 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}			        	
				}//end if($friendId == "All")	           
				else if($friendId != "MeVsAll" && $friendId != "All")  
		        {
	 			 	if($typeVar2 == "binary")
					{
						
						$query = "select * from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
						ORDER BY time(date_modified) DESC LIMIT 1";
			
					}
					if($typeVar2 == "score")
					{
						
						$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}	
					
					if($typeVar2 == "count")
					{
						
						$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentId' 
						AND user_id='$friendId' AND variable_id='$variable2' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			
					}			        	
				}//end else if($friendId != "MeVsAll" && $friendId != "All")  
				
		   	//echo "query=".$query;
		    //$result2=mysql_query($query);
			    if($query!=null)
			    {
					$result2=mysqli_query($connection, $query);
			
			        if (!$result2) { // add this check.
			            die('Invalid query: variable2 MeVsAll' . mysql_error());
			        }//end if
			        else{
			            do
			            {
			                $row=mysqli_fetch_array($result2);
			                if($row)
			                {
			                    
			                    $val = $row['variable_value'];
								if($val!=NULL)
								{
									
									if ($val == 'Yes' || $val == 'yes')
				                        $val = 1;
				                    if ($val == 'No' || $val == 'no')
				                        $val = 0;
				                    
									if($typeVar2 == "score")
										$val = $row['avg(variable_value)'];
									
									if($typeVar2 == "count")
										$val = $row['sum(variable_value)'];
			
				                    $friend_variable2_values[] = $val;
									
									if($variable1==-1)
									{
										$friend_dateTimes[] = $dateTimes[$x];
										//$friend_dateTimes[] = 'dateTimes';
									}
								}
			
			                }//end if($row)
			            } while($row);
			     
			        }//end else   			    	
			    }//end if($query!=null)
     
	           
			}//end for
	
	    }//end if(variable2!=-1)
	    else{
	        
	        $friend_variable2_values[0] = 0;
	        $user_variable2_values[0] = 0;
			//$friend_dateTimes[0] = 0;
		
	    }	
}//end else if($friendId != "All")
    


echo json_encode(array( 
						'friend_variable1_values' => $friend_variable1_values, 
						'friend_variable2_values' => $friend_variable2_values, 
						'friend_dateTimes' => $friend_dateTimes,
						'all_variable1_values' => $all_variable1_values, 
						'all_variable2_values' => $all_variable2_values, 						
						'all_variable3_values' => $all_variable3_values, 
						'all_variable4_values' => $all_variable4_values 						
						));

/*
echo json_encode(array( 
						'friend_variable1_values' => $friend_variable1_values, 
						'friend_variable2_values' => $friend_variable2_values, 
						'friend_dateTimes' => $friend_dateTimes
						));
 */
/*						
echo json_encode(array('user_variable1_values' => $user_variable1_values, 
						'friend_variable1_values' => $friend_variable1_values, 
						'user_variable2_values' => $user_variable2_values, 
						'friend_variable2_values' => $friend_variable2_values));
*/												
//echo json_encode(array('user_variable1_values' => $user_variable1_values, 'friend_variable1_values' => $friend_variable1_values));
    
?>









