<?php 
	$root = realpath($_SERVER["DOCUMENT_ROOT"]);
	$filePath = "$root/ajaxfiles/reportExperiment.php";
	include "$root/ajaxfiles/reportExperiment.php";
	
	//echo "root=".$root;
	//echo "filePath=".$filePath;	
	//include "http://www.myliferocket.com/ajaxfiles/reportExperiment.php";
?>


<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css">
<link rel="stylesheet" href="http://www.myliferocket.com/flot/examples/examples.css" type="text/css">
<link href="http://www.myliferocket.com/flot/examples/shared/jquery-ui/jquery-ui.min.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="http://www.myliferocket.com/datepicker/lib/themes/default.css" id="theme_base">
<link rel="stylesheet" href="http://www.myliferocket.com/datepicker/lib/themes/default.date.css" id="theme_date">
<link rel="stylesheet" href="http://www.myliferocket.com/uislider/jquery.nouislider.css">

<style type="text/css">

#placeholder-compare .button {
	position: absolute;
	cursor: pointer;
}

#placeholder-compare div.button {
	font-size: smaller;
	color: #999;
	background-color: #eee;
	padding: 2px;
}

.bigCircle{
    -webkit-transition: margin 0.3s ease-out;
    -moz-transition: margin 0.3s ease-out;
    -o-transition: margin 0.3s ease-out;
    padding-top: 42px!important;
	text-align:center;
	width: 150px;
	height: 150px;
	padding: 15px;
	vertical-align: middle;
	border-radius: 50%;
	margin:0 auto!important;
}

.green1 {
	background-color: #98c734;
}

.green2 {
	background-color: #82a538;
}

.bigCircleGreen1{
	text-align:center;
	width: 150px;
	height: 150px;
	padding: 15px;
	vertical-align: middle;
	border-radius: 50%;
	background-color: #98c734;
	margin: 0 auto!important;
}

.bigCircleGreen2{
	text-align:center;
	width: 150px;
	height: 150px;
	padding: 15px;
	vertical-align: middle;
	border-radius: 50%;
	background-color: #82a538;
	margin: 0 auto!important;
}


.smallCircle{
    -webkit-transition: margin 0.3s ease-out;
    -moz-transition: margin 0.3s ease-out;
    -o-transition: margin 0.3s ease-out;
	text-align:center;
	width: 100px;
	height: 100px;
	padding: 15px;
	vertical-align: middle;
	border-radius: 50%;
	//background-color: #fc972a;
	margin: 0 auto!important;
    margin-top:25px!important;
    padding-top:17px!important;
}
.bigCircle:hover {
    margin-top: -5px!important;
}
.smallCircle:hover{
    margin-top: 20px!important;
}

.orange1 {
	background-color: #fc972a;
}

.orange2 {
	background-color: #dc780d;
}

.big_white{
	font-size: 2em;
	color: white;
}
#cumulative-left, #cumulative-right{
    margin-top:20px !important;
    margin-bottom:20px !important;
    text-align: center;
}
.edit-entries{
	display:none!important;
}


</style>

<!-- Javascript -->




	<!-- jquery -->
<script language="javascript" type="text/javascript" src="http://myliferocket.com/jquery/jquery.validate.min.js"></script>
<script language="javascript" type="text/javascript" src="http://myliferocket.com/jquery/jquery.validate.js"></script>
<script language="javascript" type="text/javascript" src="http://myliferocket.com/jquery/jquery-1.11.1.js"></script> 
<script language="javascript" type="text/javascript" src="http://myliferocket.com/jquery/jquery-ui.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/examples/shared/jquery-ui/jquery-ui.min.js"></script>
<!--script type="text/javascript" src="http://code.jquery.com/mobile/1.4.3/jquery.mobile-1.4.3.js"></script-->

	<!-- flot -->
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/jquery.flot.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/jquery.flot.tickrotor.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/jquery.flot.axislabels.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/jquery.flot.navigate.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/flot/jquery.flot.resize.js"></script>

	<!-- datepicker -->
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/datepicker/lib/picker.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/datepicker/lib/picker.date.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/datepicker/lib/picker.time.js"></script>
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/datepicker/lib/legacy.js"></script>

	<!-- uislider -->
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/uislider/jquery.nouislider.min.js"></script>

	<!-- bootstrap -->
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/wp-includes/js/bootstrap.min.js"></script>
<script language="javascript" type="text/javascript" src='http://www.myliferocket.com/wp-content/plugins/buddypress/bp-templates/bp-legacy/js/bootstrap-switch.min.js'></script>

	<!-- showExperimentResultsComparison -->
<script language="javascript" type="text/javascript" src="http://www.myliferocket.com/ajaxfiles/showExperimentResults.js"></script>


<?php if ( is_user_logged_in() && bp_experiment_is_member() ) : ?>


<div class="row"><div class="col-md-12" style='padding:0px;'>

<div class='row'>
	<div class='col-md-3'>
		<div class="input-group">
		  <span class="input-group-addon"><div data-icon="w" class="icon-small"></div></span>
		  <input id='datepicker1' class="form-control" style='text-align:center' data-value="today" type="text"></input>
		</div>
	</div>
			
	<div class='col-md-9' style='text-align:right'>
		
	

<?php
    
	global $variable_chart1;
	global $variable_chart2;
	
	global $variable_chart1_index;
	global $variable_chart2_index;
	
	global $experiment_report_count;
	global $experiment_results_period;
	    
	global $experiment_memberIds;
	global $experiment_memberNames;
	
	global $variable_name1;
	global $variable_name2;
	    
	$variable_chart1_index = 0;
	$variable_chart2_index = 1;
	
	$experiment_results_period = 0;

    $experimentid = bp_get_current_experiment_id();
    $currentUserId = bp_loggedin_user_id();

    echo "<script>
    _userid = ".$currentUserId. "; _experimentid = ".$experimentid."</script><tr>";
    
    //echo "experimentId="+$experimentid;
    //echo $currentUserId;
    //echo $experimentid;
    
    // Create a connection
    //$connection = mysql_connect("localhost", "root", "") or die(mysql_error());
    //$connection = mysql_connect("digitalbrain-test.lancs.ac.uk", "urashid", "password") or die(mysql_error());
	$connection = mysql_connect("localhost", "i769690_wp1", "L(XSQCgQ1l64(&0") or die(mysql_error());
    
    //Select database
    //mysql_select_db("wordpress", $connection) or die(mysql_error());
	mysql_select_db("i769690_wp1", $connection) or die(mysql_error());
	
    $query = "select * from wp_bp_experiments_variables where experiment_id='$experimentid'";
    $result=mysql_query($query); 
	$resultAgain = mysql_query($query); 
	$today = new DateTime("now");
    $tomorrow = new DateTime("now");
    date_modify($tomorrow, '+1 day');
    $today = $today->format('Y-m-d'); 
    $tomorrow = $tomorrow->format('Y-m-d');
    
	$result1 = array();
	while(($row =  mysql_fetch_assoc($resultAgain))) {
	    $result1[] = $row;
	}
	$result1 = array_reverse($result1);
	foreach($result1 as $row) {
		
		if($row['type'] == 'count'){ ?>
		<div class='col-md-2 pull-right'><div class='dayVal' id="sum<?php echo $row['id']?>">0</div><span style=' font-size:0.8em'><?php print_r( $row['name']);?></span></div>
		<?php }if($row['type'] == 'score'){ ?>
		<div class='col-md-2 pull-right'><div class='dayVal' id="average<?php echo $row['id']?>">0</div><span style='font-size:0.8em'><?php print_r( $row['name']);?></span></div>
		<?php }if($row['type'] == 'binary'){ ?>
		<div class='col-md-2 pull-right'><div class='dayVal' id="binary<?php echo $row['id']?>">N/A</div><span style='font-size:0.8em'><?php print_r( $row['name']);?></span></div>
		

	 <?php } //print_r($row);  
	}
	?>
	</div>

</div>
<div id='saveMessage'></div>
<div class='sidebar'>
<div class='row'>
<script>

	var comparisonShown = 0;
    $('#datepicker1').pickadate({
        format: 'dd/mm/yyyy'
    });
</script>
<?php
    $cols=1;		// Here we define the number of columns

    do{
        
    //if($result)
    {
        for($i=1;$i<=$cols;$i++){	// All the rows will have $cols columns even if
            // the records are less than $cols
            $row=mysql_fetch_array($result);

            if($row){
                if(i==1)
                    $variable_name1 = $row['name'];
                if(i==2)
                    $variable_name2 = $row['name'];

    
                        
?>

<?php if($row['type'] == 'count'){ ?>
<div class='col-md-4'>
					<div class='var'>
					<h3><?php _e( $row['name'], 'buddypress' ); ?></h3>
                    <div class='edit-entries' id='edit-entries<?php echo $row['id']?>'><div data-icon="h" class="icon"></div></div>
					</div>
					<div class='all-entries' id='dbs-entries<?php echo $row['id']?>'></div>
                    <div class='row' style='margin-bottom:30px;'>
                    <div class='col-xs-10' style='padding:2px;'>
					<input type="number" name="variable[]" id="<?php echo $row['id']?>" aria-required="true"  />
					</div>
                    <input type="hidden" name="variable_id[]" value="<?php echo $row['id']; ?>">
					<input type="hidden" id="entry_id<?php echo $row['id']; ?>" value="null">
					<div class='col-xs-2' style='padding:2px'>
                    <button class='reportButton' style='width:100%; font-size:1.5em' 
                    onclick='reportSave(<?php echo $row['id']; ?>, $("#entry_id<?php echo $row['id']?>").val(), $("#<?php echo $row['id']?>").val(), "new", "count"); $("#<?php echo $row['id']?>").val(0);$("#entry_id<?php echo $row['id']?>").val("null")'><div data-icon="l" class="icon-small"></div></button>
					</div></div>
				</div>

<script>
$( document ).ready(function() {

        $('input').attr('autocomplete','off');
       getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
       today =  $('#datepicker1').val();
       $( "#edit-entries<?php echo $row['id']?>" ).click(function() {
            if ($("#dbs-entries<?php echo $row['id']?>").is(":visible")){
                $("#dbs-entries<?php echo $row['id']?>").slideUp( "slow", function() {
                });
            } 
            else{
                $("#dbs-entries<?php echo $row['id']?>").slideDown( "slow", function() {
                });
            } 
        });
    });
    $('#datepicker1').change(function() {
        getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
    });
      

</script>

<?php 
			}//end if($row['type'] == 'count')

			if($row['type'] == 'score')
			{

?>
<div class='col-md-4'>
<div class='var'>
    <h3><?php _e( $row['name'], 'buddypress' ); ?></h3>
    <div class='edit-entries' id='edit-entries<?php echo $row['id']?>'><div data-icon="h" class="icon"></div></div>

    
</div>
 <div class='all-entries' id='dbs-entries<?php echo $row['id']?>'></div>
<div class='row'style='padding-top:10px; margin-bottom:30px'>
<div class='col-xs-10' style='padding-top:10px;'>
    <div class="slider" id="scoreSlider<?php echo $row['id']?>"></div>
    <span  id="<?php echo $row['id']?>">0</span><span>/10<span>
    
        <input hidden type="text" name="variable[]" id="scoreText<?php echo $row['id']?>"></input>
    <script>
        var sliders = $("#scoreSlider<?php echo $row['id']?>");
        sliders.noUiSlider({
            start: 0,
            connect: "lower",
            orientation: "horizontal",
            range: {
                'min': 0,
                'max': 10
            },
            serialization: {
                format: {
                    decimals: 0
                }
            }
        });
        sliders.on('slide', showScore);
        function showScore(){
            $("#scoreText<?php echo $row['id']?>").val($("#scoreSlider<?php echo $row['id']?>").val());
            $("#<?php echo $row['id']?>").html($("#scoreSlider<?php echo $row['id']?>").val());
        }
    </script>
    <script>
    $( document ).ready(function() {
        $( "#edit-entries<?php echo $row['id']?>" ).click(function() {
            if ($("#dbs-entries<?php echo $row['id']?>").is(":visible")){
                $("#dbs-entries<?php echo $row['id']?>").slideUp( "slow", function() {
                });
            } 
            else{
                $("#dbs-entries<?php echo $row['id']?>").slideDown( "slow", function() {
                });
            } 
        });
        today =  $('#datepicker1').val();
       getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
    });
    $('#datepicker1').change(function() {
        getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
    });
    </script>
    <input type="hidden" name="variable_id[]" value="<?php echo $row['id']; ?>">
<input type="hidden" id="entry_id<?php echo $row['id']; ?>" value="null"></div><div class='col-xs-2' style='padding:0px'>
<button class='reportButton' style='width:100%; font-size:1.5em' onclick='reportSave(<?php echo $row['id']; ?>,$("#entry_id<?php echo $row['id']?>").val(), $("#scoreSlider<?php echo $row['id']?>").val() ,"new","score"); $("#scoreSlider<?php echo $row['id']?>").val(0); $("#scoreText<?php echo $row['id']?>").val($("#<?php echo $row['id']?>").html("0"));$("#entry_id<?php echo $row['id']?>").val("null")'><i data-icon="l" class="icon-small"></i></button>
</div></div>
</div>
<?php 
			}//end if($row['type'] == 'score')

			if($row['type'] == 'binary')
			{

?><div class='col-md-4'>
        <div class='var' style='padding-bottom:30px'><h3><?php _e( $row['name'], 'buddypress' ); ?></h3>
        <span id='binary-not-set<?php echo $row['id']?>'>No recorded entry, please choose yes or no.</br></span>
        <div class='row'><div class='col-xs-10'>
			<input id='<?php echo $row['id'];?>' type="checkbox" />
		</div>
<div class='all-entries' id='dbs-entries<?php echo $row['id']?>'></div>
<script>
    $( document ).ready(function() {
        getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
        today =  $('#datepicker1').val();
        $.fn.bootstrapSwitch.defaults.onText = 'Yes';
        $.fn.bootstrapSwitch.defaults.offText = 'No';
        $("#<?php echo $row['id'];?>").bootstrapSwitch().on('switchChange.bootstrapSwitch', function(event, state) {
            console.log(state); // true | false
            if(state){
                binary<?php echo $row['id'];?> = 'Yes';
            }
            else{
                binary<?php echo $row['id'];?> = 'No';
            }
            entryid = $('#entry_id<?php echo $row["id"]; ?>').val();
        }); 
    });

    $('#datepicker1').change(function() {
        getEntries(<?php echo $row['id']?>, "<?php echo $row['type']?>");
    });
</script>
 <input type="hidden" name="variable_id[]" value="<?php echo $row['id']; ?>">

<input type="hidden" id="entry_id<?php echo $row['id']; ?>" value="null">
<div class='col-xs-2' style='padding:0px'>
<button  class='reportButton' style='width:100%; font-size:1.5em' onclick='reportSave(<?php echo $row['id']; ?>, entryid, binary<?php echo $row['id']?> ,"new","binary");'><i data-icon="l" class="icon-small"></i></button>
</div></div>
</div></div>
<?php 
				}//end if($row['type'] == 'binary')

				if($row['type'] == 'time')
				{
?>

        <!--h3><?php _e($row['name'], 'buddypress'); ?></h3>
<input type="text" name="variable[]" placeholder='07:00' id="$row['id']" aria-required="true"  /-->

<?php 
				}//end if($row['type'] == 'time')
				if($row['type'] == 'switches')
				{
?>

<!--div style='margin-top:10px' class="alert alert-info alert-dismissable">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
  <strong>Pick a date to view the amount of switches you made.</strong></br>You must have our chrome extension installed !!LINK!!
</div>
<h3><?php _e($row['name'], 'buddypress'); ?>: <span style='color:white' id='switches'><span></h3>
<input id='datepicker' placeholder="Choose a date" type="text"></input><input type='hidden' name="variable[]" id='switchCount'></input>
<script>
    	$('#datepicker').pickadate({
        format: 'mm/dd/yyyy',
         onSet: function(context) {
            d = $('#datepicker').val();
            $.post("http://digitalbrain-test.lancs.ac.uk/wp-includes/chrome-extension/getSwitchesCount.php", {user_id: <?php echo get_current_user_id(); ?>
				, date: d}, function(response) {
				$('#switchCount').val(response);
				$('#switches').html(response);
				console.log(response);
				});
				}
				});

</script-->
<?php
    			}//end if($row['type'] == 'switches')
    
?>

              <!--input type="hidden" name="variable_id[]" value="<?php echo $row['id']; ?>"-->
<?php
    
        	}//end if(row)
        	else{
           			//echo "<td>&nbsp;</td>";	//If there are no more records at the end, add a blank column
        	}//end else
    
    
              }//end for (cols)
        }//end if($result)
    } while($row);
    
    //echo "</table>";
    
    //bp_get_template_part( 'experiments/single/report' )
?>

<!--/form--> <!-- end report-experiment-form-->
</div>
</div> <!-- end div class-->
</div>

<div id='mlr_results' class='col-md-12'>
<table>

<?php

/*
 	Retrieve the variables of experiment from the database
 * */
      
    $experimentid = bp_get_current_experiment_id();
    $query="SELECT id, name, type FROM wp_bp_experiments_variables where wp_bp_experiments_variables.experiment_id='$experimentid'";
    $result = mysql_query($query);
    
    $variableIds = array();
    $dateTimes = array();
    $dateTimesPP = array();
	$dateTimesPPIndex = array();
    $variableNames = array();
    $variableTypes = array();
    $variableValues = array();
    $variableValuesPP = array();
    $variableNameValues = array();
    $variableNameValuesPP = array();
	$variableForDay = array();
	$variableForDayPP = array();
    
    echo "<tr>";
    
    do{
        $row=mysql_fetch_array($result);
        if($row)
        {
            $variableIds[] = $row['id'];
            $variableNames[] = $row['name'];
            $variableTypes[] = $row['type'];
            /*
            echo "<td width=33%><b>";
            echo $row['name'];
            echo "</td>";
            */
        }//end if($row)
        else
            break;
    }while($row);
	

/*
 	Retreive list of experiment's members 
  */
              
	$result8=mysql_query("SELECT wp_bp_experiments_members.user_id, wp_users.user_login FROM wp_bp_experiments_members, 
  		wp_users where wp_bp_experiments_members.experiment_id='$experimentid' 
  		AND wp_bp_experiments_members.user_id= wp_users.id AND wp_bp_experiments_members.is_banned=0");

	  do
	  {
	  	$row=mysql_fetch_array($result8);
	  	if($row)
	  	{
  			$experiment_memberIds[] = $row['user_id'];
			$experiment_memberNames[] = $row['user_login'];
		}//end if($row)
  	} while($row);
              
    
/*
 	Check if the variable values entries exists for the experiment
 * 
 * */
 
    $result1=mysql_query("SELECT count(*) FROM wp_bp_experiments_report WHERE experiment_id='$experimentid'");
    $row=mysql_fetch_array($result1);
    if($row)
    {

        $experiment_report_count = $row['count(*)'];
        if($experiment_report_count==0)
            echo "Please upload data for this experiment.";

        else if($experiment_report_count>0)
        {
            //$result2=mysql_query("select * from wp_bp_experiments_report where experiment_id=$experimentid and variable_id=$variableIds[0]");
			/*
			$query = "select DISTINCT(date_format (date_modified, '%d-%m-%Y')) AS report_date from wp_bp_experiments_report where 
				experiment_id=$experimentid order by date_format (date_modified, '%d-%m-%Y')";
			*/
			$query = "select DISTINCT(date_format (date_modified, '%d-%m-%Y')) AS report_date from wp_bp_experiments_report where 
				experiment_id='$experimentid' order by date_modified ASC";
				
			//echo $query;
			/*	
			$result2=mysql_query("select DISTINCT(date_format (date_modified, '%d-%m-%Y')) AS report_date from wp_bp_experiments_report where 
				experiment_id=$experimentid order by date_format (date_modified, '%d-%m-%Y')
			");
            */
            
            $result2=mysql_query($query);
			
            //echo "<table>";
            do{
                $row=mysql_fetch_array($result2);
                if($row){
                    //echo $row['report_date']. " ";
                    $dateTimes[] = $row['report_date'];
                }//end if($row)
            } while($row);

        }//end if ($experiment_report_count >0)
    }//end if row

?>

</table>


<?php
    
    //echo "experiment_report_count=".$experiment_report_count;
    
    /*
        If the data exists in experiments reports, show the visualization.
    */
    if($experiment_report_count>0)
    {


?>

   
<script>
	var variableIds_js = <?php echo json_encode($variableIds)?>;
	var variableTypes_js = <?php echo json_encode($variableTypes)?>;
	var variableNames_js = <?php echo json_encode($variableNames)?>;
  	var experimentId = <?php echo json_encode($experimentid)?>;
  	var userId = <?php echo json_encode($currentUserId)?>;
  	
  	var bigRadius = 70;
  	var smallRadius = 50;
  	
</script>


    <div id= "compare-results">
  
    </div>

              

 

<tr>

<?php //var names = <?php echo json_encode($variableNames); ?
//echo (bp_get_root_domain() . '/' . bp_get_experiments_root_slug() )."/single/getData.php";

/*

 Retreiving all participants' resutls from the database
 */

//$result4=mysql_query("select * from wp_bp_experiments_report where experiment_id=$experimentid and variable_id=$variableIds[0]");

$j=0;

//echo "count($dateTimes) before=".count($dateTimes);

for ($x = 0; $x < count($dateTimes); $x++) 
{
		/*
 			Check if all experiment variables has entries for each date
  		*/
		for ($y = 0; $y < count($variableNames); $y++) 
		{
			$j++;
			$id = $variableIds[$y];
			$query = "select count(*) from wp_bp_experiments_report where experiment_id='$experimentid' AND variable_id='$id' 
			AND date_format (date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
			//echo "query= ..".$query." ..";
			$result1 = mysql_query($query);
			$row=mysql_fetch_array($result1);
			if($row)
			{
				$variableForDay[$y] = $row['count(*)'];
				//if($variableForDay[$y]>0)
					//echo $query." ";
				//echo "variableForDay[".$y."]=".$variableForDay[$y]." ";
			}//end roow
	    
		}//end for ($y = 0; $y < count($variableNames); $y++) 
	
		/*
	  		Check if a variable report is missing for any date
	 	*/	
		for ($y = 0; $y < count($variableForDay); $y++) 
		{
			if($variableForDay[$y]==0)
			{
				//echo "variableForDay[y]=0 ".$variableForDay[$y].", x=".$x." ";
				$dateTimes[$x] = -1;
				break;
			}
		}//end for for ($y = 0; $y < count($variableForDay); $y++) 
}//end for

	/*
  		Remove the date if a variable report is missing for that date
 	*/	
//echo "count(dateTimes)before=".count($dateTimes);
for ($x = 0; $x < count($dateTimes); $x++) 
{
	//echo $dateTimes[$x];
	//echo "dateTimes[".$x."]=".$dateTimes[$x]." ";

	/*
	if($dateTimes[$x]==-1)
		unset($dateTimes[$x]);
	*/
	
	$key = array_search(-1,$dateTimes);
	if($key!==false)
	{
    	unset($dateTimes[$key]);
	}
		
		
	//unset( $dateTimes[array_search( -1, $dateTimes )] ); 
	 
}//end for

/*
 *   Dates with full entries for variables
 */

$dateTimes = array_values($dateTimes);
//echo "count(dateTimes)after=".count($dateTimes);
/*
echo "count(dateTimes)after=".count($dateTimes);
for ($x = 0; $x < count($dateTimes); $x++) 
{
	//echo $dateTimes[$x];
	//echo "dateTimes[".$x."]=".$dateTimes[$x]." ";
	if($dateTimes[$x]==-1)
		unset($dateTimes[$x]);
}//end for
*/

//$dateTimes = array_values($dateTimes);
//echo "count(dateTimes)after=".count($dateTimes);
/*
for ($x = 0; $x < count($dateTimes); $x++) 
{
	echo "dateTimes[".$x."]=".$dateTimes[$x]." ";
}//end for
*/



/*
 * 	Dates with full entries for varliables by the current user
 * */
	for ($x = 0; $x < count($dateTimes); $x++) 
	{
		//echo "dateTimes[". $x ."]= " .$dateTimes[$x]." ";
		
		$query = "select count(*) from wp_bp_experiments_report where 
			experiment_id='$experimentid' 
			AND user_id='$currentUserId'
			AND date_format (date_modified, '%d-%m-%Y')='$dateTimes[$x]'";

		//echo $query;
		
		$result1 = mysql_query($query);
		$row=mysql_fetch_array($result1);
		if($row)
		{
			$val = $row['count(*)'];
			if($val > 0)
			{
				$dateTimesPP[] = $dateTimes[$x];
				$dateTimesPPIndex[] = $x;
				//echo "x=" .$x;
			}
				
			//echo "variableForDay[y]=".$variableForDay[$y];
		}//end row
			
	}//end for
	

/*

 	Retreiving the current user's resutls from the database
*/	
	for ($x = 0; $x < count($dateTimesPP); $x++) 
	{
		/*
 			Check if all experiment variables has entries for each date, for the current user
  		*/
		for ($y = 0; $y < count($variableNames); $y++) 
		{
			$j++;
			$id = $variableIds[$y];
			$query = "select count(*) from wp_bp_experiments_report where experiment_id='$experimentid' AND variable_id='$id'
			AND user_id='$currentUserId' 
			AND date_format (date_modified, '%d-%m-%Y')='$dateTimesPP[$x]'";
			//echo "query= ..".$query." ..";
			$result1 = mysql_query($query);
			$row=mysql_fetch_array($result1);
			if($row)
			{
				$variableForDayPP[$y] = $row['count(*)'];
				//if($variableForDay[$y]>0)
					//echo $query." ";
				//echo "variableForDay[".$y."]=".$variableForDay[$y]." ";
			}//end roow
	    
		}//end for ($y = 0; $y < count($variableNames); $y++) 
	
		/*
	  		Check if a variable report is missing for any date, for the current user
	 	*/	
		for ($y = 0; $y < count($variableForDayPP); $y++) 
		{
			if($variableForDayPP[$y]==0)
			{
				//echo "variableForDay[y]=0 ".$variableForDay[$y].", x=".$x." ";
				$dateTimesPP[$x] = -1;
				break;
			}
		}//end for for ($y = 0; $y < count($variableForDayPP); $y++)
		 
	}//end for ($x = 0; $x < count($dateTimesPP); $x++) 

	/*
  		Remove the date if a variable report is missing for that date, for the current user
 	*/	
//echo "count(dateTimes)before=".count($dateTimesPP);
for ($x = 0; $x < count($dateTimesPP); $x++) 
{
	$key = array_search(-1,$dateTimesPP);
	if($key!==false)
	{
    	unset($dateTimesPP[$key]);
	}
	 
}//end for
		
//echo "count(dateTimes)after=".count($dateTimesPP);	
	
	
	
	
	
//	echo "count(dateTimesPP) = ". count($dateTimes). " ";
//	echo "count(dateTimesPP) = ". count($dateTimesPP). " ";
	/*
	//echo "count(dateTimesPP) =". count($dateTimesPP);
	for ($x = 0; $x < count($dateTimesPP); $x++) 
	{
		//echo "dateTimesPP(x) =". $dateTimesPP[$x];
	}
 	*/
 	
	for ($y = 0; $y < count($variableNames); $y++) 
	{
		/*
	  		Initialize arrays to hold all variable values,
		 */
			$variableValues[$y] = array();
			
		/*
	  		Initialize array to hold all variable values for the current user
		 */
			$variableValuesPP[$y] = array();
	}
 

 	for ($x = 0; $x < count($dateTimes); $x++) 
	{
	/*
	 * 		Retreive all varaibles values that have date entries for an experiment
	  */

		for ($y = 0; $y < count($variableNames); $y++) 
		{
	
			$j++;
			$id = $variableIds[$y];
			$type= $variableTypes[$y];
			//$query;
	
			if($type == "binary")
			{
				
				$query = "select * from wp_bp_experiments_report where experiment_id='$experimentid' AND variable_id='$id' AND 
				date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' 
				ORDER BY time(date_modified) DESC LIMIT 1";
				
				/*
				$query ="SELECT (SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentid' 
				AND variable1.variable_id= '$id' AND variable1.date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' and variable1.variable_value='Yes') as yesvalues, 
				(SELECT count(*) FROM wp_bp_experiments_report variable1 where variable1.experiment_id='$experimentid' 
				AND variable1.variable_id= '$id' AND variable1.date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' and variable1.variable_value='No') as novalues";
				*/
				
				
				/*
				$query = "select * from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";
				 */
			}
					
			if($type == "score")
			{
				
				$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentid' AND variable_id='$id' 
				AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
				/*
				$query = "select *, avg(variable_value) from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";			
				*/
			}
			
			if($type == "count")
			{
					
				$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]'";
				/*
				$query = "select *, count(variable_value) from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";
				*/  
			}
			
			//echo "...".$query. "...";
			$result1 = mysql_query($query);;
			do {
				$row = mysql_fetch_array($result1);
				if ($row) {
		
					//$index = $index+1;
		
					$val = $row['variable_value'];
					if ($val == 'Yes' || $val == 'yes')
						$val = 1;
					if ($val == 'No' || $val == 'no')
						$val = 0;
		
					if($type == "score")
						$val = $row['avg(variable_value)'];
					
					if($type == "count")
						$val = $row['sum(variable_value)'];
					
					//echo $variableNames[$y]."'s variable_value=". $val;
					//echo "x=". $x .", y=". $y ."variableValues y x's variable_value=". $val;
					$variableValues[$y][$x] = $val;
					//array_push($variableValues[$y], $val);
				}//end if($row)
			} while($row);
	    
		}//end for
	}//end for

	for ($x = 0; $x < count($dateTimesPP); $x++) 
	{
		/*
	  		Retreive all varaibles values that have date entries for an experiment for the current user
	    */
	    
		for ($y = 0; $y < count($variableNames); $y++) 
		{
	
			$j++;
			$id = $variableIds[$y];
			$type= $variableTypes[$y];
			//$query;
	
			if($type == "binary")
			{
				
				$query = "select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND user_id='$currentUserId' AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimesPP[$x]' 
				ORDER BY time(date_modified) DESC LIMIT 1";
				/*
				$query = "select * from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";
				 */
			}
					
			if($type == "score")
			{
				
				$query = "select *, avg(variable_value) from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND user_id='$currentUserId' AND variable_id='$id' 
				AND date_format(date_modified, '%d-%m-%Y')='$dateTimesPP[$x]'";
				/*
				$query = "select *, avg(variable_value) from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";			
				*/
			}
			
			if($type == "count")
			{
				$query = "select *, sum(variable_value) from wp_bp_experiments_report where experiment_id='$experimentid' AND variable_id='$id' 
				AND user_id='$currentUserId' AND date_format(date_modified, '%d-%m-%Y')='$dateTimesPP[$x]'";
				
				//echo "...".$query. "...";
				/*
				$query = "select *, count(variable_value) from (select * from wp_bp_experiments_report where experiment_id='$experimentid' 
				AND variable_id='$id' AND date_format(date_modified, '%d-%m-%Y')='$dateTimes[$x]' order by date_modified desc) x group by `user_id`";
				*/  
			}
			
			//echo "...".$query. "...";
			$result1 = mysql_query($query);;
			do {
				$row = mysql_fetch_array($result1);
				if ($row) 
				{
					$val = $row['variable_value'];
					if ($val == 'Yes' || $val == 'yes')
						$val = 1;
					if ($val == 'No' || $val == 'no')
						$val = 0;
		
					if($type == "score")
						$val = $row['avg(variable_value)'];
					
					if($type == "count")
						$val = $row['sum(variable_value)'];
					
					//echo $variableNames[$y]."'s variable_value=". $val;
					//echo "x=". $x .", y=". $y ."variableValues y x's variable_value=". $val;
					$variableValuesPP[$y][$x] = $val;
					
					if($type == "binary")
					{
						//echo "query is=  ".$query."   ";
						//echo "variableValuesPP[".$y."][".$x."]=". $variableValuesPP[$y][$x]."   ";
					}//end if($type == "binary")
					
				}//end if($row)
			} while($row);
	    
		}//end for
	}//end for

//echo "count(variableValues)=".count($variableValues)."  ";
//echo "count(variableValuesPP)=".count($variableValuesPP)."  ";
//echo "count(variableValuesPP[0])=".count($variableValuesPP[0])."  ";
//echo "count(variableValues0)=".count($variableValues[0][0]);

?>

<script type="text/javascript">

	var names =  <?php echo json_encode($variableNames); ?>;
	var values =  <?php echo json_encode($variableValues); ?>;
	
	var values_js =  <?php echo json_encode($variableValues); ?>;
	var valuesPP_js =  <?php echo json_encode($variableValuesPP); ?>;


	//alert("values[0].length="+values_js[0].length);		
	//alert("valuesPP_js[0].length="+valuesPP_js[0].length);	

	var times =  <?php echo json_encode($dateTimes); ?>;

	var values1 =  <?php echo json_encode($variableValues[$variable_chart1_index]); ?>;
	var values2 =  <?php echo json_encode($variableValues[$variable_chart2_index]); ?>;

	var nameVar1 =  <?php echo json_encode($variableNames[$variable_chart1_index]); ?>;
	var nameVar2 =  <?php echo json_encode($variableNames[$variable_chart2_index]); ?>;

	var typeVar1 =  <?php echo json_encode($variableTypes[$variable_chart1_index]); ?>;
	var typeVar2 =  <?php echo json_encode($variableTypes[$variable_chart2_index]); ?>;

</script>


<!--?php echo "All participants' results (daily)"; ?-->

<script type="text/javascript">

//var xdata =<?php echo json_encode($xdata); ?>	;

	var names =  <?php echo json_encode($variableNames); ?>;
	var valuesPP =  <?php echo json_encode($variableValuesPP); ?>;

	valuesPP[0] =  <?php echo json_encode($variableValuesPP[0]); ?>;

	var timesPP =  <?php echo json_encode($dateTimesPP); ?>;

	var valuesPP1 =  <?php echo json_encode($variableValuesPP[$variable_chart1_index]); ?>;
	var valuesPP2 =  <?php echo json_encode($variableValuesPP[$variable_chart2_index]); ?>;

	//alert("valuesPP1.length="+valuesPP1.length);
	//alert("valuesPP2.length="+valuesPP2.length);	
	
	//alert(values1[0]);
	//alert(values2[0]);

</script>




<?php

    //if( $variableTypes[$variable_chart1_index] == "binary" || $variableTypes[$variable_chart2_index] == "binary")
    {
        //echo "<br><br>Your results (cumulative)";
?>




</div> <!-- container -->

</main>

<div id="dbs-item-nav" role="complementary">
	<main class='container clearfix'>
        <div id="item-nav" class='vis-nav' style="">
        <div class="item-list-tabs no-ajax">
            <ul>
               <li>
               		<select id="shown-variable1" class='vis-select form-control' name="shown-variable1" tabindex="-1">

               			<?php
						    //echo $variable_chart1;
						  for ($x=0; $x<count($variableNames); $x++)
						    {
						        
						        if($variable_chart1 == $variableNames[$x])
						        {
						            $variable_chart1_index = $x;
						            
						?>
						        <option value="<?php echo $variableNames[$x]?>" selected><?php echo $variableNames[$x]?> </option>
						
						<?php
						        }//end if
						    else{
						?>
						        <option value="<?php echo $variableNames[$x]?>"><?php echo $variableNames[$x]?> </option>
						
						<?php
						        }//end else
						    }//end for
						?>
						       <option value="-1">Nothing</option>
               		</select>
               	</li>

               <li><select class='vis-select form-control' id="shown-variable2" name="shown-variable2" tabindex="-1">
               	
               	<?php
   
				    for ($x=0; $x<count($variableNames); $x++)
				    {
				        if($variable_chart2==NULL)
				        {
				            if($x==1)
				            {
				            	$variable_chart2_index = $x;
				?>
				            <option value="<?php echo $variableNames[$x]?>" selected><?php echo $variableNames[$x]?> </option>
				<?php
				            }//end if
				            else
				            {
				?>
				            <option value="<?php echo $variableNames[$x]?>"><?php echo $variableNames[$x]?> </option>
				<?php
				            }//end else
				        }//end if($variable_chart2==null)
				        
				        else if($variable_chart2!=NULL)
				        {
				        	
				            if($variable_chart2 == $variableNames[$x])
				            {
				                $variable_chart2_index = $x;
								
				
				?>
				        <option value="<?php echo $variableNames[$x]?>" selected><?php echo $variableNames[$x]?> </option>
				
				<?php
				            }//end if if($variable_chart2 == $variableNames[$x])
				            else
				            {
				?>
				            
				       <option value="<?php echo $variableNames[$x]?>"><?php echo $variableNames[$x]?> </option>
				<?php
				            }//end else
				        }//end else if($variable_chart2!=NULL)
				    }//end for
				
				?>
				                <option value="-1">Nothing</option>
               	
               	
               </select></li>
               
			 
               <li style='float:right'>               	
               	<select class='vis-select form-control' id="participantId" name="participantId">
               		<option value="Me">Just me</option>
               		<option value="All">All</option>
					<?php         		             
			              //If the experiment has more than 1 participants, show comparison option.
			              if(count($experiment_memberIds) > 1)
			              {
			              
				              $i=0;
				              while(1)
				              {
				              		
				              	if($i==count($experiment_memberNames))
				              		break;
			              
				              	//if($experiment_memberIds[$i] == $currentUserId)
				              	{
			              		//continue;
					     ?>
					              <!--option value="All"> Me vs All</option-->
			     <?php
			              		}
			              		if($experiment_memberIds[$i] != $currentUserId)
			              		{
			      ?>
					     <option value="<?php echo $experiment_memberIds[$i];?>"> Me vs <?php echo $experiment_memberNames[$i];?></option>
				<?php
			              		}//end else
			              		$i++;
			              
			              }//end while
				?>
					  				<option value="MeVsAll"> Me vs All</option>
				<?php
					 
					              }//end if(count($experiment_memberIds) > 0)
				?>               	
               	
               	
               	
               </select></li>
            </ul>
        </div>
    </div><!-- #item-nav -->
</main>
</div><!-- #dbs-item-nav -->

<main style="max-width:1200px; margin:0 auto; margin-bottom:20px">
	

    <ul class="nav nav-tabs" id="myTab">
	    <li class="active"><a href="#summary" >Summary</a></li>
	    <li><a href="#detail">Detail</a></li>
    </ul>
     
    <div class="tab-content">
	    <div class="tab-pane active" id="summary">
	    	
            <h1>Cumulative Results</h1>
            <p></p>
 
 
		 <?php
		    
		    /*
		     Show my cumulative results - default value
			 * 
		     */
		     
    		if(count($dateTimesPP) == 0)
		    {
		        echo "<br><br>You have not reported your results to this experiment. Please report them.";
		    }
    
    		if(count($dateTimesPP) > 0)
			{
				
		 	/*
				 * Displaying my results (cumulative)
			*/ 

		?>
		
		<script type="text/javascript">
			$(document).ready(function() {
		
					/*
					 * Remove content-cumulative divs
					 */
					
					if ($("#content-cumulative").length != 0)
					{
						$("#content-cumulative").remove();
					}
					


					if ($("#content-cumulative").length == 0)
					{
						$("<div id='content-cumulative' name='content-cumulative'> <h3>Results ("+nameVar1+ " vs "+nameVar2+")"
						+"</h3>  </div>").appendTo("#show-cumulative-charts");
					}
					
				if (typeVar1 == "binary" && typeVar2 == "binary") 
				{
					var count1 = 0;
					var count2 = 0;
					var count3 = 0;
					var count4 = 0;
		
					for (var i = 0; i < timesPP.length; ++i) 
					{
						if (valuesPP1[i] == 1 && valuesPP2[i] == 1) {
							count1++;
						}
		
						if (valuesPP1[i] == 1 && valuesPP2[i] == 0) {
							count2++;
						}
		
						if (valuesPP1[i] == 0 && valuesPP2[i] == 1) {
							count3++;
						}
		
						if (valuesPP1[i] == 0 && valuesPP2[i] == 0) {
							count4++;
						}
					}//end for
		
		
					//alert("count1="+count1+", count2="+count2+", count3="+count3+", count4="+count4);
					var xlabels1 = [];
					var xlabel1 = [];
					xlabel1.push(1, nameVar2 + "=Yes");
					xlabels1.push(xlabel1);
		
					var xlabel2 = [];
					xlabel2.push(4, nameVar2 + "=No");
					xlabels1.push(xlabel2);
		
					var ylabels = [];
					ylabels[0] = nameVar2 + "=Yes";
					ylabels[1] = nameVar2 + "=No";
		
					if(count1 > count2)
					{
						$("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar1+"=Yes<h5></div>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+count2+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");
						
					}
						
					if(count1 == count2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar1+"=Yes<h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count2+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");
					}
					
					if(count1 < count2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar1+"=Yes<h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+count1+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count2+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");
					}
					
		
					if(count3 > count4)
					{
						$("<div class='col-md-6 row' id='cumulative-right'><h5>"+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count3+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
						
						$("<div class='col-xs-6'><div class='smallCircle orange2'> <div class='big_white'>"+count4+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
					}
					
					if(count3 == count4)
					{
						$("<div class='col-md-6 row'id='cumulative-right'><h5>"+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count3+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
						
						$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count4+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
					}
					
					if(count3 < count4)
					{
						$("<div class='col-md-6 row'id='cumulative-right'><h5>"+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+count3+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
						
						$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count4+
						"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
					}					
					

				}//end if(typeVar1=='binary' && typeVar2=='binary')
				
				else if (typeVar1 == "binary" || typeVar2 == "binary") 
				{

					var d1 = [];
					var d2 = [];
					var ylabels = [];
					var xlabels1 = [];
					var totalCount1 = 0;
					var totalCount2 = 0;
					var avgScore1 = 0;
					var avgScore2 = 0.0;
					var count1 = 0;
					var count2 = 0;
					var displayedScore1 = 0;
					var displayedScore2 = 0;			
					var label2;
					var chartCount1;
					var chartCount2;
					var avgTotalLabel;
		
					if (typeVar1 == "binary") 
					{
		
						label2 = nameVar2;
						ylabels[0] = nameVar1 + ": Yes";
						ylabels[1] = nameVar1 + ": No";
		
						var xlabel1 = [];
						xlabel1.push(0.2, nameVar1 + ": Yes");
						xlabels1.push(xlabel1);
		
						var xlabel2 = [];
						xlabel2.push(1.2, nameVar1 + ": No");
						xlabels1.push(xlabel2);
		
						if (typeVar2 == "score") 
						{
							avgTotalLabel = "Average";
							for (var i = 0; i < valuesPP2.length; ++i) 
							{
								
								if (valuesPP1[i] == 1) {
									count1++;
									//avgScore1 = parseInt(avgScore1) + parseInt(values2[i]);
									if(valuesPP2[i]!=null && valuesPP2[i]!='')
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(valuesPP2[i]);	
									}
										
									//alert("avgScore1="+avgScore1);
								}
								if (valuesPP1[i] == 0) 
								{
									count2++;
									//avgScore2 = parseInt(avgScore2) + parseInt(values2[i]);
									//alert("valuesPP2["+i+"]="+valuesPP2[i]);
									if(valuesPP2[i]!=null && valuesPP2[i]!='')
									{
										avgScore2 = parseFloat(avgScore2) + parseFloat(valuesPP2[i]);
									}
										
								}
							}//end for
		
							if(count1==0)
							{
								displayedScore1 = 0;
							}
							else{
								displayedScore1 = parseFloat(avgScore1) / parseFloat(count1);
							}	
							if(count2==0)
							{
								displayedScore2 = 0
							}
							else{
								displayedScore2 = parseFloat(avgScore2) / parseFloat(count2);
							}	

							chartCount1 = parseFloat(displayedScore1.toFixed(1));
							chartCount2 = parseFloat(displayedScore2.toFixed(1));
							

		
						}//end if(typeVar2=="score")
		
						if (typeVar2 == "count") 
						{
							avgTotalLabel = "Total";
							for (var i = 0; i < valuesPP2.length; ++i) {
								if (valuesPP1[i] == 1) 
								{
									
									if(valuesPP2[i]!=null && valuesPP2[i]!='')
									{
										totalCount1 = parseInt(totalCount1) + parseInt(valuesPP2[i]);
									}
									
								}
								if (valuesPP1[i] == 0) 
								{
									//alert("parseInt(values2[i]="+parseInt(values2[i]);
									//alert("values2[i]="+values2[i]);
									//alert("totalCount2="+totalCount2);
									if(valuesPP2[i]!=null && valuesPP2[i]!='')
									{
										totalCount2 = parseInt(totalCount2) + parseInt(valuesPP2[i]);
									}
								}
							}//end for
							
							chartCount1 = praseInt(totalCount1);
							chartCount2 = praseInt(totalCount2);
		
						}//end if(typeVar2=="count")
		
					}//end if(typeVar1 == "binary")
					
					else if (typeVar2 == "binary") 
					{
		
						label2 = nameVar1;
						ylabels[0] = nameVar2 + ": Yes";
						ylabels[1] = nameVar2 + ": No";
		
						var xlabel1 = [];
						xlabel1.push(0.2, nameVar2 + " Yes");
						xlabels1.push(xlabel1);
		
						var xlabel2 = [];
						xlabel2.push(1.2, nameVar2 + " No");
						xlabels1.push(xlabel2);
		
						if (typeVar1 == "score") {
							avgTotalLabel = "Average";
							for (var i = 0; i < valuesPP1.length; ++i) {
								if (valuesPP2[i] == 1) {
									count1++;
									//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
									if(valuesPP1[i]!=null && valuesPP1[i]!='')
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(valuesPP1[i]);
									}
										
								}
								if (valuesPP2[i] == 0) {
									count2++;
									//avgScore2 = parseInt(avgScore2) + parseInt(values1[i]);
									if(valuesPP1[i]!=null && valuesPP1[i]!='')
									{
										avgScore2 = parseFloat(avgScore2) + parseFloat(valuesPP1[i]);
									}
								}
							}//end for
		
		
							if(count1==0)
							{
								displayedScore1 = 0;
							}
							else{
								displayedScore1 = parseFloat(avgScore1) / parseFloat(count1);
							}	
							if(count2==0)
							{
								displayedScore2 = 0
							}
							else{
								displayedScore2 = parseFloat(avgScore2) / parseFloat(count2);
							}	

							chartCount1 = parseFloat(displayedScore1.toFixed(1));
							chartCount2 = parseFloat(displayedScore2.toFixed(1));

						}//end if(typeVar1=="score")
		
						if (typeVar1 == "count") {
							avgTotalLabel = "Total";
							for (var i = 0; i < valuesPP1.length; ++i) {
								if (valuesPP2[i] == 1) {
									
									if(valuesPP1[i]!=null && valuesPP1[i]!='')
									{
										totalCount1 = parseInt(totalCount1) + parseInt(valuesPP1[i]);
									}
									
								}
								if (valuesPP2[i] == 0) {
									if(valuesPP1[i]!=null && valuesPP1[i]!='')
									{
										totalCount2 = parseInt(totalCount2) + parseInt(valuesPP1[i]);
									}
									
								}
							}//end for

							chartCount1 = parseInt(totalCount1);
							chartCount2 = parseInt(totalCount2);
						}//end if(typeVar2=="count")
		
					}//end if(typeVar2 == "binary")
					
					
					//alert("chartCount1="+chartCount1);
					//alert("count2="+count2);
					//alert("chartCount2="+chartCount2);
					
					if(chartCount1 > chartCount2)
					{
						$("<div class='col-md-6 row' id='cumulative-left'><h5>"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
						
					}
						
					if(chartCount1 == chartCount2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
					}
					
					if(chartCount1 < chartCount2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
					}
				} //end else if(typeVar1=="binary" || typeVar2=="binary")
				else if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 
				{
					//alert("count/score vs. count/score");
					var user_correlationValue = mathUtils.getPearsonsCorrelation(valuesPP1, valuesPP2);
					//var user_correlationValue = 2.0;
					//alert("user_correlationValue="+user_correlationValue);
					//alert("valuesPP1.length="+valuesPP1.length);
					//alert("valuesPP2.length="+valuesPP2.length);
					//user_correlationValue = mathUtils.getPearsonsCorrelation(valuesPP1, valuesPP2);
					//alert("user_correlationValue="+user_correlationValue);
					
					var line1 = "Correlation value";
					var line2 = "Correlation value";

					var totalCount1 = 0;
					var totalCount2 = 0;
					var avgScore1 = 0.0;
					var avgScore2 = 0.0;
					var count1 = 0;
					var count2 = 0;
					var displayedScore1 = 0;
					var displayedScore2 = 0;			
					var chartCount1;
					var chartCount2;
					var avgTotalLabel = "Average";
							
	
					for (var i = 0; i < valuesPP1.length; ++i) 
					{
						
						//alert("valuesPP1["+i+"]="+valuesPP1[i]);
						count1++;
						//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
						if(valuesPP1[i]!=null && valuesPP1[i]!='')
						{
							avgScore1 = parseFloat(avgScore1) + parseFloat(valuesPP1[i]);
						}	
						
						count2++;
						if(valuesPP2[i]!=null && valuesPP2[i]!='')
						{
							avgScore2 = parseFloat(avgScore2) + parseFloat(valuesPP2[i]);
						}	
						
						//alert("avgScore1="+avgScore1);	
						//alert("avgScore2="+avgScore2);					
					}//end for


					if(count1==0)
					{
						displayedScore1 = 0;
					}
					else{
						displayedScore1 = parseFloat(avgScore1) / parseFloat(count1);
					}	
					if(count2==0)
					{
						displayedScore2 = 0
					}
					else{
						displayedScore2 = parseFloat(avgScore2) / parseFloat(count2);
					}	

					chartCount1 = parseFloat(displayedScore1.toFixed(1));
					chartCount2 = parseFloat(displayedScore2.toFixed(1));
					

					if(chartCount1 > chartCount2)
					{
						$("<div class='col-md-6 row' id='cumulative-left'><h5></h5></div>").appendTo("#show-cumulative-charts");
						
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
						
					}

					else if(chartCount1 == chartCount2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5></h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
					}
					
					else if(chartCount1 < chartCount2)
					{
		
		                $("<div class='col-md-6 row' id='cumulative-left'><h5></h5></div>").appendTo("#show-cumulative-charts");
		
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
					}					

				}// end else if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 
		
			});
		
		</script>
		

		<div id="show-cumulative-charts" class='row'>
		                            
		</div>

		<div id="show-comparison-charts" class='row'>
                 
        </div>
		
		
		<?php
		 
			}//end if(count(dateTimesPP) > 0)
		
		?>                           
            	    
	    
	    </div><!-- end div id='summary'-->
	    <div class="tab-pane" id="detail">
	    
	    	<h1>Daily Results</h1>
            <p></p>
            
				<div name="show-daily-charts" id="show-daily-charts">
	               
				</div>       
	            
	            <div name="show-comparison-daily-charts" id="show-comparison-daily-charts">
	                    
	            </div>
	            
	            <?php
	    
	    		if(count($dateTimesPP) == 0)
			    {
			        echo "<br><br>You have not reported your results to this experiment. Please report them.";
			    }
	    
	    		if(count($dateTimesPP) > 0)
	    		{
	    			//echo count($dateTimesPP);
		    		//echo "<br><br>Your results (daily)";
		?>
	
				
				<script type="text/javascript">
					$(document).ready(function() {
				
						
						if (typeVar1 == "binary" && typeVar2 == "binary") 
						{
				
							var d1 = [];
							var d2 = [];
							var dOne = 0;
							var dTwo = 0;
				
							for (var i = 0; i < timesPP.length; ++i) {
								if (valuesPP1[i] == 1 && valuesPP2[i] == 1) {
									d1.push([i, 1]);
								}
				
								if (valuesPP1[i] == 1 && valuesPP2[i] == 0) {
									d1.push([i, -1]);
								}
				
								if (valuesPP1[i] == 0 && valuesPP2[i] == 1) {
									d2.push([i, 1]);
								}
								if (valuesPP1[i] == 0 && valuesPP2[i] == 0) {
									d2.push([i, -1]);
								}
				
							}//end for
				
				
							var xlabels = [];
							for (var i = 0; i < timesPP.length; ++i) 
							{
								var latestDate= timesPP[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.3, newDate);
								xlabels.push(xlabel);
							}//end for
				
							var numDays = xlabels.length;
							if(numDays<7)
							{
								//alert("numDays="+numDays);
								var latestDate= xlabels[xlabels.length-1].toString();
								var index = latestDate.indexOf(",")+1;
								var latestDateString = latestDate.substr(index, latestDate.length-1);
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDateString);		
				
								for(var x=numDays; x<7; x++)
								{
									var difference = x-numDays;
									parsedDate.setDate(parsedDate.getDate()+1);
									//alert("parsedDate-new="+parsedDate); 
									var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
									//alert("newDate="+newDate);
									
									var xlabel = [];
									//xlabel.push(x, "Day"+ (x+1)+ " ");
									xlabel.push(x+0.3, newDate);
									xlabels.push(xlabel);
									
									d1.push([x, "nil"]);
									d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)
				
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
				
							var data = [{
								data : d1,
								label : nameVar1 + "=Yes",
								color : "#98c734"
							}, {
								data : d2,
								label : nameVar1 + "=No",
								color : "#fc972a"
							}];
	
								
							var placeholder = $("#placeholder-daily");
				
							var plot = $.plot(placeholder, data, {
								bars : {
									show : true,
									barWidth : 0.5,
									fill : 0.9
								},
								xaxis : {
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.05, xlabels.length],
									axisLabel: ' '
								},
								yaxis : {
									ticks : [[0.5, "Yes"], [-0.5, "No"]],
									axisLabel : nameVar2,
									panRange: false,
								},
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-daily")
								},
								pan: {
									interactive: true
								},
								
							});
				
							$("<div id='tooltip'></div>").css({
								position : "absolute",
								display : "none",
								border : "1px solid #fdd",
								padding : "2px",
								"background-color" : "#fee",
								opacity : 0.80
							}).appendTo("body");
				
							placeholder.bind("plothover", function(event, pos, item) {
				
								//    if ($("#enablePosition:checked").length > 0)
								{
									var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
									//$("#hoverdata").text(str);
								}
				
								//if ($("#enableTooltip:checked").length > 0)
								{
									if (item) {
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
										if (y == 1)
											y = "Yes";
										else if (y == -1)
											y = "No";
				
										$("#tooltip").html(item.series.label + " , " + nameVar2 + " = " + y).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
				
									} else {
										$("#tooltip").hide();
									}
								}
							});
				
							placeholder.bind("plotclick", function(event, pos, item) {
								if (item) {
									//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
									var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
									if (y == 1)
										y = "Yes";
									else if (y == -1)
										y = "No";
				
									$("#tooltip").html(item.series.label + " , " + nameVar2 + " = " + y).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});				
								
		
		
						}//end if(typeVar1=='binary' && typeVar2=='binary')
						else if (typeVar1 == "binary" || typeVar2 == "binary") 
						{
				
							var d1 = [];
							var d2 = [];
							var ylabels = [];
							var label2;
				
							if (typeVar1 == "binary" && (typeVar2 == "score" || typeVar2 == "count")) 
							{
								label2 = nameVar2;
								ylabels[0] = nameVar1 + " Yes";
								ylabels[1] = nameVar1 + " No";
								for (var i = 0; i < valuesPP2.length; ++i) 
								{
									//alert("valuesPP2["+i+"]="+valuesPP2[i]);
									if (valuesPP1[i] == 1)
									{
										if(valuesPP2[i]!=null && valuesPP2[i]!='')
											d1.push([i, valuesPP2[i]]);
									}
										
				
									if (valuesPP1[i] == 0)
									{
										if(valuesPP2[i]!=null && valuesPP2[i]!='')
											d2.push([i, valuesPP2[i]]);
									}
										
								}//end for
				
							}//end if(typeVar1 == "binary" && (typeVar2== "score" || typeVar2== "count"))
				
							if (typeVar2 == "binary" && (typeVar1 == "score" || typeVar1 == "count")) 
							{
								label2 = nameVar1;
								ylabels[0] = nameVar2 + "=Yes";
								ylabels[1] = nameVar2 + "=No";
								for (var i = 0; i < valuesPP1.length; ++i) 
								{
				
									if (valuesPP2[i] == 1)
									{
										if(valuesPP1[i]!=null && valuesPP1[i]!='')
											d1.push([i, valuesPP1[i]]);
									}
									if (valuesPP2[i] == 0)
									{
										if(valuesPP1[i]!=null && valuesPP1[i]!='')
											d2.push([i, valuesPP1[i]]);
									}
										
								}//end for
							}//end if(typeVar2 == "binary" && (typeVar1== "score" || typeVar1== "count"))
				
							var xlabels = [];
							for (var i = 0; i < timesPP.length; ++i) 
							{
								var latestDate= timesPP[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.3, newDate);
								xlabels.push(xlabel);
							}//end for
				
							var numDays = xlabels.length;
							if(numDays<7)
							{
				
								var latestDate= xlabels[xlabels.length-1].toString();
								var index = latestDate.indexOf(",")+1;
								var latestDateString = latestDate.substr(index, latestDate.length-1);
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDateString);		
				
								for(var x=numDays; x<7; x++)
								{
									var difference = x-numDays;
									parsedDate.setDate(parsedDate.getDate()+1);
									//alert("parsedDate-new="+parsedDate); 
									var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
									//alert("newDate="+newDate);
									
									var xlabel = [];
									//xlabel.push(x, "Day"+ (x+1)+ " ");
									xlabel.push(x+0.3, newDate);
									xlabels.push(xlabel);
									
									d1.push([x, "nil"]);
									d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)
				
							var data = [{
								data : d1,
								//data: [ [0,1], [1, 5], [3, 7] ],
								label : ylabels[0],
								color : "#98c734"
							}, {
								data : d2,
								//data: [ [4,1], [5, 5], [6, 7] ],
								label : ylabels[1],
								color : "#fc972a"
							}];
				
							var placeholder = $("#placeholder-daily");
				
							var plot = $.plot(placeholder, data, {
								bars : {
									show : true,
									barWidth : 0.5,
									fill : 0.9
								},
				
								xaxis : {
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.2, xlabels.length],
									axisLabel: ' ',
				
								},
				
								yaxis : {
									axisLabel : label2,
									panRange: false,
								},
				
								grid : {
									hoverable : true,
									clickable : true
								},
				
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-daily")
								},
								pan: {
									interactive: true
								},
				
							});
				
							$("<div id='tooltip'></div>").css({
								position : "absolute",
								display : "none",
								border : "1px solid #fdd",
								padding : "2px",
								"background-color" : "#fee",
								opacity : 0.80
							}).appendTo("body");
				
							placeholder.bind("plothover", function(event, pos, item) {
				
								//    if ($("#enablePosition:checked").length > 0)
								{
									var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
									//$("#hoverdata").text(str);
								}
				
								//if ($("#enableTooltip:checked").length > 0)
								{
									if (item) {
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
										if (y == 1)
											y = "Yes";
										else if (y == -1)
											y = "No";
				
										$("#tooltip").html(item.series.label + " , " + label2 + " = " + y).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
				
									} else {
										$("#tooltip").hide();
									}
								}
							});
				
							placeholder.bind("plotclick", function(event, pos, item) {
								if (item) {
									//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
									var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
									if (y == 1)
										y = "Yes";
									else if (y == -1)
										y = "No";
				
									$("#tooltip").html(item.series.label + " , " + label2 + " = " + y).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});
				
						}//end else if(typeVar1=="binary" || typeVar2=="binary")
				
						else if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 
						{
				
							var d1 = [];
							var d2 = [];
				
							var xlabels = [];
				
							for (var i = 0; i < timesPP.length; ++i) {
								//alert("times[0]="+times[0]);
								var xlabel = [];
								xlabel.push(i+0.5, timesPP[i]);
								xlabels.push(xlabel);
				
								d1.push([i, valuesPP1[i]]);
								d2.push([i+0.45, valuesPP2[i]]);
				
							}
							
							var numDays = xlabels.length;
							if(numDays<7)
							{
								//alert("numDays="+numDays);
								var latestDate= xlabels[xlabels.length-1].toString();
								var index = latestDate.indexOf(",")+1;
								var latestDateString = latestDate.substr(index, latestDate.length-1);
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDateString);		
				
								for(var x=numDays; x<7; x++)
								{
									var difference = x-numDays;
									parsedDate.setDate(parsedDate.getDate()+1);
									//alert("parsedDate-new="+parsedDate); 
									var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
									//alert("newDate="+newDate);
									
									var xlabel = [];
									//xlabel.push(x, "Day"+ (x+1)+ " ");
									xlabel.push(x+0.3, newDate);
									xlabels.push(xlabel);
									
									d1.push([x, "nil"]);
									d2.push([x+0.45, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)						
				
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
				
							var data = [{
								data : d1,
								label : nameVar1,
								color : "#98c734"
							}, {
								data : d2,
								label : nameVar2,
								color : "#fc972a",
								yaxis : 2
							}];
				
							var placeholder = $("#placeholder-daily");
							var plot = $.plot(placeholder, data, {
								
								/*
								lines : {
									show : true
								},
								points : {
									show : true
								},
								*/

								bars : {
									show : true,
									barWidth : 0.43,
									fill : 0.9
								},							
								
								xaxis : //{ ticks: xlabels, autoscaleMargin: 1},
								{
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.2, xlabels.length],
									axisLabel: ' ',
								},
								yaxes : [{
									min : 0,
									panRange: false,
								}, {
									position : "right",
									panRange: false,
								}],
				
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-daily")
								},
								pan: {
									interactive: true
								},
				
							});
				
							$("<div id='tooltip'></div>").css({
								position : "absolute",
								display : "none",
								border : "1px solid #fdd",
								padding : "2px",
								"background-color" : "#fee",
								opacity : 0.80
							}).appendTo("body");
				
							placeholder.bind("plothover", function(event, pos, item) {
				
								//    if ($("#enablePosition:checked").length > 0)
								{
									var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
									//$("#hoverdata").text(str);
								}
				
								//if ($("#enableTooltip:checked").length > 0)
								{
									if (item) {
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
										$("#tooltip").html(item.series.label + " = " + y).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
				
									} else {
										$("#tooltip").hide();
									}
								}
							});
				
							placeholder.bind("plotclick", function(event, pos, item) {
								if (item) {
									//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
									var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
									$("#tooltip").html(item.series.label + " = " + y).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});
				
						}//end else if( (typeVar1== "score" || typeVar1== "count") && (typeVar2== "score" || typeVar2== "count")  )
				
					});
					
				</script>
				
							
				<div id="content-daily" name="content-daily">
						<div style='text-align:center; width:80%;'>Results (daily)</div>
				    	<div class="demo-container" id="legendcontainer-daily"></div>
						<div id="placeholder-daily" class="demo-placeholder" style="height:400px; width:80%;"></div>
					    <span id="hoverdata"></span>
					    <span id="clickdata"></span>
				</div>
				

		<?php
				}//end if(count($dateTimesPP) > 0)
		?>


	    
	    
	    
	    </div><!-- end div id='detail'-->

    </div>
 
<script type="text/javascript">

$(document).ready(function() {
	
	$('#myTab a').click(function (e) {
    	//alert("mytab clicked");
      
    	e.preventDefault();
    	$(this).tab('show');
    	//alert("active tab="+$('.nav-tabs .active').text());
    	
    	        

 		if($('.nav-tabs .active').text()=="Detail")
 		{
 			//$("#show-daily-charts").empty();
	 		showResults();  
	 		//$('[name="show-daily-charts"]').attr("style", "visibility: hidden");
	 		//$('[name="show-daily-charts"]').attr("style", "visibility: visible");			
 		}
   });
	

});


    $(function () {
    	$('#myTab a:first').tab('show');
    });

$( ".vis-select" ).change(function() {
  showResults();
});
alertCount = 0;
$( ".reportButton" ).click(function() {
  $(this).parent().parent().before('<div id="alert'+alertCount +'"class="alert alert-success"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>Saved!</strong></div>');
  $('#alert'+alertCount).delay( 2800 ).slideUp(300);
  alertCount++;
 });
</script>   

<?php
		}//end if( $variableTypes[$variable_chart1_index] == "binary" || $variableTypes[$variable_chart2_index] == "binary")
	//}//end if (count($dateTimesPP) > 0)
}//end if(experiment_count>0)
?>

<?php 
else:?>

 You must be logged in and a member of this experiment to report.
 <script>
    $( document ).ready(function() {
        setTimeout(function (event) {
            $('#clickme').click();
        }, 2000);

    });
</script>
    <?php ;endif; ?><!-- end  (is_user_logged_in() && bp_experiment_is_member() ) -->
</div>