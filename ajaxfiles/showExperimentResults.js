var mathUtils = {};
mathUtils.getPearsonsCorrelation = function(x, y) 
{
	var answer = 0;
	var shortestArrayLength = 0;
	if(x.length == y.length)
	{
		shortestArrayLength = x.length;
	}
	else if(x.length > y.length)
	{
		shortestArrayLength = y.length;
		//console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' item(s) will be ignored');
	}
	else
	{
		shortestArrayLength = x.length;
		//console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' item(s) will be ignored');
	}
 
	var xy = [];
	var x2 = [];
	var y2 = [];
 
	for(var i=0; i<shortestArrayLength; i++)
	{
		xy.push(x[i] * y[i]);
		x2.push(x[i] * x[i]);
		y2.push(y[i] * y[i]);
	}
 
	var sum_x = 0;
	var sum_y = 0;
	var sum_xy = 0;
	var sum_x2 = 0;
	var sum_y2 = 0;
 
	for(var i=0; i<shortestArrayLength; i++)
	{
		/*
		sum_x += parseFloat(x[i]);
		sum_y += parseFloat(y[i]);
		sum_xy += parseFloat(xy[i]);
		sum_x2 += parseFloat(x2[i]);
		sum_y2 += parseFloat(y2[i]);
		*/
		/*
		sum_x += x[i];
		sum_y += y[i];
		sum_xy += xy[i];
		sum_x2 += x2[i];
		sum_y2 += y2[i];
		*/
		sum_x = parseFloat(sum_x) + parseFloat(x[i]);
		sum_y = parseFloat(sum_y) + parseFloat(y[i]);
		sum_xy = parseFloat(sum_xy) + parseFloat(xy[i]);
		sum_x2 = parseFloat(sum_x2) + parseFloat(x2[i]);
		sum_y2 = parseFloat(sum_y2) + parseFloat(y2[i]);
	}
 
 	//alert("shortestArrayLength="+parseFloat(shortestArrayLength)+", sum_xy="+sum_xy+", sum_x * sum_y="+(sum_x * sum_y));

	
	var step1 = (parseFloat(shortestArrayLength) * parseFloat(sum_xy)) - (parseFloat(sum_x) * parseFloat(sum_y));
	var step2 = (parseFloat(shortestArrayLength) * parseFloat(sum_x2)) - (parseFloat(sum_x) * parseFloat(sum_x));
	var step3 = (parseFloat(shortestArrayLength) * parseFloat(sum_y2)) - (parseFloat(sum_y) * parseFloat(sum_y));
/*

	var step1 = (shortestArrayLength * sum_xy) - (sum_x * sum_y);
	var step2 = (shortestArrayLength * sum_x2) - (sum_x * sum_x);
	var step3 = (shortestArrayLength * sum_y2) - (sum_y * sum_y);
*/	
	var step4 = Math.sqrt(step2 * step3);
	answer = step1 / step4;
	
	/*
	 * To prevent divide by Zero situation
	 */
	if(step1==0)
		answer = 0;
	
	//alert("step1="+step1+", step4="+step4+", answer="+answer);
 
	return answer;
}//end pearsoncorrelation



function showResults()
{
	var variable1 = document.getElementById("shown-variable1").value;
	var variable2 = document.getElementById("shown-variable2").value;
/*
 	alert("experimentId="+experimentId);
	alert("userId="+userId);
	alert("variable1="+variable1);
	alert("variable2="+variable2);
*/
   //alert("values.length="+values.length);		
   //alert("variable1="+variable1);
   //alert("variable2="+variable2);
  //if(variable1 == "-1" && variable2 == "-1")
  //return;
  
	//var variable1_index = <?php echo json_encode($variable_chart1_index)?>;
	//alert(variable1_index);
  
	//alert("testing");
  
	var variable1_index= document.getElementById("shown-variable1").selectedIndex;
  	var variable1_id = variableIds_js[variable1_index];
	//alert("variable1_index="+variable1_index);
	//alert("variableIds_js[variable1_index]="+variableIds_js[variable1_index]);
  
	var variable2_index= document.getElementById("shown-variable2").selectedIndex;
	var variable2_id = variableIds_js[variable2_index];
	//alert("variable2_index="+variable2_index);
	//alert("variableIds_js[variable2_index]="+variableIds_js[variable2_index]);

	//var typeVar1 =  <?php echo json_encode($variableTypes[$variable1_index]); ?>;
	//var typeVar2 =  <?php echo json_encode($variableTypes[$variable2_index]); ?>;
		
	//var variableTypes_js = <?php echo json_encode($variableTypes)?>;
	//var values = <?php echo json_encode($variableValues); ?>;

	var values1 =  values[variable1_index];
	var values2 =  values[variable2_index];
	
	var valuesPP1 =  valuesPP[variable1_index];
	var valuesPP2 =  valuesPP[variable2_index];
	
 	//alert("valuesPP1.length="+valuesPP1.length);
 	//alert("valuesPP2.length="+valuesPP2.length);
	
	var nameVar1 = variableNames_js[variable1_index];
	var nameVar2 = variableNames_js[variable2_index];
			
	var typeVar1 =  variableTypes_js[variable1_index];
	var typeVar2 =  variableTypes_js[variable2_index];
	
	//alert("typeVar1="+typeVar1);
	//alert("typeVar2="+typeVar2);
	//alert(values1.length);
	//var experiment_results_period = <?php echo json_encode($experiment_results_period)?>;			
//	var experiment_results_period = $("input[type='radio'][name='results-period']:checked").val();
	
//	var experiment_results_start_date = $("#datepicker2").val();
	//alert(experiment_results_start_date);
		
 	//alert(<?php echo json_encode($variable1_index); ?>);
 	//alert(<?php echo json_encode($variable2_index); ?>);
/*
 	alert(variable1_index);
 	alert(variable2_index);
 	alert(typeVar1);
	alert(typeVar2);
*/
	if(variable1=="-1")
  		variable1_id = -1;
  
	if(variable2=="-1")
 	 	variable2_id = -1;
  
	//alert("variable1_id="+variable1_id);
	//alert("variable2_id="+variable2_id);
	
	var participantId = document.getElementById("participantId").value;
	//alert("participantId="+participantId);
	
	if(participantId!="Me" && participantId!="All")
	{
		/*
		if(participantId=="MeVsAll")
		{
			participantId=="All";
		}//end if(participantId=="MeVsAll")
		*/
		
		showComparison();
	}//end if(participantId!="Me" && participantId!="All")
	else if(participantId=="Me" || participantId=="All")
	{
		
			//alert("timesPP.length="+timesPP.length);
		
			var d1 = [];
			var d2 = [];
			var d3 = [];
			var d4 = [];
			
		  	/*
		  	 * Remove comparison charts if the participantId is Me or All
		  	 */

	  		
	  		$("#show-cumulative-charts").empty();
	  		
	  		$("#show-daily-charts").empty();
	  		
	  		$("#show-comparison-charts").empty();
	  		
	  		$("#show-comparison-daily-charts").empty();
	  			
		  	if($("#comparison-cumulative").length !=0)
			{
				$( "#comparison-cumulative" ).remove();
			}
			
	    	if($("#comparison-individual").length !=0)
			{
				$( "#comparison-individual" ).remove();
			}			
				
	 	  	if($("#content-daily").length !=0)
			{
				$( "#content-daily" ).remove();
			}
			
	  	  	if($("#content-daily-pp").length !=0)
			{
				$( "#content-daily-pp" ).remove();
			}  

			if($("#content-cumulative").length != 0)
			{
				$("#content-cumulative").remove();
			}
			
			
			if($("#content-cumulative-pp").length != 0)
			{
				$("#content-cumulative-pp").remove();
				
			}


			if(variable1_id==-1 && variable2_id==-1)
		    {
		    	//alert("both nothing");
		  	
		  		//$("#show-cumulative-pp-charts").empty();
		  		
		  		//$("#show-daily-charts-pp").empty();
		  		
		  		$("#show-cumulative-charts").empty();
		  		
		  		$("#show-daily-charts").empty();
		  		
		  		$("#show-comparison-charts").empty();
		  		
		  		$("#show-comparison-daily-charts").empty();		  		
		  				  		
		    }//end if(variable1_id==-1 && variable2_id==-1)
		    
		    else if( 
		        	(variable1_id==-1 && variable2_id!=-1) || (variable1_id!=-1 && variable2_id==-1) 
		          )
		    {
		    	var variable_id;
		    	var nameVar;
		    	var typeVar;
		    	var values_temp;
		    	var valuesPP_temp;
		    	
		    	if ($("#content-daily").length != 0)
		    	{
		    		//alert("content-daily exists");
		    		$("#content-daily").remove();
		    	}
		    	else
		    		//alert("content-daily does not exist");
		    	
				if ($("#content-daily").length == 0)
				{
					$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'></div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");
					
				}		    	
		    	
		    	
		    	if(variable1_id!=-1)
		        {
		        	variable_id = variable1_id;
		        	nameVar = nameVar1;
		        	typeVar = typeVar1;
		        	values_temp = values1;
		        	valuesPP_temp = valuesPP1;
		        	
		        }//end if(variable1_id!=-1)
		    	else if(variable2_id!=-1)
		        {
		        	variable_id = variable2_id;
		        	nameVar = nameVar2;
		        	typeVar = typeVar2;
		        	values_temp = values2;
		        	valuesPP_temp = valuesPP2;
		        }//end if(variable2_id!=-1)
		        
		        //alert("variable_id="+variable_id);
		        //alert("nameVar="+nameVar);
		        //alert("typeVar="+typeVar);
		        
		  		if(typeVar=="binary")
		        {
					var d1 = [];
					var d2 = [];					
					
					var dc1 = [];
					var dc2 = [];
		
					var count1 = 0;
					var count2 = 0;	
					
					var xlabels = [];

					if(participantId=="All")
					{	
						
						showAllResults();
						
						
					}//end if(participantId=="All")
					
					else if(participantId=="Me")
					{
						//alert("participantId is Me");
						
						
							if(timesPP.length==0)
							{
								$("#show-daily-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
								
								$("#show-cumulative-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
								
								
								return;
							}
						

						/*
						 * Cumulative data per participant
						 */
												
						for (var i = 0; i < timesPP.length; ++i) 
						{
							if (valuesPP_temp[i] == 1)  
							{
								count1++;
							}
			
							if (valuesPP_temp[i] == 0) 
							{
								count2++;
							}
						}//end for
			
						dc1.push([0, count1]);
						dc2.push([2, count2]);
						
						//alert("valuesPP_temp.length="+valuesPP_temp.length);
						/*
						 * Daily data per participant
						 */
						
						for(var i=0; i< valuesPP_temp.length; i++)
						{
							//alert("valuesPP_temp["+i+"]="+valuesPP_temp[i]);
							if(valuesPP_temp[i]==1)
								d1.push([i, 1]);
								
							if(valuesPP_temp[i]==0)
								d2.push([i, 1]);							
						}//end for
						

						for (var i = 0; i < timesPP.length; ++i) 
						{
							//alert("times["+i+"]="+timesPP[i]);
							var xlabel = [];
							xlabel.push(i+0.5, timesPP[i]);
							xlabels.push(xlabel);
						}//end for
						
						/*
						 * Cumulative visualization
						 */

						//alert("count1="+count1);
						//alert("count2="+count2);
						
						if(count1 > count2)
						{
							$("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
							
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
							
						}
							
						if(count1 == count2)
						{
			
			                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
			
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
						}
						
						if(count1 < count2)
						{
			
			                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
			
							$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
						}
						
						
						/*
						 * Daily visualization
						 */
						
						var numDays = xlabels.length;
						if(numDays<7)
						{
			
							var latestDate= xlabels[xlabels.length-1].toString();
							var index = latestDate.indexOf(",")+1;
							var latestDateString = latestDate.substr(index, latestDate.length-1);
							var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDateString);		
			
							for(var x=numDays; x<7; x++)
							{
								parsedDate.setDate(parsedDate.getDate()+1);
								//alert("parsedDate-new="+parsedDate); 
								var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
								//alert("newDate="+newDate);
								
								var xlabel = [];
								//xlabel.push(x, "Day"+ (x+1)+ " ");
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								d1.push([x, "nil"]);
								d2.push([x, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)
		
						
						
						var ylabels = [];
						ylabels[0] = nameVar + "=Yes";
						ylabels[1] = nameVar + "=No";
						
						var data = [{
							data : d1,
							label : nameVar + "=Yes",
							color : "#98c734"
						}, {
							data : d2,
							label : nameVar + "=No",
							color : "#fc972a"
						}];
			
						var placeholder = $("#placeholder-daily");
						
						//var plot = $.plot(placeholder, data);
						//$.plot($("#placeholder-daily-pp"), [ d1, d2]);
						    
					
						var plot = $.plot(placeholder, data, {
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
						
							xaxis : {
								tickLength : 0,
								//min: 0.5,
								//max: ticks.length+0.5,
								ticks : xlabels,
								rotateTicks : 90,
								panRange: [-0.1, xlabels.length],
								axisLabel: ' ', 
							},
							yaxis : {
								//ticks : [[0.5, "Yes"], [-0.5, "No"]],
								//axisLabel : nameVar1,
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
			
									$("#tooltip").html(item.series.label).css({
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

								$("#tooltip").html(item.series.label).css({
									top : item.pageY + 5,
									left : item.pageX + 5
								}).fadeIn(200);
			
								plot.highlight(item.series, item.datapoint);
							}
						});			
												
						
						
					}//end if(participantId=="Me")
					

					//alert(typeVar);
				}//end if(typeVar=="binary") 
				if(typeVar == "count" || typeVar == "score")
				{
					//alert(typeVar);
					
					var d1 = [];
					var d2 = [];
					var xlabels = [];
					var count = 0;
					var totalScore=0;
					var avgScore=0;
					var line1= " ";
					var line2= " ";
					
					
					if(participantId=="Me")
					{
						
						if(timesPP.length==0)
						{
							$("#show-daily-charts").empty();
							$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
							
							$("#show-cumulative-charts").empty();
							$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
							
							
							return;
						}
						
						for(var i=0; i< valuesPP_temp.length; i++)
						{
							count++;
							totalScore += parseFloat(valuesPP_temp[i]);
						}//end for
						
					}//end if(participantId=="Me")
					if(participantId=="All")
					{
						for(var i=0; i< values_temp.length; i++)
						{
							count++;
							totalScore += parseFloat(values_temp[i]);
						}//end for						
					}//end if(participantId=="All")	
					
					if(count==0)
					{
						totalScore = 0;
						avgScore = 0;
					}//end if(count==0)
					else if(count>0)
					{
						avgScore = parseFloat(totalScore) / parseFloat(count);
					}//end if(count>0)
										
					/*
					 * Cumulative visualizations
					 */
					
					//alert("hello");
					$("#show-cumulative-charts").empty();
					
					$("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
					
					$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+avgScore.toFixed(1)+
					"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-left");				
					
					$("<div class='col-md-6 row'id='cumulative-right'> <br> </div>").appendTo("#show-cumulative-charts");
					$("<div class='col-xs-6'><div><span style='color:black; font-size:0.8em'>"+line1+"</span> </div>"+line2+"</div>").appendTo("#cumulative-right");		
		
		
					/*
					 * Daily visualizations
					 */
					if(participantId=="All")
					{
						for (var i = 0; i < times.length; ++i) 
						{
							//alert("times[0]="+times[0]);
							var xlabel = [];
							xlabel.push(i+0.5, times[i]);
							xlabels.push(xlabel);
			
							d1.push([i, values_temp[i]]);
			
						}
					}
					
					if(participantId=="Me")
					{
						for (var i = 0; i < timesPP.length; ++i) 
						{
							//alert("times[0]="+times[0]);
							var xlabel = [];
							xlabel.push(i+0.5, timesPP[i]);
							xlabels.push(xlabel);
			
							d1.push([i, valuesPP_temp[i]]);
			
						}
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
								
						
						}//end for
					}//end if(xlabels.length<7)			
								
					var ylabels = [];
					ylabels[0] = nameVar2 + " Yes";
					ylabels[1] = nameVar2 + " No";
		
					var data = [{
						data : d1,
						label : nameVar2,
						color : "#98c734"
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
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
											
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
						yaxis : {
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
							var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
							//$("#hoverdata").text(str);
						}
		
						//if ($("#enableTooltip:checked").length > 0)
						{
							if (item) {
								var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
		
								$("#tooltip").html(nameVar + " = " + y).css({
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
		
							$("#tooltip").html(nameVar + " = " + y).css({
								top : item.pageY + 5,
								left : item.pageX + 5
							}).fadeIn(200);
		
							plot.highlight(item.series, item.datapoint);
						}
					});
				}//end if(typeVar == "count" || typeVar == "score")      
		            	
		    }//end else if((variable1_id==-1 && variable2_id!=-1) || (variable1_id!=-1 && variable2_id==-1))
		    else if(variable1_id!=-1 && variable2_id!=-1)
		    {

					if ($("#content-daily").length == 0)
					{
						$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'></div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");
						
					}		    	
		    	
		    		if (typeVar1 == "binary" && typeVar2 == "binary") 
					{
			
			
						var count1 = 0;
						var count2 = 0;
						var count3 = 0;
						var count4 = 0;
						
						var d1 = [];
						var d2 = [];
						var dOne = 0;
						var dTwo = 0;
						var xlabels = [];
						
						if(participantId=="All")
						{
							showAllResults();
						}//end if(participantId=="All")						
						
						
						if(participantId=="Me")
						{
							/*
							 * Cumulative data
							 */
							
							if(timesPP.length==0)
							{
								$("#show-daily-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
								
								$("#show-cumulative-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
								
								
								return;
							}		
															

							
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
							
							/*
							 * Daily data
							 */
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
							
							for (var i = 0; i < timesPP.length; ++i) 
							{
								var latestDate= timesPP[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.5, newDate);
								xlabels.push(xlabel);
							}//end for
										
										
						}//end if(participantId=="Me")
		

			
						//alert("count1="+count1+", count2="+count2+", count3="+count3+", count4="+count4);

						/*
						 * Cumulative visualization
						 */
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
							$("<div class='col-md-6 row'id='cumulative-right'><h5>"+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
							
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
					


						/*
						 * Daily visualization
						 */

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
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								d1.push([x, "nil"]);
								d2.push([x, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)


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
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
						
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
					}//end if (typeVar1 == "binary" && typeVar2 == "binary") 
		    		else if(typeVar1 == "binary" || typeVar2 == "binary") 
		    		{

							var d1 = [];
							var d2 = [];
							var ylabels = [];
							var xlabels1 = [];
							var xlabels = [];
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
						
							/*
							 * Cumulative visualization
							 */
							
							
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
									if(participantId=="All")
									{
										
										showAllResults();
															
									}//end if(participantId=="All")	
									
									if(participantId=="Me")
									{
										
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
										
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
									}//end if(participantId=="Me")								
								
				
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
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
				
								}//end if(typeVar2=="score")
				
								if (typeVar2 == "count") 
								{

									avgTotalLabel = "Total";
									if(participantId=="All")
									{
										showAllResults();
										
									}//end if(participantId=="All")

									
									if(participantId=="Me")
									{
										
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
										
										
										for (var i = 0; i < valuesPP2.length; ++i) 
										{
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
										
										
									}//end if(participantId=="Me")
									

									
									chartCount1 = totalCount1;
									chartCount2 = totalCount2;
				
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
				
								if (typeVar1 == "score") 
								{
									avgTotalLabel = "Average";
									if(participantId=="Me")
									{
										
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
										
										
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
				
									}//end if(participantId=="Me")
									
									if(participantId=="All")
									{
										showAllResults();
									}//end if(participantId=="All")									
				
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
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
		
								}//end if(typeVar1=="score")
				
								if (typeVar1 == "count") {
									
									avgTotalLabel = "Total";
									if(participantId=="Me")
									{
										
										
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
										
										
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
									}//end if(participantId=="Me")
									if(participantId=="All")
									{
										showAllResults();
									}//end if(participantId=="All")						
		
									chartCount1 = totalCount1;
									chartCount2 = totalCount2;
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


							
							
							/*
							 * End Cumulatiave visualization
							 */						
			
						if (typeVar1 == "binary" && (typeVar2 == "score" || typeVar2 == "count")) 
						{
							label2 = nameVar2;
							ylabels[0] = nameVar1 + " Yes";
							ylabels[1] = nameVar1 + " No";

							if(participantId=="All")
							{
								
								
								for (var i = 0; i < values2.length; ++i) 
								{
									if (values1[i] == 1)
									{
										if(values2[i]!=null && values2[i]!='')
											d1.push([i, values2[i]]);
									}
										
				
									if (values1[i] == 0)
									{
										if(values2[i]!=null && values2[i]!='')
											d2.push([i, values2[i]]);
									}
										
								}//end for
								
							}//end if(participantId=="All")

							
							if(participantId=="Me")
							{
								
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
								
								
								for (var i = 0; i < valuesPP2.length; ++i) 
								{
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
							}//end if(participantId=="Me")

			
						}//end if(typeVar1 == "binary" && (typeVar2== "score" || typeVar2== "count"))
			
						if (typeVar2 == "binary" && (typeVar1 == "score" || typeVar1 == "count")) 
						{
													
							label2 = nameVar1;
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
							
							if(participantId=="All")
							{
								
								for (var i = 0; i < values1.length; ++i) 
								{
				
									if (values2[i] == 1)
									{
										if(values1[i]!=null && values1[i]!='')
											d1.push([i, values1[i]]);
									}
									if (values2[i] == 0)
									{
										if(values1[i]!=null && values1[i]!='')
											d2.push([i+0.45, values1[i]]);
									}
										
								}//end for
								
							}//end if(participantId=="All")							
							if(participantId=="Me")
							{
								
										if(timesPP.length==0)
										{
											$("#show-daily-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
											
											$("#show-cumulative-charts").empty();
											$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
											
											
											return;
										}
										
								
								
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
							}//end if(participantId=="Me")

						}//end if(typeVar2 == "binary" && (typeVar1== "score" || typeVar1== "count"))


						if(participantId=="Me")
						{
							for (var i = 0; i < timesPP.length; ++i) 
							{
								var latestDate= timesPP[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.5, newDate);
								xlabels.push(xlabel);
							}//end for
						}//end if(participantId=="Me")
						
						if(participantId=="All")
						{
							/*
							for (var i = 0; i < times.length; ++i) 
							{
								var latestDate= times[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.3, newDate);
								xlabels.push(xlabel);
							}//end for
							*/
						}//end if(participantId=="All")
						
						/*
						 * Daily visualizations
						 */
									
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
								xlabel.push(x+0.5, newDate);
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
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
						
			
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
		    			
		    		}//end else if(typeVar1 == "binary" || typeVar2 == "binary") 
					else if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 
					{
			
						var d1 = [];
						var d2 = [];
						var xlabels = [];
						var user_correlationValue;

						var user_avgScore1 = 0.0;
						var user_avgScore2 = 0.0;
						var user_count1 = 0;
						var user_count2 = 0;
						var user_displayedScore1 = 0;
						var user_displayedScore2 = 0;			
						var user_chartCount1;
						var user_chartCount2;
						var avgTotalLabel = "Average";						
						
						
						/*
						 * Cumulative visualization
						 */
						
						if(participantId=="Me")
						{
							//user_correlationValue = mathUtils.getPearsonsCorrelation(valuesPP1, valuesPP2);

							if(timesPP.length==0)
							{
								$("#show-daily-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
								
								$("#show-cumulative-charts").empty();
								$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-cumulative-charts');
								
								
								return;
							}
										
							for (var i = 0; i < valuesPP1.length; ++i) 
							{
								
								//alert("valuesPP1["+i+"]="+valuesPP1[i]);
								user_count1++;
								//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
								if(valuesPP1[i]!=null && valuesPP1[i]!='')
								{
									user_avgScore1 = parseFloat(user_avgScore1) + parseFloat(valuesPP1[i]);
								}	
								
								user_count2++;
								if(valuesPP2[i]!=null && valuesPP2[i]!='')
								{
									user_avgScore2 = parseFloat(user_avgScore2) + parseFloat(valuesPP2[i]);
								}	
								
								//alert("avgScore1="+avgScore1);	
								//alert("avgScore2="+avgScore2);					
							}//end for

							
							
							
						}
							
						if(participantId=="All")
						{
							//user_correlationValue = mathUtils.getPearsonsCorrelation(values1, values2);
							
							for (var i = 0; i < values1.length; ++i) 
							{
								
								//alert("valuesPP1["+i+"]="+valuesPP1[i]);
								user_count1++;
								//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
								if(values1[i]!=null && values1[i]!='')
								{
									user_avgScore1 = parseFloat(user_avgScore1) + parseFloat(values1[i]);
								}	
								
								user_count2++;
								if(values2[i]!=null && values2[i]!='')
								{
									user_avgScore2 = parseFloat(user_avgScore2) + parseFloat(values2[i]);
								}	
								
								//alert("avgScore1="+avgScore1);	
								//alert("avgScore2="+avgScore2);					
							}//end for

														
						}
							
						

						/*
						 * Cumulative visualization of user
						 */
												
						$("#show-cumulative-charts").empty();
						

					if(user_count1==0)
					{
						user_displayedScore1 = 0;
					}
					else{
						user_displayedScore1 = parseFloat(user_avgScore1) / parseFloat(user_count1);
					}	
					if(user_count2==0)
					{
						user_displayedScore2 = 0
					}
					else{
						user_displayedScore2 = parseFloat(user_avgScore2) / parseFloat(user_count2);
					}	

					user_chartCount1 = parseFloat(user_displayedScore1.toFixed(1));
					user_chartCount2 = parseFloat(user_displayedScore2.toFixed(1));
					
					//alert("user_chartCount1="+user_chartCount1);
					//alert("user_chartCount2="+user_chartCount2);
					
					$("<div class='col-md-6 row' id='cumulative-left'><h5>Results ("+nameVar1+" vs "+ nameVar2+")</h5></div>").appendTo("#show-cumulative-charts");
						
					if(user_chartCount1 > user_chartCount2)
					{

						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+user_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
						
					}

					else if(user_chartCount1 == user_chartCount2)
					{
		
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
					}
					
					else if(user_chartCount1 < user_chartCount2)
					{
		
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+user_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
					}	
						
						
						
						
						/*
						 * Daily visualization
						 */
						
						if(participantId=="Me")
						{
							for (var i = 0; i < timesPP.length; ++i) 
							{
								//alert("times[0]="+times[0]);
								var xlabel = [];
								xlabel.push(i+0.5, timesPP[i]);
								xlabels.push(xlabel);
				
								d1.push([i, valuesPP1[i]]);
								d2.push([i+0.45, valuesPP2[i]]);
			
							}//end for
			
						}//end if(participantId=="Me")	
							
						if(participantId=="All")
						{
							for (var i = 0; i < times.length; ++i) 
							{
								//alert("times[0]="+times[0]);
								var xlabel = [];
								xlabel.push(i+0.5, times[i]);
								xlabels.push(xlabel);
				
								d1.push([i, values1[i]]);
								d2.push([i+0.45, values2[i]]);
			
							}//end for
			
						}//end if(participantId=="All")	
						
						
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
								xlabel.push(x+0.5, newDate);
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
								font:{color : "#98c734"},
							}, {
								position : "right",
								panRange: false,
								font:{color : "#fc972a"},
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
		    		
		    	
		    }//end else if(variable1_id!=-1 && variable2_id!=-1)
	}//end else if(participantId=="Me" && participantId=="All")
	
}//end showResults


function showComparison()
{
	//alert("showComparison");
 	var variable1 = document.getElementById("shown-variable1").value;
	var variable2 = document.getElementById("shown-variable2").value;
	
     if(comparisonShown==0)
     {
 		$('[name="experiment-hide-comparison"]').attr("style", "visibility: visible");
		//$('[name="compare"]').attr("style", "visibility: hidden");
     	comparisonShown = 1;
     }
     
    if ($("#comparison-individual").length != 0)
	{
		$("#comparison-individual").remove();	
	}
	if ($("#comparison-individual").length == 0)
	{
		$("<div id='comparison-individual' name='comparison-individual'> <div class='demo-container'> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' height='400px' width='800px'></div> </div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-charts");
					
  	}

  //alert(variable1);
  //alert(variable2);
  //if(variable1 == "-1" && variable2 == "-1")
  //return;
  
	//var variable1_index = <?php echo json_encode($variable_chart1_index)?>;
	//alert(variable1_index);
  
    //alert("times.length="+times.length);
  
	var variable1_index= document.getElementById("shown-variable1").selectedIndex;
  	var variable1_id = variableIds_js[variable1_index];
	//alert(variable1_index);
	//alert(variableIds_js[variable1_index]);
  
	var variable2_index= document.getElementById("shown-variable2").selectedIndex;
	var variable2_id = variableIds_js[variable2_index];
  
	//var typeVar1 =  <?php echo json_encode($variableTypes[$variable1_index]); ?>;
	//var typeVar2 =  <?php echo json_encode($variableTypes[$variable2_index]); ?>;
		
	//var variableTypes_js = <?php echo json_encode($variableTypes)?>;
	
	var nameVar1 = variableNames_js[variable1_index];
	var nameVar2 = variableNames_js[variable2_index];
	
			
	var typeVar1 =  variableTypes_js[variable1_index];
	var typeVar2 =  variableTypes_js[variable2_index];
	
	var experiment_results_start_date = $("#datepicker2").val();
		
				
 	//alert(<?php echo json_encode($variable1_index); ?>);
 	//alert(<?php echo json_encode($variable2_index); ?>);
	
 	//alert("variable1_index="+variable1_index);
 	//alert("variable2_index="+variable2_index);
 	//alert("typeVar1="+typeVar1);
	//alert("typeVar2="+typeVar2);
 
    var user_variable1_values = valuesPP[variable1_index];
    var user_variable2_values = valuesPP[variable2_index];
 	
  	//alert("valuesPP.length="+valuesPP.length);	
 	//alert("valuesPP[0].length="+valuesPP[0].length);
//  	alert("valuesPP_js[0].length="+valuesPP_js[0].length);
//alert("valuesPP[1].length="+valuesPP[1].length);
//alert("valuesPP[2].length="+valuesPP[2].length);
 	
//alert("user_variable1_values.length="+user_variable1_values.length);
//alert("user_variable2_values.length="+user_variable2_values.length);           	 
 
 
	if(variable1=="-1")
  		variable1_id = -1;
  
	if(variable2=="-1")
 	 	variable2_id = -1;
  
	//alert(variable1_id);
	//alert(variable2_id);
 
	var friendId = document.getElementById("participantId").value;
	//alert("friendId="+friendId);  
	//if(friendId=="MeVsAll")
	//	friendId= "All";
//	var friendId = document.getElementById("experiment-members").value;
	//alert(friendId);
	//alert(<?php echo json_encode($variable_chart1_index); ?>);


		if(variable1_id==-1 && variable2_id==-1)
		{
				//alert("both nothing");
			
			$("#show-cumulative-charts").empty();
			
			$("#show-daily-charts").empty();
			
			$("#show-comparison-charts").empty();
			
			$("#show-comparison-daily-charts").empty();	
			
			$("#content-daily").remove();	  		
						  		
			return;
		}//end if(variable1_id==-1 && variable2_id==-1)

		if (window.XMLHttpRequest)
		{
	    	// code for IE7+, Firefox, Chrome, Opera, Safari
	    	xmlhttp = new XMLHttpRequest();
		}
	  	else
	  	{
	  		// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	  
		xmlhttp.onreadystatechange = function()
		{
	        //document.getElementById("placeholder-compare1").innerHTML = xmlhttp.responseText;
	
			//alert("xmlhttp.onreadystatechange");
			
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		    {
				var response = xmlhttp.responseText;
	        	//alert("response="+response);
	  
				var obj = jQuery.parseJSON (response);
	        	//alert(obj.user_variable1_values);
				//alert(obj.friend_variable1_values);
	
	            var friend_variable1_values = obj.friend_variable1_values;
	            var friend_variable2_values = obj.friend_variable2_values;
	            var friend_dateTimes = obj.friend_dateTimes;
	            
	            var all_variable1_values = obj.all_variable1_values;
	            var all_variable2_values = obj.all_variable2_values;
	            var all_variable3_values = obj.all_variable3_values;
	            var all_variable4_values = obj.all_variable4_values;	            
				
				//alert("all_variable1_values.length="+all_variable1_values.length);
				//alert("all_variable1_values="+all_variable1_values);
				//alert("all_variable2_values="+all_variable2_values);
	
	
	            var user_variable1_values = valuesPP[variable1_index];
	            var user_variable2_values = valuesPP[variable2_index];	    	
		    	
	            var d1 = [];
	            var d2 = [];
	            var d3 = [];
	            var d4 = [];
	            
	            $("#show-cumulative-charts").empty();

	            if(variable1_id!=-1 && variable2_id!=-1)
            	{

			  		if (typeVar1 == "binary" && typeVar2 == "binary")
					{

						//alert("showComparison.two binary");
						var xlabels = [];
						/*	
						var max_length = user_variable1_values.length;
						if(friend_variable1_values.length > max_length)
							max_length = friend_variable1_values.length;
							
						for (var i = 0; i < max_length; ++i) 
						{
							//alert("times[0]="+times[0]);
							var xlabel = [];
							xlabel.push(i, "Day "+ (i+1));
							xlabels.push(xlabel);
						}
						*/
						var ylabels = [];
						ylabels[0] = nameVar2 + "=Yes";
						ylabels[1] = nameVar2 + "=No";
	
											
						var user_dc1 = [];
						var user_dc2 = [];
						var friend_dc1 = [];
						var friend_dc2 = [];
			
						var count1 = 0;
						var count2 = 0;
						var count3 = 0;
						var count4 = 0;			
						var count5 = 0;
						var count6 = 0;
						var count7 = 0;
						var count8 = 0;	
						
						for (var i = 0; i < user_variable1_values.length; ++i) 
						{
							if (user_variable1_values[i] == 1 && user_variable2_values[i] == 1) 
							{
								count1++;
							}
			
							if (user_variable1_values[i] == 1 && user_variable2_values[i] == 0) {
								count2++;
							}
			
							if (user_variable1_values[i] == 0 && user_variable2_values[i] == 1) {
								count3++;
							}
			
							if (user_variable1_values[i] == 0 && user_variable2_values[i] == 0) {
								count4++;
							}
						}//end for
						
						if(friendId!="MeVsAll" && friendId!="All")
						{

							for (var i = 0; i < friend_variable1_values.length; ++i) 
							{
								if (friend_variable1_values[i] == 1 && friend_variable2_values[i] == 1) 
								{
									count5++;
								}
				
								if (friend_variable1_values[i] == 1 && friend_variable2_values[i] == 0) 
								{
									count6++;
								}
				
								if (friend_variable1_values[i] == 0 && friend_variable2_values[i] == 1) 
								{
									count7++;
								}
				
								if (friend_variable1_values[i] == 0 && friend_variable2_values[i] == 0) 
								{
									count8++;
								}
							}//end for							
						}//end if(friendId!="MeVsAll" && friendId!="All")		
						else if(friendId=="MeVsAll")
						{
							for (var i = 0; i < times.length; ++i) 
							{
								
								count5 = parseInt(count5) + parseInt(all_variable1_values[i]);
								count6 = parseInt(count6) + parseInt(all_variable2_values[i]);
								count7 = parseInt(count7) + parseInt(all_variable3_values[i]);
								count8 = parseInt(count8) + parseInt(all_variable4_values[i]);
								

							}//end for							
						}//end if(friendId=="MeVsAll")						
						
							
							user_dc1.push([0, count1]);
							friend_dc1.push([1, count5]);
							user_dc1.push([5, count2]);
							friend_dc1.push([6, count6]);
							
							user_dc2.push([2, count3]);
							friend_dc2.push([3, count7]);
							user_dc2.push([7, count4]);
							friend_dc2.push([8, count8]);
	
							
							
							var xlabels1 = [];
							var xlabel1 = [];
							xlabel1.push(1, nameVar2 + "=Yes");
							xlabels1.push(xlabel1);
				
							var xlabel2 = [];
							xlabel2.push(6, nameVar2 + "=No");
							xlabels1.push(xlabel2);
				
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
							
							
	
							$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results:"+nameVar1+"=Yes<h5></div>").appendTo("#show-cumulative-charts");
	
							if(count1 > count2)
							{
								
								
								$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+count2+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");
								
							}
								
							if(count1 == count2)
							{
				
				                if(count1==0)
				                {
									
									//$("#show-cumulative-charts").empty();
	
									$("<div class='col-xs-6'>You have not reported results to this experiment. Please report them.</div>").appendTo("#cumulative-left");
												                	
				                }
				
								else{
									$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
									
									$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count2+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");									
								}

							}
							
							if(count1 < count2)
							{
				
				                
				
								$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+count1+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count2+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left");
							}
							
							
							$("<div class='col-md-6 row'id='cumulative-right'><h5>My Results: "+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
							if(count3 > count4)
							{
								
								
								$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count3+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
								
								$("<div class='col-xs-6'><div class='smallCircle orange2'> <div class='big_white'>"+count4+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
							}
							
							if(count3 == count4)
							{
								if(count3>0)
								{
									$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count3+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
									
									$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count4+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
					
								}
								
							}
							
							if(count3 < count4)
							{
								
								
								$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+count3+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right");
								
								$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count4+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right");
							}					
														
							
							$("#show-comparison-charts").empty();
							$("<div class='col-md-6 row' id='cumulative-left2'><h5>Member's Results:"+nameVar1+"=Yes<h5></div>").appendTo("#show-comparison-charts");
							if(count5 > count6)
							{
								
								
								$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count5+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left2");
								
								$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+count6+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left2");
								
							}
								
							if(count5 == count6)
							{

				                if(count5==0)
				                {
									$("<div class='col-xs-6'>You have not reported results to experiment. Please report them.</div>").appendTo("#cumulative-left2");
												                	
				                }
				                else
				                {
									$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count5+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left2");
									
									$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count6+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left2");	
												                	
				                }//end else
								

							}
							
							if(count5 < count6)
							{
				
				
								$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+count5+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-left2");
								
								$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+count6+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-left2");
							}
																
							
							$("<div class='col-md-6 row'id='cumulative-right2'><h5>Member's Results: "+nameVar1+"=No</h5>").appendTo("#show-comparison-charts");
							if(count7 > count8)
							{
								
								
								$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count7+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right2");
								
								$("<div class='col-xs-6'><div class='smallCircle orange2'> <div class='big_white'>"+count8+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right2");
							}
							
							if(count7 == count8)
							{
								
								if(count7>0)
								{
									$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count7+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right2");
								
									$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count8+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right2");
					
								}
							}
							
							if(count7 < count8)
							{
								
								
								$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+count7+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": Yes</div>").appendTo("#cumulative-right2");
								
								$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+count8+
								"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar2+": No</div>").appendTo("#cumulative-right2");
							}					
														
							
														
							/*
							 * Daily visualization of the participant
							 */
							
								var user_d1 = [];
								var user_d2 = [];
								var friend_d1 = [];
								var friend_d2 = [];
	
							
								if ($("#content-daily").length != 0)
								{
									//alert("daily");
									$("#content-daily").remove();
								}
								else
								{
									//alert("daily does not exist");
								}
				
		
							//alert("timesPP.length="+timesPP.length);
							if(timesPP.length==0)
							{
								//var length = $("#content-daily").length;
								//alert("content-daily.length="+length);
								//$("#show-daily-charts").empty();
								
								//$('<div>You have not reported results to this experiment. Please report them.</div>').appendTo('#show-daily-charts');
							}
							

							if(timesPP.length>0)
							{


								if ($("#content-daily").length == 0)
								{
									//alert("content-daily does not exist");
									$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>My Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");		
								}								
		            			//var user_variable1_values = valuesPP[variable1_index];
		            			//var user_variable2_values = valuesPP[variable2_index];					
	
								for (var i = 0; i < timesPP.length; ++i) {
									if (user_variable1_values[i] == 1 && user_variable2_values[i] == 1) {
										user_d1.push([i, 1]);
									}
					
									if (user_variable1_values[i] == 1 && user_variable2_values[i] == 0) {
										user_d1.push([i, -1]);
									}
					
									if (user_variable1_values[i] == 0 && user_variable2_values[i] == 1) {
										user_d2.push([i, 1]);
									}
									if (user_variable1_values[i] == 0 && user_variable2_values[i] == 0) {
										user_d2.push([i, -1]);
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
									xlabel.push(i+0.5, newDate);
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
										xlabel.push(x+0.5, newDate);
										xlabels.push(xlabel);
										
										user_d1.push([x, "nil"]);
										user_d2.push([x, "nil"]);	
									
									}//end for
								}//end if(xlabels.length<7)
					
								var ylabels = [];
								ylabels[0] = nameVar2 + "=Yes";
								ylabels[1] = nameVar2 + "=No";
					
								var data = [{
									data : user_d1,
									label : nameVar1 + "=Yes",
									color : "#98c734"
								}, {
									data : user_d2,
									label : nameVar1 + "=No",
									color : "#fc972a"
								}];
				
								var placeholder = $("#placeholder-daily");
								var plot = $.plot(placeholder, data, {
									series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
							
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
																
								
								
							}//end if(timesPP.length>0)

														


							/*
							 * Daily visualization of the friend
							 */
  		
							if ($("#comparison-individual").length != 0)
							{
								$("#comparison-individual").remove();
							}

							//alert("friend_dateTimes.length="+friend_dateTimes.length);
  										//alert("friend_variable1_values.length="+friend_variable1_values.length);
  										//alert("friend_variable2_values.length="+friend_variable2_values.length);
  							if(friendId!="MeVsAll" && friendId!="All")
  							{
  								
  								if ($("#comparison-individual").length == 0)
								{
								//alert("content-daily does not exist");
									$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-daily-charts");		
								}	
  								
  								//alert("friend_dateTimes.length="+friend_dateTimes.length);
		   						if(friend_dateTimes.length==0)
								{
									
									$("#placeholder-compare").remove();
									$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
										
								}//end if(friend_dateTimes.length==0) 	
								
 										for (var i = 0; i < friend_dateTimes.length; ++i) 
  										{
											if (friend_variable1_values[i] == 1 && friend_variable2_values[i] == 1) {
												friend_d1.push([i, 1]);
											}
							
											if (friend_variable1_values[i] == 1 && friend_variable2_values[i] == 0) {
												friend_d1.push([i, -1]);
											}
							
											if (friend_variable1_values[i] == 0 && friend_variable2_values[i] == 1) {
												friend_d2.push([i, 1]);
											}
											if (friend_variable1_values[i] == 0 && friend_variable2_values[i] == 0) {
												friend_d2.push([i, -1]);
											}
										}//end for
										
										
										var xlabels = [];
										for (var i = 0; i < friend_dateTimes.length; ++i) 
										{
											var latestDate= friend_dateTimes[i].toString();
											var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
											var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
											
											var xlabel = [];
											//xlabel.push(i+0.3, times[i]);
											xlabel.push(i+0.5, newDate);
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
												xlabel.push(x+0.5, newDate);
												xlabels.push(xlabel);
												
												friend_d1.push([x, "nil"]);
												friend_d2.push([x, "nil"]);	
											
											}//end for
										}//end if(xlabels.length<7)
							
										var ylabels = [];
										ylabels[0] = nameVar2 + "=Yes";
										ylabels[1] = nameVar2 + "=No";
							
										var data = [{
											data : friend_d1,
											label : nameVar1 + "=Yes",
											color : "#98c734"
										}, {
											data : friend_d2,
											label : nameVar1 + "=No",
											color : "#fc972a"
										}];
				
											
										var placeholder1 = $("#placeholder-compare");
										var plot1 = $.plot(placeholder1, data, {
											
											series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
						
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
												container : $("#legendcontainer-compare")
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
							
										placeholder1.bind("plothover", function(event, pos, item) {
							
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
							
										placeholder1.bind("plotclick", function(event, pos, item) {
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
							
												plot1.highlight(item.series, item.datapoint);
											}
										});														
										
										
																		
  							}//end if(friendId!="MeVsAll" && friendId!="All")
  							else if(friendId=="MeVsAll")
  							{
  								
  								  	if ($("#comparison-individual").length == 0)
									{
									//alert("content-daily does not exist");
										$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div>"+ 
										"<div align='left'>"+nameVar1+"=Yes</div>"+
										
										"<div align='left' id='legendcontainer-compare' style= 'width:80%;'></div>"+ 
										"<div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div>"+ 
										"<span id='hoverdata'></span> <span id='clickdata'></span>"+
										

										"<div align='left'>"+nameVar1+"=No</div>"+  
										"<div align='left' id='legendcontainer-compare2' style= 'width:80%;'></div>"+ 
										"<div id='placeholder-compare2' class='demo-placeholder' style='height:400px; width:80%;'></div>"+ 
										"<span id='hoverdata'></span> <span id='clickdata'></span>"+										 
										
										
										"</div>").appendTo("#show-comparison-daily-charts");		
									}	
  								
  								
	  								var all_d1 = [];
									var all_d2 = [];
									var all_d3 = [];
									var all_d4 = [];
							

			   						if(times.length==0)
									{
										
										$("#placeholder-compare").remove();
										$("#placeholder-compare2").remove();
										$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
											
									}//end if(times.length==0) 								
								
								
							
										//alert("all_variable1_values.length="+all_variable1_values.length);
										//alert("times.length="+times.length);
 										for (var i = 0; i < times.length; ++i) 
  										{
  											//alert("all_variable1_values["+i+"]="+all_variable1_values[i]);
  											all_d1.push([i, all_variable1_values[i] ]);
  											all_d2.push([i+0.45, all_variable2_values[i] ]);
  											
  											all_d3.push([i, (all_variable3_values[i]) ]);
  											all_d4.push([i+0.45, (all_variable4_values[i]) ]);
										}//end for
										
										
										var xlabels = [];
										for (var i = 0; i < times.length; ++i) 
										{
											var latestDate= times[i].toString();
											var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
											var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
											
											var xlabel = [];
											//xlabel.push(i+0.3, times[i]);
											xlabel.push(i+0.5, newDate);
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
												xlabel.push(x+0.5, newDate);
												xlabels.push(xlabel);
												
												all_d1.push([x, "nil"]);
												all_d2.push([x+0.45, "nil"]);
												all_d3.push([x, "nil"]);
												all_d4.push([x+0.45, "nil"]);		
											
											}//end for
										}//end if(xlabels.length<7)
							
										var ylabels = [];
										ylabels[0] = nameVar2 + "=Yes";
										ylabels[1] = nameVar2 + "=No"; 
										
										var all_data = [
											{
												data : all_d1,
												label : nameVar2 + "=Yes",
												color : "#98c734"
											}
											, 
											{
												data : all_d2,
												label : nameVar2 + "=No",
												color : "#fc972a",
											}									
										
										];

										var placeholder1 = $("#placeholder-compare");
							
										var plot1 = $.plot(placeholder1, all_data, {
											/*
											lines : {
												show : true
											},
											points : {
												show : true
											},
											*/
											series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
								
														
											
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
											yaxis :
											{
												panRange: false,
												axisLabel: 'No. of Data Entries',
											},
											
							
											grid : {
												hoverable : true,
												clickable : true
											},
											legend : {
												noColumns : 0,
												container : $("#legendcontainer-compare")
											},
											pan: {
												interactive: true
											},
							
										});
											
	
									var all_data2 = [
											{
												data : all_d3,
												label : nameVar2 + "=Yes",
												color : "#98c734"
											}
											, 
											{
												data : all_d4,
												label : nameVar2 + "=No",
												color : "#fc972a",
											}									
										
										];

										var placeholder2 = $("#placeholder-compare2");
							
										var plot2 = $.plot(placeholder2, all_data2, {
											/*
											lines : {
												show : true
											},
											points : {
												show : true
											},
											*/
											series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
							
														
											xaxis : //{ ticks: xlabels, autoscaleMargin: 1},
							
											{
							
												tickLength : 0,
												//min: 0.5,
												//max: ticks.length+0.5,
												ticks : xlabels,
												rotateTicks : 90,
												panRange: [-0.2, times.length],
												axisLabel: ' ',
											},
											yaxis :
											{
												panRange: false,
												axisLabel: 'No. of Data Entries',
											},
											
							
											grid : {
												hoverable : true,
												clickable : true
											},
											legend : {
												noColumns : 0,
												container : $("#legendcontainer-compare2")
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
							
										placeholder1.bind("plothover", function(event, pos, item) {
							
											//    if ($("#enablePosition:checked").length > 0)
											{
												var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
												//$("#hoverdata").text(str);
											}
							
											//if ($("#enableTooltip:checked").length > 0)
											{
												if (item) {
													var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
							
													$("#tooltip").html(nameVar1 + "=Yes , " + item.series.label + " = " + y).css({
														top : item.pageY + 5,
														left : item.pageX + 5
													}).fadeIn(200);
							
												} else {
													$("#tooltip").hide();
												}
											}
										});
							
										placeholder1.bind("plotclick", function(event, pos, item) {
											if (item) {
												//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
												var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);

												$("#tooltip").html(nameVar1 + "=Yes , " + item.series.label + " = " + y).css({
													top : item.pageY + 5,
													left : item.pageX + 5
												}).fadeIn(200);
							
												plot1.highlight(item.series, item.datapoint);
											}
										});		
										
										
										placeholder2.bind("plothover", function(event, pos, item) {
							
											//    if ($("#enablePosition:checked").length > 0)
											{
												var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
												//$("#hoverdata").text(str);
											}
							
											//if ($("#enableTooltip:checked").length > 0)
											{
												if (item) {
													var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
							
													$("#tooltip").html(nameVar1 + "=No , " + item.series.label + " = " + y).css({
														top : item.pageY + 5,
														left : item.pageX + 5
													}).fadeIn(200);
							
												} else {
													$("#tooltip").hide();
												}
											}
										});
							
										placeholder2.bind("plotclick", function(event, pos, item) {
											if (item) {
												//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
												var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);

												$("#tooltip").html(nameVar1 + "=No , " + item.series.label + " = " + y).css({
													top : item.pageY + 5,
													left : item.pageX + 5
												}).fadeIn(200);
							
												plot2.highlight(item.series, item.datapoint);
											}
										});											
																		
  							}//end if(friendId=="MeVsAll")	

					}//end if (typeVar1 == "binary" && typeVar2 == "binary")
					else if ( (typeVar1 == "binary" && typeVar2 != "binary") || (typeVar2 == "binary" && typeVar1 != "binary")   )
					{		

						var user_d1 = [];
						var user_d2 = [];
						var friend_d1=[];
						var friend_d2=[];
						
						var ylabels = [];
						var xlabels1 = [];
						var user_totalCount1 = 0;
						var user_totalCount2 = 0;
						var friend_totalCount1 = 0;
						var friend_totalCount2 = 0;						
						var user_avgScore1 = 0.0;
						var user_avgScore2 = 0.0;
						var friend_avgScore1 = 0.0;
						var friend_avgScore2 = 0.0;						
						var user_count1 = 0;
						var user_count2 = 0;
						var friend_count1 = 0;
						var friend_count2 = 0;
						var user_displayedScore1 = 0;
						var user_displayedScore2 = 0;	
						var friend_displayedScore1 = 0;
						var friend_displayedScore2 = 0;									
						var label2;
						var user_chartCount1;
						var user_chartCount2;
						var friend_chartCount1;
						var friend_chartCount2;						
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
							
							
							/*
							 * Daily data for the current user
							 */								

							for (var i = 0; i < user_variable2_values.length; ++i) 
							{
								//alert("valuesPP2["+i+"]="+valuesPP2[i]);
								if (user_variable1_values[i] == 1)
								{
									if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										user_d1.push([i, user_variable2_values[i]]);
								}
									
								if (user_variable1_values[i] == 0)
								{
									if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										user_d2.push([i, user_variable2_values[i]]);
								}
									
							}//end for
			

							/*
							 * Daily data for the friend
							 */								

							for (var i = 0; i < friend_variable2_values.length; ++i) 
							{
								//alert("valuesPP2["+i+"]="+valuesPP2[i]);
								if (friend_variable1_values[i] == 1)
								{
									if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										friend_d1.push([i, friend_variable2_values[i]]);
								}
									
								if (friend_variable1_values[i] == 0)
								{
									if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										friend_d2.push([i, friend_variable2_values[i]]);
								}
									
							}//end for	
											
							if (typeVar2 == "score") 
							{
								avgTotalLabel = "Average";
								
								/*
								 * Cumulative data for the current user
								 */
								
								for (var i = 0; i < user_variable2_values.length; ++i) 
								{
									
									if (user_variable1_values[i] == 1) {
										user_count1++;
										//avgScore1 = parseInt(avgScore1) + parseInt(values2[i]);
										if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										{
											user_avgScore1 = parseFloat(user_avgScore1) + parseFloat(user_variable2_values[i]);	
										}
											
										//alert("avgScore1="+avgScore1);
									}
									if (user_variable1_values[i] == 0) 
									{
										user_count2++;
										//avgScore2 = parseInt(avgScore2) + parseInt(values2[i]);
										//alert("valuesPP2["+i+"]="+valuesPP2[i]);
										if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										{
											user_avgScore2 = parseFloat(user_avgScore2) + parseFloat(user_variable2_values[i]);
										}
											
									}
								}//end for
								
								if(user_count1==0)
								{
									user_displayedScore1 = 0;
								}
								else{
									user_displayedScore1 = parseFloat(user_avgScore1) / parseFloat(user_count1);
								}	
								if(user_count2==0)
								{
									user_displayedScore2 = 0
								}
								else{
									user_displayedScore2 = parseFloat(user_avgScore2) / parseFloat(user_count2);
								}	
	
								user_chartCount1 = parseFloat(user_displayedScore1.toFixed(1));
								user_chartCount2 = parseFloat(user_displayedScore2.toFixed(1));
						
								/*
								 * Cumulative data for the friend
								 */

								for (var i = 0; i < friend_variable2_values.length; ++i) 
								{
									
									if (friend_variable1_values[i] == 1) {
										friend_count1++;
										//avgScore1 = parseInt(avgScore1) + parseInt(values2[i]);
										if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										{
											friend_avgScore1 = parseFloat(friend_avgScore1) + parseFloat(friend_variable2_values[i]);	
										}
											
										//alert("avgScore1="+avgScore1);
									}
									if (friend_variable1_values[i] == 0) 
									{
										friend_count2++;
										//avgScore2 = parseInt(avgScore2) + parseInt(values2[i]);
										//alert("valuesPP2["+i+"]="+valuesPP2[i]);
										if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										{
											friend_avgScore2 = parseFloat(friend_avgScore2) + parseFloat(friend_variable2_values[i]);
										}
											
									}
								}//end for

								if(friend_count1==0)
								{
									friend_displayedScore1 = 0;
								}
								else{
									friend_displayedScore1 = parseFloat(friend_avgScore1) / parseFloat(friend_count1);
								}	
								if(friend_count2==0)
								{
									friend_displayedScore2 = 0
								}
								else{
									friend_displayedScore2 = parseFloat(friend_avgScore2) / parseFloat(friend_count2);
								}	
	
								friend_chartCount1 = parseFloat(friend_displayedScore1.toFixed(1));
								friend_chartCount2 = parseFloat(friend_displayedScore2.toFixed(1));

							}//end if(typeVar2=="score")
			
							if (typeVar2 == "count") 
							{
								avgTotalLabel = "Total";
								for (var i = 0; i < user_variable2_values.length; ++i) 
								{
									if (user_variable1_values[i] == 1) 
									{
										
										if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										{
											user_totalCount1 = parseInt(user_totalCount1) + parseInt(user_variable2_values[i]);
										}
										
									}
									if (user_variable1_values[i] == 0) 
									{
										if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
										{
											user_totalCount2 = parseInt(user_totalCount2) + parseInt(user_variable2_values[i]);
										}
									}
								}//end for
								
								user_chartCount1 = user_totalCount1;
								user_chartCount2 = user_totalCount2;
			
								for (var i = 0; i < friend_variable2_values.length; ++i) 
								{
									if (friend_variable1_values[i] == 1) 
									{
										
										if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										{
											friend_totalCount1 = parseInt(friend_totalCount1) + parseInt(friend_variable2_values[i]);
										}
										
									}
									if (friend_variable1_values[i] == 0) 
									{
										if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
										{
											friend_totalCount2 = parseInt(friend_totalCount2) + parseInt(friend_variable2_values[i]);
										}
									}
								}//end for
								
								friend_chartCount1 = friend_totalCount1;
								friend_chartCount2 = friend_totalCount2;			
			
			
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
							
							
							
							/*
							 * Daily data for the current user
							 */								

							for (var i = 0; i < user_variable1_values.length; ++i) 
							{
								//alert("valuesPP2["+i+"]="+valuesPP2[i]);
								if (user_variable2_values[i] == 1)
								{
									if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										user_d1.push([i, user_variable1_values[i]]);
								}
									
								if (user_variable2_values[i] == 0)
								{
									if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										user_d2.push([i, user_variable1_values[i]]);
								}
									
							}//end for
			

							/*
							 * Daily data for the friend
							 */								

							for (var i = 0; i < friend_variable1_values.length; ++i) 
							{
								//alert("valuesPP2["+i+"]="+valuesPP2[i]);
								if (friend_variable2_values[i] == 1)
								{
									if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										friend_d1.push([i, friend_variable1_values[i]]);
								}
									
								if (friend_variable2_values[i] == 0)
								{
									if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										friend_d2.push([i, friend_variable1_values[i]]);
								}
									
							}//end for								
							
							if (typeVar1 == "score") 
							{
								avgTotalLabel = "Average";
								
								for (var i = 0; i < user_variable2_values.length; ++i) 
								{
									//alert("user_variable2_values["+i+"]="+user_variable2_values[i]);
									if (user_variable2_values[i] == 1) 
									{
										user_count1++;
										//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
										if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										{
											user_avgScore1 = parseFloat(user_avgScore1) + parseFloat(user_variable1_values[i]);
										}
											
									}
									if (user_variable2_values[i] == 0) 
									{
										user_count2++;
										//avgScore2 = parseInt(avgScore2) + parseInt(values1[i]);
										if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										{
											user_avgScore2 = parseFloat(user_avgScore2) + parseFloat(user_variable1_values[i]);
										}
									}
								}//end for
			
			
								if(user_count1==0)
								{
									user_displayedScore1 = 0;
								}
								else{
									user_displayedScore1 = parseFloat(user_avgScore1) / parseFloat(user_count1);
								}	
								if(user_count2==0)
								{
									user_displayedScore2 = 0
								}
								else{
									user_displayedScore2 = parseFloat(user_avgScore2) / parseFloat(user_count2);
								}	
	
								//alert("user_count1="+user_count1);
								//alert("user_count2="+user_count2);
								
								user_chartCount1 = parseFloat(user_displayedScore1.toFixed(1));
								user_chartCount2 = parseFloat(user_displayedScore2.toFixed(1));
								
								
								for (var i = 0; i < friend_variable1_values.length; ++i) 
								{
									if (friend_variable2_values[i] == 1) {
										friend_count1++;
										//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
										if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										{
											friend_avgScore1 = parseFloat(friend_avgScore1) + parseFloat(friend_variable1_values[i]);
										}
											
									}
									if (friend_variable2_values[i] == 0) {
										friend_count2++;
										//avgScore2 = parseInt(avgScore2) + parseInt(values1[i]);
										if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										{
											friend_avgScore2 = parseFloat(friend_avgScore2) + parseFloat(friend_variable1_values[i]);
										}
									}
								}//end for
			
			
								if(friend_count1==0)
								{
									friend_displayedScore1 = 0;
								}
								else{
									friend_displayedScore1 = parseFloat(friend_avgScore1) / parseFloat(friend_count1);
								}	
								if(friend_count2==0)
								{
									friend_displayedScore2 = 0
								}
								else{
									friend_displayedScore2 = parseFloat(friend_avgScore2) / parseFloat(friend_count2);
								}	
	
								friend_chartCount1 = parseFloat(friend_displayedScore1.toFixed(1));
								friend_chartCount2 = parseFloat(friend_displayedScore2.toFixed(1));								
							}//end if(typeVar1=="score")
			
							if (typeVar1 == "count") {
								avgTotalLabel = "Total";
								for (var i = 0; i < user_variable1_values.length; ++i) 
								{
									if (user_variable2_values[i] == 1) 
									{
										
										if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										{
											user_totalCount1 = parseInt(user_totalCount1) + parseInt(user_variable1_values[i]);
										}
										
									}
									if (user_variable2_values[i] == 0) {
										if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
										{
											user_totalCount2 = parseInt(user_totalCount2) + parseInt(user_variable1_values[i]);
										}
										
									}
								}//end for
	
								user_chartCount1 = user_totalCount1;
								user_chartCount2 = user_totalCount2;
								
								
								for (var i = 0; i < friend_variable1_values.length; ++i) 
								{
									if (friend_variable2_values[i] == 1) {
										
										if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										{
											friend_totalCount1 = parseInt(friend_totalCount1) + parseInt(friend_variable1_values[i]);
										}
										
									}
									if (friend_variable2_values[i] == 0) {
										if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
										{
											friend_totalCount2 = parseInt(friend_totalCount2) + parseInt(friend_variable1_values[i]);
										}
										
									}
								}//end for
	
								friend_chartCount1 = friend_totalCount1;
								friend_chartCount2 = friend_totalCount2;								
							}//end if(typeVar2=="count")
			
						}//end if(typeVar2 == "binary")
						
						
						
						$("#show-comparison-charts").empty();
						$("#show-cumulative-charts").empty();
						$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results:"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
						if(user_chartCount1 > user_chartCount2)
						{
							
							
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+user_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
							
						}
							
						if(user_chartCount1 == user_chartCount2)
						{


							if(user_chartCount1==0)
							{
								$("<div class='col-xs-6'>You have not reported results to this experiment. Please report them.</div>").appendTo("#cumulative-left");
									
							}
							else
							{
								$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
					
							}
						}
						
						if(user_chartCount1 < user_chartCount2)
						{
			
							$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+user_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
						}



						$("<div class='col-md-6 row' id='cumulative-right'><h5>Member's Results:"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
						if(friend_chartCount1 > friend_chartCount2)
						{
							$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-right");
							
							$("<div class='col-xs-6'><div class='smallCircle orange2'> <div class='big_white'>"+friend_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-right");
							
						}
							
						if(friend_chartCount1 == friend_chartCount2)
						{
							
							if(friend_chartCount1==0)
							{
								$("<div class='col-xs-6'>Member has not reported results to this experiment.</div>").appendTo("#cumulative-right");
									
							}
							else
							{
							
								$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_chartCount1+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-right");
								
								$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+friend_chartCount2+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-right");
							}//end else
						}
						
						if(friend_chartCount1 < friend_chartCount2)
						{
			
							$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+friend_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-right");
							
							$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+friend_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-right");
						}
						
						
						/*
						 * Daily Visualization of user
						 */
						
						if(timesPP.length>0)
						{
							if ($("#content-daily").length != 0)
							{
								$("#content-daily").remove();
							}
											
							if ($("#content-daily").length == 0)
							{
							//alert("content-daily does not exist");
								$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>My Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");		
							}						
							
							var xlabels = [];
							for (var i = 0; i < timesPP.length; ++i) 
							{
								var latestDate= timesPP[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.5, newDate);
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
									xlabel.push(x+0.5, newDate);
									xlabels.push(xlabel);
									
									user_d1.push([x, "nil"]);
									user_d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)
				
							var data = [{
								data : user_d1,
								//data: [ [0,1], [1, 5], [3, 7] ],
								label : ylabels[0],
								color : "#98c734"
							}, {
								data : user_d2,
								//data: [ [4,1], [5, 5], [6, 7] ],
								label : ylabels[1],
								color : "#fc972a"
							}];
				
							var placeholder = $("#placeholder-daily");
				
							var plot = $.plot(placeholder, data, {
							series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
								/*
								bars : {
									show : true,
									barWidth : 0.5,
									fill : 0.9
								},
								*/
				
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
						}//end if(timesPP.length>0)
						
	
						
						/*
						 * Daily Visualization of friend
						 */						
						
						if ($("#comparison-individual").length != 0)
						{
								$("#comparison-individual").remove();
						}				
						if ($("#comparison-individual").length == 0)
						{
						//alert("content-daily does not exist");
							$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-daily-charts");		
						}
  	
  						//alert("friendId="+friendId);
   						
   						if(friend_dateTimes.length==0)
						{
							$("#placeholder-compare").remove();
							$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
								
						}//end if(friend_dateTimes.length==0) 						
  						
						var xlabels = [];
						for (var i = 0; i < friend_dateTimes.length; ++i) 
						{
							var latestDate= friend_dateTimes[i].toString();
							var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
							var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
							
							var xlabel = [];
							//xlabel.push(i+0.3, times[i]);
							xlabel.push(i+0.5, newDate);
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
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								friend_d1.push([x, "nil"]);
								friend_d2.push([x, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)
			
						var data = [{
							data : friend_d1,
							//data: [ [0,1], [1, 5], [3, 7] ],
							label : ylabels[0],
							color : "#82a538"
						}, {
							data : friend_d2,
							//data: [ [4,1], [5, 5], [6, 7] ],
							label : ylabels[1],
							color : "#dc780d"
						}];
			
						var placeholder2 = $("#placeholder-compare");
			
						if(friendId=="MeVsAll")
						{
							
					
	   						if(times.length==0)
							{
								
								$("#placeholder-compare").remove();
								$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
									
							}//end if(times.length==0) 								
															
							
							var d1 = [];
							var d2 = [];
				
							var xlabels = [];
				
							for (var i = 0; i < times.length; ++i) {
								//alert("times[0]="+times[0]);
								var xlabel = [];
								xlabel.push(i+0.5, times[i]);
								xlabels.push(xlabel);
				
								d1.push([i, all_variable1_values[i]]);
								d2.push([i+0.45, all_variable2_values[i]]);
				
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
									xlabel.push(x+0.5, newDate);
									xlabels.push(xlabel);
									
									d1.push([x, "nil"]);
									d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)								
							
				
				/*
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
				*/
							var data = [{
								data : d1,
								label : ylabels[0],
								color : "#98c734"
							}, {
								data : d2,
								label : ylabels[1],
								color : "#fc972a",
							}];
							
							
							
							var plot2 = $.plot(placeholder2, data, {
								/*
								lines : {
									show : true
								},
								points : {
									show : true
								},
								*/
								
								series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
								
								/*
								bars : {
									show : true,
									barWidth : 0.45,
									fill : 0.9
								},
								*/			
						
								
								xaxis : //{ ticks: xlabels, autoscaleMargin: 1},
				
								{
				
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.2, times.length],
									axisLabel: ' ',
								},
								
								yaxis : {
									axisLabel : label2+" (Avg)",
									panRange: false,
								},
								
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-compare")
								},
								pan: {
									interactive: true
								},
				
							});							
						}//end if(friendId=='MeVsAll')
						else if(friendId!="MeVsAll")
						{
							var plot2 = $.plot(placeholder2, data, {
								
								series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
						
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
									container : $("#legendcontainer-compare")
								},
								pan: {
									interactive: true
								},
				
							});
										
						}//end else if(friendId!='MeVsAll')

						$("<div id='tooltip'></div>").css({
							position : "absolute",
							display : "none",
							border : "1px solid #fdd",
							padding : "2px",
							"background-color" : "#fee",
							opacity : 0.80
						}).appendTo("body");
			
						placeholder2.bind("plothover", function(event, pos, item) {
			
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
			
						placeholder2.bind("plotclick", function(event, pos, item) {
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
			
								plot2.highlight(item.series, item.datapoint);
							}
						});
									
						
					}//end else if ( (typeVar1 == "binary" && typeVar2 != "binary") || (typeVar2 == "binary" && typeVar1 != "binary")   )	  		

					else if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 
					{

						/*
						 * Cumulative visualization of the current user
						 */

						var user_line1 = "Correlation value";
						var user_line2 = "Correlation value";
						
	
						
						/*
						 * Cumulative visualization of user
						 */
												
						$("#show-cumulative-charts").empty();
						
						
						var user_avgScore1 = 0.0;
						var user_avgScore2 = 0.0;
						var user_count1 = 0;
						var user_count2 = 0;
						var user_displayedScore1 = 0;
						var user_displayedScore2 = 0;			
						var user_chartCount1;
						var user_chartCount2;
						var avgTotalLabel = "Average";
						
						var friend_avgScore1 = 0.0;
						var friend_avgScore2 = 0.0;
						var friend_count1 = 0;
						var friend_count2 = 0;
						var friend_displayedScore1 = 0;
						var friend_displayedScore2 = 0;			
						var friend_chartCount1;
						var friend_chartCount2;					
							
				

						for (var i = 0; i < user_variable1_values.length; ++i) 
						{
							
							//alert("valuesPP1["+i+"]="+valuesPP1[i]);
							user_count1++;
							//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
							if(user_variable1_values[i]!=null && user_variable1_values[i]!='')
							{
								user_avgScore1 = parseFloat(user_avgScore1) + parseFloat(user_variable1_values[i]);
							}	
							
							user_count2++;
							if(user_variable2_values[i]!=null && user_variable2_values[i]!='')
							{
								user_avgScore2 = parseFloat(user_avgScore2) + parseFloat(user_variable2_values[i]);
							}	
							
							//alert("avgScore1="+avgScore1);	
							//alert("avgScore2="+avgScore2);					
						}//end for
	
	
						if(user_count1==0)
						{
							user_displayedScore1 = 0;
						}
						else{
							user_displayedScore1 = parseFloat(user_avgScore1) / parseFloat(user_count1);
						}	
						if(user_count2==0)
						{
							user_displayedScore2 = 0
						}
						else{
							user_displayedScore2 = parseFloat(user_avgScore2) / parseFloat(user_count2);
						}	
	
						user_chartCount1 = parseFloat(user_displayedScore1.toFixed(1));
						user_chartCount2 = parseFloat(user_displayedScore2.toFixed(1));
						

					
					$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results ("+nameVar1+" vs "+ nameVar2+")</h5></div>").appendTo("#show-cumulative-charts");
						
					if(user_chartCount1 > user_chartCount2)
					{

						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+user_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
						
					}

					else if(user_chartCount1 == user_chartCount2)
					{
		
						if(user_chartCount1==0)
						{
								$("<div class='col-xs-6'>You have not reported results to this experiment. Please report them.</div>").appendTo("#cumulative-left");
										
						}
						else
						{
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
									
						}//end else
					}
					
					else if(user_chartCount1 < user_chartCount2)
					{
		
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+user_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-left");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-left");
					}	

						/*
						 * Cumulative visualization of friend
						 */
						
						$("#show-comparison-charts").empty();


					for (var i = 0; i < friend_variable1_values.length; ++i) 
					{
						
						//alert("valuesPP1["+i+"]="+valuesPP1[i]);
						friend_count1++;
						//avgScore1 = parseInt(avgScore1) + parseInt(values1[i]);
						if(friend_variable1_values[i]!=null && friend_variable1_values[i]!='')
						{
							friend_avgScore1 = parseFloat(friend_avgScore1) + parseFloat(friend_variable1_values[i]);
						}	
						
						friend_count2++;
						if(friend_variable2_values[i]!=null && friend_variable2_values[i]!='')
						{
							friend_avgScore2 = parseFloat(friend_avgScore2) + parseFloat(friend_variable2_values[i]);
						}	
						
						//alert("avgScore1="+avgScore1);	
						//alert("avgScore2="+avgScore2);					
					}//end for


					if(friend_count1==0)
					{
						friend_displayedScore1 = 0;
					}
					else{
						friend_displayedScore1 = parseFloat(friend_avgScore1) / parseFloat(friend_count1);
					}	
					if(friend_count2==0)
					{
						friend_displayedScore2 = 0
					}
					else{
						friend_displayedScore2 = parseFloat(friend_avgScore2) / parseFloat(friend_count2);
					}	

					friend_chartCount1 = parseFloat(friend_displayedScore1.toFixed(1));
					friend_chartCount2 = parseFloat(friend_displayedScore2.toFixed(1));
					

					//$("<div class='col-md-6 row' id='cumulative-left2'><h5></h5></div>").appendTo("#show-comparison-charts");
					$("<div class='col-md-6 row' id='cumulative-right'><h5>Member's Results ("+nameVar1+" vs "+ nameVar2+")</h5></div>").appendTo("#show-cumulative-charts");
										

					//alert("friend_chartCount1="+friend_chartCount1);
					//alert("friend_chartCount2="+friend_chartCount2);

					if(friend_chartCount1 > friend_chartCount2)
					{

						
						$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+friend_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-right");
						
						$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+friend_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-right");
					}

					else if(friend_chartCount1 == friend_chartCount2)
					{
		

						if(friend_chartCount1==0)
						{
							$("<div class='col-xs-6'>Member has not reported results to this experiment.</div>").appendTo("#cumulative-right");
								
						}
						else{
							
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+friend_chartCount1+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-right");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+friend_chartCount2+
							"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-right");			
						}//end else
		
					}
					
					else if(friend_chartCount1 < friend_chartCount2)
					{
		
						//alert("friend_chartCount2 bigger");
						$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+friend_chartCount1+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar1+"</div>").appendTo("#cumulative-right");
						
						$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+friend_chartCount2+
						"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+nameVar2+"</div>").appendTo("#cumulative-right");
					}	

						var user_d1 = [];
						var user_d2 = [];
						var friend_d1 = [];
						var friend_d2 = [];						
						var xlabels = [];

						/*
						 * Daily data of the current user
						 */
			
						if(timesPP.length>0)
						{
							for (var i = 0; i < timesPP.length; ++i) {
								//alert("times[0]="+times[0]);
								var xlabel = [];
								xlabel.push(i+0.5, timesPP[i]);
								xlabels.push(xlabel);
				
								user_d1.push([i, user_variable1_values[i]]);
								user_d2.push([i+0.45, user_variable2_values[i]]);
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
									xlabel.push(x+0.5, newDate);
									xlabels.push(xlabel);
									
									user_d1.push([x, "nil"]);
									user_d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)				
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No";
				
							var user_data = [{
								data : user_d1,
								label : nameVar1,
								color : "#98c734"
							}, {
								data : user_d2,
								label : nameVar2,
								color : "#fc972a",
								yaxis : 2
							}];
	
							if ($("#content-daily").length != 0)
							{
								$("#content-daily").remove();
							}
											
							if ($("#content-daily").length == 0)
							{
							//alert("content-daily does not exist");
								$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>My Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");		
							}						
										
	
							var placeholder = $("#placeholder-daily");
				
							var plot = $.plot(placeholder, user_data, {
								/*
								lines : {
									show : true
								},
								*/
								
							series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
								
								/*
								points : {
									show : true
								},
								*/
								
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
									font: {color : "#98c734"},
								}, {
									position : "right",
									panRange: false,
									font: {color : "#fc972a"},
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
										
						}//end if(timesPP.length>0)

						/*
						 * Daily visualization of the friend
						 */
						
	
						if ($("#comparison-individual").length != 0)
						{
								$("#comparison-individual").remove();
						}				
						if ($("#comparison-individual").length == 0)
						{
						//alert("content-daily does not exist");
							$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-daily-charts");		
						}
  							
						xlabels = [];
   						if(friend_dateTimes.length==0)
						{
							$("#placeholder-compare").remove();
							$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
								
						}//end if(friend_dateTimes.length==0) 							
						
						for (var i = 0; i < friend_dateTimes.length; ++i) {
							//alert("times[0]="+times[0]);
							var xlabel = [];
							xlabel.push(i+0.5, friend_dateTimes[i]);
							xlabels.push(xlabel);
			
							friend_d1.push([i, friend_variable1_values[i]]);
							friend_d2.push([i+0.45, friend_variable2_values[i]]);
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
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								friend_d1.push([x, "nil"]);
								friend_d2.push([x+0.45, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)	
			
			
						var friend_data = [{
							data : friend_d1,
							label : nameVar1,
							color : "#98c734"
						}, {
							data : friend_d2,
							label : nameVar2,
							color : "#fc972a",
							yaxis : 2
						}];
						

						var placeholder2 = $("#placeholder-compare");
			
						var plot2 = $.plot(placeholder2, friend_data, {
							/*
							lines : {
								show : true
							},
							*/
							
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
													
							/*
							points : {
								show : true
							},
							*/
							
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
								font: {color : "#98c734"},
								
							}, {
								position : "right",
								panRange: false,
								font: {color : "#fc972a"},
							}],
			
							grid : {
								hoverable : true,
								clickable : true
							},
							legend : {
								noColumns : 0,
								container : $("#legendcontainer-compare")
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
			
						placeholder2.bind("plothover", function(event, pos, item) {
			
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
			
						placeholder2.bind("plotclick", function(event, pos, item) {
							if (item) {
								//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
								var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
			
								$("#tooltip").html(item.series.label + " = " + y).css({
									top : item.pageY + 5,
									left : item.pageX + 5
								}).fadeIn(200);
			
								plot2.highlight(item.series, item.datapoint);
							}
						});						
						
						
						

					}//end if ((typeVar1 == "score" || typeVar1 == "count") && (typeVar2 == "score" || typeVar2 == "count")) 


			  	
			  	}//end if(variable1_id!=-1 && variable2_id!=-1)
				else if ( (variable1_id==-1 && variable2_id!=-1)  || (variable1_id!=-1 && variable2_id==-1) )
				{
					var user_d1=[];
					var user_d2=[];
					var friend_d1=[];
					var friend_d2=[];
					
					var variable_values;
					var user_variable_values;
					var friend_variable_values;	
					var all_variable_values;				
		  			var nameVar;
		  			var typeVar;
		  			
		  			if(variable1_id!=-1)
					{
						typeVar = typeVar1;
						nameVar = nameVar1;
						
						user_variable_values = user_variable1_values;
						friend_variable_values = friend_variable1_values;
						all_variable_values = all_variable1_values;
					}
		  			if(variable2_id!=-1)
					{
						typeVar = typeVar2;
						nameVar = nameVar2;
						
						user_variable_values = user_variable2_values;
						friend_variable_values = friend_variable2_values;
						all_variable_values = all_variable1_values;
					}					
					
					if(typeVar=="binary")
					{	
						var ylabels = [];
						ylabels[0] = nameVar + "=Yes";
						ylabels[1] = nameVar + "=No";
		
			
						var user_count1 = 0;
						var user_count2 = 0;
						var friend_count1 = 0;
						var friend_count2 = 0;		
						
						
						for(var i=0; i<user_variable_values.length; i++)
						{
							if(user_variable_values[i]==1)
							{
								user_count1++;
							}
							
							if(user_variable_values[i]==0)
							{
								user_count2++;
							}
							
						}//end for
						
						//alert("one binary variable and friendId="+friendId);
									
						if(friendId=="MeVsAll")
						{
							//alert("all_variable_values.length="+all_variable_values.length);
							for(var i=0; i<all_variable_values.length; i++)
							{
									
								friend_count1 = parseInt(friend_count1) + parseInt (all_variable_values[i][0]);
								friend_count2 = parseInt(friend_count2) + parseInt (all_variable_values[i][1]);
							}//end for								
						}//end if(friendId=="MeVsAll")
						else if(friendId!="MeVsAll" && friendId!="All")
						{
							for(var i=0; i<friend_variable_values.length; i++)
							{

								if(friend_variable_values[i]==1)
								{
									friend_count1++;
								}
								
								if(friend_variable_values[i]==0)
								{
									friend_count2++;
								}
								
							}//end for								
						}//end if(friendid!="MeVsAll")

					
						/*
						 * Cumulative visualization
						 */

						//alert("count1="+count1);
						//alert("count2="+count2);
						
						$("#show-cumulative-charts").empty();
						
						$("<h3>My Results: "+nameVar+"</h3><div class='col-md-6 row' id='cumulative-left'></div>").appendTo("#show-cumulative-charts");
						if(user_count1 > user_count2)
						{
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+user_count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
							
						}
							
						if(user_count1 == user_count2)
						{
							
								if(user_count1==0)
				                {
									
									//$("#show-cumulative-charts").empty();
	
										$("<div class='col-xs-6'>You have not reported results to this experiment. Please report them.</div>").appendTo("#cumulative-left");					                	
				                }
				                else{
				                	
									$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_count1+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
									
									$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_count2+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");				                	
				                }//end else
						}
						
						if(user_count1 < user_count2)
						{
							$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+user_count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+user_count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
						}
						

						$("#show-comparison-charts").empty();
						$("<div class='col-md-6 row' id='cumulative-left2'><h5>Member's Results: "+nameVar+"<h5></div>").appendTo("#show-comparison-charts");
						if(friend_count1 > friend_count2)
						{
							$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left2");
							
							$("<div class='col-xs-6'><div class='smallCircle orange2'> <div class='big_white'>"+friend_count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left2");
							
						}
							
						if(friend_count1 == friend_count2)
						{
			
								if(friend_count1==0)
				                {
									
									//$("#show-cumulative-charts").empty();
	
									$("<div class='col-xs-6'>Member has not reported results to this experiment.</div>").appendTo("#cumulative-left2");					                	
				                }
				                else{
				                	
				                	$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_count1+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left2");
							
									$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+friend_count2+
									"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left2");
				                }			
			

						}
						
						if(friend_count1 < friend_count2)
						{

			
							$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+friend_count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left2");
							
							$("<div class='col-xs-6'><div class='bigCircle orange2'> <div class='big_white'>"+friend_count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left2");
						}
						


						
						/*
						 * Daily visualization of the current participant
						 */
						if(timesPP.length>0)
						{
							var xlabels = [];
							for(var i=0; i< user_variable_values.length; i++)
							{
								//alert("valuesPP_temp["+i+"]="+valuesPP_temp[i]);
								if(user_variable_values[i]==1)
									user_d1.push([i, 1]);
									
								if(user_variable_values[i]==0)
									user_d2.push([i, 1]);							
							}//end for
							
	
							for (var i = 0; i < timesPP.length; ++i) 
							{
								//alert("times["+i+"]="+timesPP[i]);
								var xlabel = [];
								xlabel.push(i+0.5, timesPP[i]);
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
									parsedDate.setDate(parsedDate.getDate()+1);
									//alert("parsedDate-new="+parsedDate); 
									var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
									//alert("newDate="+newDate);
									
									var xlabel = [];
									//xlabel.push(x, "Day"+ (x+1)+ " ");
									xlabel.push(x+0.5, newDate);
									xlabels.push(xlabel);
									
									user_d1.push([x, "nil"]);
									user_d2.push([x+0.45, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)
			
							
							
							var ylabels = [];
							ylabels[0] = nameVar + "=Yes";
							ylabels[1] = nameVar + "=No";
							
							var user_data = [{
								data : user_d1,
								label : nameVar + "=Yes",
								color : "#98c734"
							}, {
								data : user_d2,
								label : nameVar + "=No",
								color : "#fc972a"
							}];
				
							
							
							//$("#show-daily-charts").empty();
							
							if($("#content-daily").length != 0)
							{
								$("#content-daily").remove();
							}
							if($("#content-daily").length == 0)
							{
								//alert("content-daily does not exist");
								$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>My results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");
								
							}
									
							var placeholder = $("#placeholder-daily");
							var plot = $.plot(placeholder, user_data, 
							{
	
								series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
								/*
								bars : {
									show : true,
									barWidth : 0.5,
									fill : 0.9
								},
								*/
								
								xaxis : {
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.1, xlabels.length],
									axisLabel: ' ', 
								},
								yaxis : {
									//ticks : [[0.5, "Yes"], [-0.5, "No"]],
									//axisLabel : nameVar1,
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
				
										$("#tooltip").html(item.series.label).css({
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
			
				
									$("#tooltip").html(item.series.label).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});								
							

						}//end if(timesPP.length>0)

						/*
						 * Daily visualization of the friend
						 */

						//$("#show-comparison-daily-charts").empty();	
						if ($("#comparison-individual").length != 0)
						{
							$("#comparison-individual").remove();
						}
						
						if ($("#comparison-individual").length == 0)
						{
							$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-daily-charts");		
						}

						if(friendId!="MeVsAll")
						{
							
	   						if(friend_variable_values.length==0)
							{
								$("#placeholder-compare").remove();
								$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
									
							}//end if(friend_variable_values.length==0) 								
							
							var xlabels = [];
							for(var i=0; i< friend_variable_values.length; i++)
							{
								//alert("valuesPP_temp["+i+"]="+valuesPP_temp[i]);
								if(friend_variable_values[i]==1)
									friend_d1.push([i, 1]);
									
								if(friend_variable_values[i]==0)
									friend_d2.push([i, 1]);							
							}//end for
							
	
							for (var i = 0; i < friend_dateTimes.length; ++i) 
							{
								//alert("times["+i+"]="+timesPP[i]);
								var xlabel = [];
								xlabel.push(i+0.5, friend_dateTimes[i]);
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
									parsedDate.setDate(parsedDate.getDate()+1);
									//alert("parsedDate-new="+parsedDate); 
									var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
									//alert("newDate="+newDate);
									
									var xlabel = [];
									//xlabel.push(x, "Day"+ (x+1)+ " ");
									xlabel.push(x+0.45, newDate);
									xlabels.push(xlabel);
									
									friend_d1.push([x, "nil"]);
									friend_d2.push([x, "nil"]);	
								
								}//end for
							}//end if(xlabels.length<7)
			
							
							
							var ylabels = [];
							ylabels[0] = nameVar + "=Yes";
							ylabels[1] = nameVar + "=No";
							
							var friend_data = [{
								data : friend_d1,
								label : nameVar + "=Yes",
								color : "#82a538"
							}, {
								data : friend_d2,
								label : nameVar + "=No",
								color : "#dc780d"
							}];
								
							var placeholder2 = $("#placeholder-compare");
							
							var plot2 = $.plot(placeholder2, friend_data, {
								series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
							
								xaxis : {
									tickLength : 0,
									//min: 0.5,
									//max: ticks.length+0.5,
									ticks : xlabels,
									rotateTicks : 90,
									panRange: [-0.1, xlabels.length],
									axisLabel: ' ', 
								},
								yaxis : {
									//ticks : [[0.5, "Yes"], [-0.5, "No"]],
									//axisLabel : nameVar1,
									panRange: false,
								},
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-compare")
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
				
							placeholder2.bind("plothover", function(event, pos, item) {
				
								//    if ($("#enablePosition:checked").length > 0)
								{
									var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
									//$("#hoverdata").text(str);
								}
				
								//if ($("#enableTooltip:checked").length > 0)
								{
									if (item) {
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
										$("#tooltip").html(item.series.label).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
				
									} else {
										$("#tooltip").hide();
									}
								}
							});
				
							placeholder2.bind("plotclick", function(event, pos, item) {
								if (item) {
									//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
									var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
			
				
									$("#tooltip").html(item.series.label).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot2.highlight(item.series, item.datapoint);
								}
							});											
						}//end if(friendId!="MeVsAll")			
				
						else if(friendId=="MeVsAll")
						{
							
							
	   						if(times.length==0)
							{
								
								$("#placeholder-compare").remove();
								$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
									
							}//end if(times.length==0)
							
							if(times.length>0)
							{ 	
								var xlabels = [];
								for(var i=0; i< all_variable_values.length; i++)
								{
									//alert("all_variable_values[i][0]="+all_variable_values[i][0]);
									friend_d1.push([i, all_variable_values[i][0] ]);
									friend_d2.push([i+0.45, all_variable_values[i][1] ]);						
								}//end for
								
								//alert("times.length="+times.length);
								
								
								for (var i = 0; i < times.length; ++i) 
								{
									//alert("times["+i+"]="+timesPP[i]);
									var xlabel = [];
									xlabel.push(i+0.5, times[i]);
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
										parsedDate.setDate(parsedDate.getDate()+1);
										//alert("parsedDate-new="+parsedDate); 
										var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
										//alert("newDate="+newDate);
										
										var xlabel = [];
										//xlabel.push(x, "Day"+ (x+1)+ " ");
										xlabel.push(x+0.5, newDate);
										xlabels.push(xlabel);
										
										friend_d1.push([x, "nil"]);
										friend_d2.push([x+0.45, "nil"]);	
									
									}//end for
								}//end if(xlabels.length<7)
				
								
								
								var ylabels = [];
								ylabels[0] = nameVar + "=Yes";
								ylabels[1] = nameVar + "=No";
								
								var friend_data = [{
									data : friend_d1,
									label : nameVar + "=Yes",
									color : "#82a538"
								}, {
									data : friend_d2,
									label : nameVar + "=No",
									color : "#dc780d"
								}];
									
								var placeholder2 = $("#placeholder-compare");
								
								var plot2 = $.plot(placeholder2, friend_data, {
									/*
									lines : {
										show : true,
									},
									*/
									
									series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
			
									xaxis : {
										tickLength : 0,
										//min: 0.5,
										//max: ticks.length+0.5,
										ticks : xlabels,
										rotateTicks : 90,
										panRange: [-0.1, xlabels.length],
										axisLabel: ' ', 
									},
									yaxis : {
										//ticks : [[0.5, "Yes"], [-0.5, "No"]],
										axisLabel : 'No. of Data Entries',
										panRange: false,
									},
									grid : {
										hoverable : true,
										clickable : true
									},
									legend : {
										noColumns : 0,
										container : $("#legendcontainer-compare")
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
					
								placeholder2.bind("plothover", function(event, pos, item) {
					
									//    if ($("#enablePosition:checked").length > 0)
									{
										var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
										//$("#hoverdata").text(str);
									}
					
									//if ($("#enableTooltip:checked").length > 0)
									{
										if (item) {
											var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
					
					
											top : item.pageY + 5,
											$("#tooltip").html(item.series.label+ " = " + y).css({
												top : item.pageY + 5,
												left : item.pageX + 5
											}).fadeIn(200);
					
										} else {
											$("#tooltip").hide();
										}
									}
								});
					
								placeholder2.bind("plotclick", function(event, pos, item) {
									if (item) {
										//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
					
										$("#tooltip").html(item.series.label+ " = " + y).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
					
										plot2.highlight(item.series, item.datapoint);
									}
								});				
							}//end if(times.length>0)
														
	
														
						}//end if(friendId=="MeVsAll")				

						
						
					}//end if(typeVar=="binary")
					if(typeVar=="score" || typeVar=="count")
					{
						var xlabels = [];					
						var user_d1 = [];
						var user_d2 = [];
						var user_count = 0;
						var user_totalScore=0;
						var user_avgScore=0;
						var user_line1= " ";
						var user_line2= " ";
						var friend_d1 = [];
						var friend_d2 = [];
						var friend_count = 0;
						var friend_totalScore=0;
						var friend_avgScore=0;
						var friend_line1= " ";
						var friend_line2= " ";					
					

						for(var i=0; i< user_variable_values.length; i++)
						{
							user_count++;
							user_totalScore += parseFloat(user_variable_values[i]);
						}//end for

						if(user_count==0)
						{
							user_totalScore = 0;
							user_avgScore = 0;
						}//end if(user_count==0)
						else if(user_count>0)
						{
							user_avgScore = parseFloat(user_totalScore) / parseFloat(user_count);
						}//end if(user_count>0)
						
						
						for(var i=0; i< friend_variable_values.length; i++)
						{
							friend_count++;
							friend_totalScore += parseFloat(friend_variable_values[i]);
						}//end for

						if(friend_count==0)
						{
							friend_totalScore = 0;
							friend_avgScore = 0;
						}//end if(friend_count==0)
						else if(friend_count>0)
						{
							friend_avgScore = parseFloat(friend_totalScore) / parseFloat(friend_count);
						}//end if(friend_count>0)						
						
						
										
					/*
					 * Cumulative visualizations
					 */
					
					$("#show-comparison-charts").empty();
					$("#show-cumulative-charts").empty();
					$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results: "+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
					
				
										
					//if(user_variable_values.length>0 && friend_variable_values.length>0)
					{

						if(user_avgScore>friend_avgScore)
						{
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-left");
							
							$("<div class='col-md-6 row'id='cumulative-right'> <h5>Member's Results: "+nameVar+"<h5>  </div>").appendTo("#show-cumulative-charts");
							
							$("<div class='col-xs-6'><div class='smallCircle green2'> <div class='big_white'>"+friend_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-right");
													
						}//end if(user_avgScore>=friend_avgScore)
						else if(user_avgScore==friend_avgScore)
						{
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+user_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-left");
							
							$("<div class='col-md-6 row'id='cumulative-right'> <h5>Member's Results: "+nameVar+"<h5>  </div>").appendTo("#show-cumulative-charts");
							
							
							$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-right");						
						}
										
						else if(user_avgScore<friend_avgScore)
						{
							$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+user_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-left");
							
							$("<div class='col-md-6 row'id='cumulative-right'> <h5>Member's Results: "+nameVar+"<h5>  </div>").appendTo("#show-cumulative-charts");
							
							
							$("<div class='col-xs-6'><div class='bigCircle green2'> <div class='big_white'>"+friend_avgScore.toFixed(1)+
							"</div><span style='color:white; font-size:0.8em'>Average</span></div></div>").appendTo("#cumulative-right");						
						}

					}//end if(user_variable_values.length>0 && friend_variable_values.length>0)
					

					if(user_variable_values.length==0 )
					{
							$("#cumulative-left").empty();
							//$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results: "+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
							$("<div>You have not reported results to this experiment. Please report them.</div>").appendTo("#cumulative-left");						
					}

					if(friend_variable_values.length==0 )
					{
							$("#cumulative-right").empty();
							//$("<div class='col-md-6 row'id='cumulative-right'> <h5>Member's Results: "+nameVar+"<h5>  </div>").appendTo("#show-cumulative-charts");							
							$("<div>Member has not reported results to this experiment.</div>").appendTo("#cumulative-right");						
					}	
				
		
					/*
					 * Daily visualizations of the user
					 */
					
					if(timesPP.length > 0)
					{
						for (var i = 0; i < timesPP.length; ++i) 
						{
							//alert("times[0]="+times[0]);
							var xlabel = [];
							xlabel.push(i+0.5, timesPP[i]);
							xlabels.push(xlabel);
			
							user_d1.push([i, user_variable_values[i]]);
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
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								user_d1.push([x, "nil"]);
									
							
							}//end for
						}//end if(xlabels.length<7)		
						
						var user_data = [{
							data : user_d1,
							label : nameVar,
							color : "#98c734"
						}];
						
	
						if($("#content-daily").length != 0)
						{
							$("#content-daily").remove();
						}
						if($("#content-daily").length == 0)
						{
							//alert("content-daily does not exist");
							$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>My Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");
							
						}		
						var placeholder = $("#placeholder-daily");
			
						var plot = $.plot(placeholder, user_data, {
							/*
							lines : {
								show : true
							},
							points : {
								show : true
							},
							*/
							
							series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
											
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
							yaxis : {
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
											
					}//end if(timesPP.length > 0)
					

					/*
					 * Daily visualization of the friend
					 */
					//$("#show-comparison-daily-charts").empty();	
					if ($("#comparison-individual").length != 0)
					{
						$("#comparison-individual").remove();
					}
					
					if ($("#comparison-individual").length == 0)
					{
						$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Member's Results (daily)</div> <div id='legendcontainer-compare'></div> <div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-comparison-daily-charts");		
					}
										
					//alert("one count/score, one nothing. friend_dateTimes.length="+friend_dateTimes.length);
					if(friend_dateTimes.length==0)
					{
						$("#placeholder-compare").remove();
						$("<div>Member has not reported results to this experiment. </div>").appendTo("#comparison-individual");
							
					}//end if(friend_dateTimes.length==0) 						
					
					var xlabels = [];
					for (var i = 0; i < friend_dateTimes.length; ++i) 
					{
						//alert("times[0]="+times[0]);
						var xlabel = [];
						xlabel.push(i+0.5, friend_dateTimes[i]);
						xlabels.push(xlabel);
		
						friend_d1.push([i, friend_variable_values[i]]);
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
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								friend_d1.push([x, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)									
					
					var friend_data = [{
						data : friend_d1,
						label : nameVar,
						color : "#82a538"
					}];
					
					


					var placeholder2 = $("#placeholder-compare");
					var plot2 = $.plot(placeholder2, friend_data, {
						/*
						lines : {
							show : true
						},
						points : {
							show : true
						},
						*/
						
						series: { bars: { show: true, barWidth:0.43, fill: 0.9}, shadowSize: 0 },
										
									
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
						yaxis : {
							panRange: false,
						}, 
						grid : {
							hoverable : true,
							clickable : true
						},
						legend : {
							noColumns : 0,
							container : $("#legendcontainer-compare")
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
		
					placeholder2.bind("plothover", function(event, pos, item) {
		
						//    if ($("#enablePosition:checked").length > 0)
						{
							var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
							//$("#hoverdata").text(str);
						}
		
						//if ($("#enableTooltip:checked").length > 0)
						{
							if (item) {
								var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
		
								$("#tooltip").html(item.series.label+" = "+y).css({
									top : item.pageY + 5,
									left : item.pageX + 5
								}).fadeIn(200);
		
							} else {
								$("#tooltip").hide();
							}
						}
					});
		
					placeholder2.bind("plotclick", function(event, pos, item) {
						if (item) {
							//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
							var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
	
		
							$("#tooltip").html(item.series.label+" = "+y).css({
								top : item.pageY + 5,
								left : item.pageX + 5
							}).fadeIn(200);
		
							plot2.highlight(item.series, item.datapoint);
						}
					});									
	
					}//end if(typeVar=="score" || typeVar=="count")
					
					
			  	} //end else if ( (variable1_id==-1 && variable2_id!=-1)  || (variable1_id!=-1 && variable2_id==-1) ) 		
			
		    }//end if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	  }//end xmlhttp.onreadystatechange = function()

		if(variable1_id!=-1 || variable2_id!=-1)
		{
		/*
		   	xmlhttp.open("GET", "http://localhost/ajaxfiles/getExperimentResultsComparison.php?experimentId="+experimentId+"&userId="+userId+"&friendId="+friendId+
		   	"&variable1="+variable1_id+"&variable2="+variable2_id+"&typeVar1="+typeVar1+"&typeVar2="+typeVar2+"&times[]="+times+"&timesPP[]="+timesPP, true);
		*/
		/*
		 	xmlhttp.open("GET", "http://digitalbrain-test.lancs.ac.uk/ajaxfiles/getExperimentResultsComparison.php?experimentId="+experimentId+"&userId="+userId
		   	+"&friendId="+friendId+"&variable1="+variable1_id+"&variable2="+variable2_id+"&typeVar1="+typeVar1+"&typeVar2="+typeVar2+"&times[]="+times+"&timesPP[]="+timesPP, 
		   	true);
		*/   	
		 	xmlhttp.open("GET", "http://www.myliferocket.com/ajaxfiles/getExperimentResultsComparison.php?experimentId="+experimentId+"&userId="+userId
		   	+"&friendId="+friendId+"&variable1="+variable1_id+"&variable2="+variable2_id+"&typeVar1="+typeVar1+"&typeVar2="+typeVar2+"&times[]="+times+"&timesPP[]="+timesPP, 
		   	true);		   	
		  	   		 	
		  	xmlhttp.send();				
		}//end if(variable1_id!=-1 || variable2_id!=-1)
		    	  
}//end showComparison()




function showAllResults()
{
	//alert("showAllResults");
 
	var variable1 = document.getElementById("shown-variable1").value;
	var variable2 = document.getElementById("shown-variable2").value;

   //alert("values.length="+values.length);		
   //alert("variable1="+variable1);
   //alert("variable2="+variable2);
  //if(variable1 == "-1" && variable2 == "-1")
  //return;
  
	//var variable1_index = <?php echo json_encode($variable_chart1_index)?>;
	//alert(variable1_index);
  
	//alert("testing");
  
	var variable1_index= document.getElementById("shown-variable1").selectedIndex;
  	var variable1_id = variableIds_js[variable1_index];
	//alert("variable1_index="+variable1_index);
	//alert("variableIds_js[variable1_index]="+variableIds_js[variable1_index]);
  
	var variable2_index= document.getElementById("shown-variable2").selectedIndex;
	var variable2_id = variableIds_js[variable2_index];
	//alert("variable2_index="+variable2_index);
	//alert("variableIds_js[variable2_index]="+variableIds_js[variable2_index]);

	//var typeVar1 =  <?php echo json_encode($variableTypes[$variable1_index]); ?>;
	//var typeVar2 =  <?php echo json_encode($variableTypes[$variable2_index]); ?>;
		
	//var variableTypes_js = <?php echo json_encode($variableTypes)?>;
	//var values = <?php echo json_encode($variableValues); ?>;

	var values1 =  values[variable1_index];
	var values2 =  values[variable2_index];
	
	var valuesPP1 =  valuesPP[variable1_index];
	var valuesPP2 =  valuesPP[variable2_index];
	
 	//alert("valuesPP1.length="+valuesPP1.length);
 	//alert("valuesPP2.length="+valuesPP2.length);
	
	var nameVar1 = variableNames_js[variable1_index];
	var nameVar2 = variableNames_js[variable2_index];
			
	var typeVar1 =  variableTypes_js[variable1_index];
	var typeVar2 =  variableTypes_js[variable2_index];
	
	//alert("typeVar1="+typeVar1);
	//alert("typeVar2="+typeVar2);
	//alert(values1.length);
	//var experiment_results_period = <?php echo json_encode($experiment_results_period)?>;			
//	var experiment_results_period = $("input[type='radio'][name='results-period']:checked").val();
	
//	var experiment_results_start_date = $("#datepicker2").val();
	//alert(experiment_results_start_date);
		
 	//alert(<?php echo json_encode($variable1_index); ?>);
 	//alert(<?php echo json_encode($variable2_index); ?>);
/*
 	alert(variable1_index);
 	alert(variable2_index);
 	alert(typeVar1);
	alert(typeVar2);
*/
	if(variable1=="-1")
  		variable1_id = -1;
  
	if(variable2=="-1")
 	 	variable2_id = -1;
  
	//alert("variable1_id="+variable1_id);
	//alert("variable2_id="+variable2_id);
	
	var participantId = document.getElementById("participantId").value;
	//alert("participantId="+participantId);
		if (window.XMLHttpRequest)
		{
	    	// code for IE7+, Firefox, Chrome, Opera, Safari
	    	xmlhttp = new XMLHttpRequest();
		}
	  	else
	  	{
	  		// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	  
		xmlhttp.onreadystatechange = function()
		{
	        //document.getElementById("placeholder-compare1").innerHTML = xmlhttp.responseText;
	
			//alert("xmlhttp.onreadystatechange");
			
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		    {
				var response = xmlhttp.responseText;
	        	//alert("response="+response);
	  
				var obj = jQuery.parseJSON (response);
				//alert(obj.friend_variable1_values);
				
	            var friend_variable1_values = obj.friend_variable1_values;
	            var friend_variable2_values = obj.friend_variable2_values;
	            var friend_dateTimes = obj.friend_dateTimes;
	            
	            var all_variable1_values = obj.all_variable1_values;
	            var all_variable2_values = obj.all_variable2_values;
	            var all_variable3_values = obj.all_variable3_values;
	            var all_variable4_values = obj.all_variable4_values;	
	            
	            
	            if( 
		        	(variable1_id==-1 && variable2_id!=-1) || (variable1_id!=-1 && variable2_id==-1) 
		          )
		    	{
			    	var variable_id;
			    	var nameVar;
			    	var typeVar;
			    	var all_variable_values;
			    	
			    	if ($("#content-daily").length != 0)
			    	{
			    		//alert("content-daily exists");
			    		$("#content-daily").remove();
			    	}
			    	//else
			    		//alert("content-daily does not exist");
			    	
					if ($("#content-daily").length == 0)
					{
						$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");
						
					}		    	
			    	
			    	
			    	if(variable1_id!=-1)
			        {
			        	variable_id = variable1_id;
			        	nameVar = nameVar1;
			        	typeVar = typeVar1;
						all_variable_values	= all_variable1_values;		        	
			        }//end if(variable1_id!=-1)
			    	else if(variable2_id!=-1)
			        {
			        	variable_id = variable2_id;
			        	nameVar = nameVar2;
			        	typeVar = typeVar2;
						all_variable_values	= all_variable1_values;
			        }//end if(variable2_id!=-1)
			        
			        //alert("variable_id="+variable_id);
			        //alert("nameVar="+nameVar);
			        //alert("typeVar="+typeVar);
			        
			  		if(typeVar=="binary")
			        {
						var d1 = [];
						var d2 = [];					
						
						var dc1 = [];
						var dc2 = [];
			
						var count1 = 0;
						var count2 = 0;	
						

						/*
						 * Cumulative data of all participants
						 */
						
						for(var i=0; i<all_variable_values.length; i++)
						{
							
							count1 = parseInt(count1) + parseInt (all_variable_values[i][0]);
							count2 = parseInt(count2) + parseInt (all_variable_values[i][1]);
						}//end for							
						
			
						dc1.push([0, count1]);
						dc2.push([2, count2]);
												

						/*
						 * Cumulative visualization of all participants
						 */

						//alert("count1="+count1);
						//alert("count2="+count2);
						
						$("#show-cumulative-charts").empty();
						
						if(count1 > count2)
						{
							$("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
							
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
							
						}
							
						if(count1 == count2)
						{
			
			                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
			
							$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
						}
						
						if(count1 < count2)
						{
			
			                $("<div class='col-md-6 row' id='cumulative-left'><h5>"+nameVar+"<h5></div>").appendTo("#show-cumulative-charts");
			
							$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+count1+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": Yes</div>").appendTo("#cumulative-left");
							
							$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+count2+
							"</div> <span style='color:white; font-size:0.8em'>Total</span> </div>"+nameVar+": No</div>").appendTo("#cumulative-left");
						}
						

						
						/*
						 * Daily data for all participants
						 */
						for(var i=0; i<all_variable_values.length; i++)
						{
							
							d1.push([i, parseInt(all_variable_values[i][0]) ]);
							d2.push([i+0.45, parseInt(all_variable_values[i][1]) ]);
						}//end for		
						
						var xlabels = [];
						for (var i = 0; i < times.length; ++i) 
						{
							//alert("times["+i+"]="+timesPP[i]);
							var xlabel = [];
							xlabel.push(i+0.5, times[i]);
							xlabels.push(xlabel);
						}//end for

						/*
						 * Daily visualization of all participants' data
						 */
						
						var numDays = xlabels.length;
						if(numDays<7)
						{
			
							var latestDate= xlabels[xlabels.length-1].toString();
							var index = latestDate.indexOf(",")+1;
							var latestDateString = latestDate.substr(index, latestDate.length-1);
							var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDateString);		
			
							for(var x=numDays; x<7; x++)
							{
								parsedDate.setDate(parsedDate.getDate()+1);
								//alert("parsedDate-new="+parsedDate); 
								var newDate = parsedDate.getDate() + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();
								//alert("newDate="+newDate);
								
								var xlabel = [];
								//xlabel.push(x, "Day"+ (x+1)+ " ");
								xlabel.push(x+0.5, newDate);
								xlabels.push(xlabel);
								
								d1.push([x, "nil"]);
								d2.push([x, "nil"]);	
							
							}//end for
						}//end if(xlabels.length<7)
		

						var ylabels = [];
						ylabels[0] = nameVar + "=Yes";
						ylabels[1] = nameVar + "=No";
						
						var data = [{
							data : d1,
							label : nameVar + "=Yes",
							color : "#98c734"
						}, {
							data : d2,
							label : nameVar + "=No",
							color : "#fc972a"
						}];
			
						var placeholder = $("#placeholder-daily");
						
						//var plot = $.plot(placeholder, data);
						//$.plot($("#placeholder-daily-pp"), [ d1, d2]);
						    
					
						var plot = $.plot(placeholder, data, {
							/*
							lines : {
								show : true,
							},
							*/
							
							bars : {
								show : true,
								barWidth : 0.43,
								fill : 0.9
							},
					
							/*
							points : {
								show : false
							},					
							*/
							
							xaxis : {
								tickLength : 0,
								//min: 0.5,
								//max: ticks.length+0.5,
								ticks : xlabels,
								rotateTicks : 90,
								panRange: [-0.1, xlabels.length],
								axisLabel: ' ', 
							},
							yaxis : {
								//ticks : [[0.5, "Yes"], [-0.5, "No"]],
								axisLabel : 'No. of Data Entries',
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
			
									$("#tooltip").html(item.series.label+" = "+y).css({
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
		
			
								$("#tooltip").html(item.series.label+" = "+y).css({
									top : item.pageY + 5,
									left : item.pageX + 5
								}).fadeIn(200);
			
								plot.highlight(item.series, item.datapoint);
							}
						});			
						
						
						
					}//end if(typeVar=="binary")		    		
		    	}//end if( (variable1_id==-1 && variable2_id!=-1) || (variable1_id!=-1 && variable2_id==-1) )
		    	else if(variable1_id!=-1 && variable2_id!=-1)
		    	{
		    		if(typeVar1=="binary" && typeVar2=="binary")
		    		{
		    			//alert("two binary for All participants");
		    			
				    	if ($("#content-daily").length != 0)
				    	{
				    		//alert("content-daily exists");
				    		$("#content-daily").remove();
				    	}		    						
						var count1 = 0;
						var count2 = 0;
						var count3 = 0;
						var count4 = 0;
						
						var d1 = [];
						var d2 = [];
						var d3 = [];
						var d4 = [];						
						
						
						var dOne = 0;
						var dTwo = 0;
						var xlabels = [];
						
						/*
							 * Cumulative data
						*/
						for (var i = 0; i < times.length; ++i) 
						{
							//alert("all_variable1_values[i]"+all_variable1_values[i]);
							count1 = parseInt(count1) + parseInt(all_variable1_values[i]);
							count2 = parseInt(count2) + parseInt(all_variable2_values[i]);
							count3 = parseInt(count3) + parseInt(all_variable3_values[i]);
							count4 = parseInt(count4) + parseInt(all_variable4_values[i]);
						}//end for
						

						
						/*
						 * Cumulative visualization of all participants
						 */
						$("#show-cumulative-charts").empty();
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
							$("<div class='col-md-6 row'id='cumulative-right'><h5>"+nameVar1+"=No</h5>").appendTo("#show-cumulative-charts");
							
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
					

						
						/*
						 * Daily data
						 */
						
					  	if ($("#comparison-individual").length == 0)
						{
						//alert("content-daily does not exist");
							$("<div id='comparison-individual' name='comparison-individual'> <div style='text-align:center; width:80%;'>Results (daily)</div>"+ 
							"<div align='left'>"+nameVar1+"=Yes</div>"+
							
							"<div align='left' id='legendcontainer-compare' style= 'width:80%;'></div>"+ 
							"<div id='placeholder-compare' class='demo-placeholder' style='height:400px; width:80%;'></div>"+ 
							"<span id='hoverdata'></span> <span id='clickdata'></span>"+
							

							"<div align='left'>"+nameVar1+"=No</div>"+  
							"<div align='left' id='legendcontainer-compare2' style= 'width:80%;'></div>"+ 
							"<div id='placeholder-compare2' class='demo-placeholder' style='height:400px; width:80%;'></div>"+ 
							"<span id='hoverdata'></span> <span id='clickdata'></span>"+										 
							
							
							"</div>").appendTo("#show-comparison-daily-charts");		
						}	
						
						
							var all_d1 = [];
							var all_d2 = [];
							var all_d3 = [];
							var all_d4 = [];
					
				
							//alert("all_variable1_values.length="+all_variable1_values.length);
							//alert("times.length="+times.length);
							for (var i = 0; i < times.length; ++i) 
							{
								//alert("all_variable1_values["+i+"]="+all_variable1_values[i]);
								all_d1.push([i, all_variable1_values[i] ]);
								all_d2.push([i+0.45, all_variable2_values[i] ]);
								
								all_d3.push([i, (all_variable3_values[i]) ]);
								all_d4.push([i+0.45, (all_variable4_values[i]) ]);
							}//end for
							
							
							var xlabels = [];
							for (var i = 0; i < times.length; ++i) 
							{
								var latestDate= times[i].toString();
								var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
								var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
								
								var xlabel = [];
								//xlabel.push(i+0.3, times[i]);
								xlabel.push(i+0.5, newDate);
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
									xlabel.push(x+0.5, newDate);
									xlabels.push(xlabel);
									
									all_d1.push([x, "nil"]);
									all_d2.push([x+0.45, "nil"]);
									all_d3.push([x, "nil"]);
									all_d4.push([x+0.45, "nil"]);		
								
								}//end for
							}//end if(xlabels.length<7)
				
							var ylabels = [];
							ylabels[0] = nameVar2 + "=Yes";
							ylabels[1] = nameVar2 + "=No"; 
							
							var all_data = [
								{
									data : all_d1,
									label : nameVar2 + "=Yes",
									color : "#98c734"
								}
								, 
								{
									data : all_d2,
									label : nameVar2 + "=No",
									color : "#fc972a",
								}									
							
							];

							var placeholder = $("#placeholder-compare");
				
							var plot = $.plot(placeholder, all_data, {
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
								yaxis :
								{
									panRange: false,
									axisLabel: 'No. of Data Entries',
								},
								
				
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-compare")
								},
								pan: {
									interactive: true
								},
				
							});
								
								
								
								
						var all_data2 = [
								{
									data : all_d3,
									label : nameVar2 + "=Yes",
									color : "#98c734"
								}
								, 
								{
									data : all_d4,
									label : nameVar2 + "=No",
									color : "#fc972a",
								}									
							
							];

							var placeholder2 = $("#placeholder-compare2");
				
							var plot = $.plot(placeholder2, all_data2, {
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
									panRange: [-0.2, times.length],
									axisLabel: ' ',
								},
								yaxis :
								{
									panRange: false,
									axisLabel: 'No. of Data Entries',
								},
								
				
								grid : {
									hoverable : true,
									clickable : true
								},
								legend : {
									noColumns : 0,
									container : $("#legendcontainer-compare2")
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
				
										$("#tooltip").html(nameVar1 + "=Yes , " + item.series.label + " = " + y).css({
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

									$("#tooltip").html(nameVar1 + "=Yes , " + item.series.label + " = " + y).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});		
							
							
							placeholder2.bind("plothover", function(event, pos, item) {
				
								//    if ($("#enablePosition:checked").length > 0)
								{
									var str = "(" + pos.x.toFixed(2) + "," + pos.y.toFixed(2) + ")";
									//$("#hoverdata").text(str);
								}
				
								//if ($("#enableTooltip:checked").length > 0)
								{
									if (item) {
										var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
				
										$("#tooltip").html(nameVar1 + "=No , " + item.series.label + " = " + y).css({
											top : item.pageY + 5,
											left : item.pageX + 5
										}).fadeIn(200);
				
									} else {
										$("#tooltip").hide();
									}
								}
							});
				
							placeholder2.bind("plotclick", function(event, pos, item) {
								if (item) {
									//$("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
									var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);

									$("#tooltip").html(nameVar1 + "=No , " + item.series.label + " = " + y).css({
										top : item.pageY + 5,
										left : item.pageX + 5
									}).fadeIn(200);
				
									plot.highlight(item.series, item.datapoint);
								}
							});		
			
				
										
		    			
		    		}//end if(typeVar1=="binary" && typeVar2=="binary")
		    		else if(typeVar1=="binary" || typeVar2=="binary")
		    		{

							var d1 = [];
							var d2 = [];
							var ylabels = [];
							var xlabels1 = [];
							var xlabels = [];
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
						
							/*
							 * Cumulative visualization of all participants
							 */		    	
							 
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
									count1 = all_variable1_values.length;
									count2 = all_variable2_values.length;
									
									for (var i = 0; i < times.length; ++i) 
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(all_variable1_values[i]);
										avgScore2 = parseFloat(avgScore2) + parseFloat(all_variable2_values[i]);
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
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
				
								}//end if(typeVar2=="score")	
								
								if (typeVar2 == "count") 
								{
									avgTotalLabel = "Average";
									count1 = all_variable1_values.length;
									count2 = all_variable2_values.length;
									
									for (var i = 0; i < times.length; ++i) 
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(all_variable1_values[i]);
										avgScore2 = parseFloat(avgScore2) + parseFloat(all_variable2_values[i]);
									}//end for										
									
									if(count1==0)
									{
										displayedScore1 = 0;
									}
									else{
										displayedScore1 = parseFloat(avgScore1)/parseFloat(count1);
									}	
									if(count2==0)
									{
										displayedScore2 = 0
									}
									else{
										displayedScore2 = parseFloat(avgScore2)/parseFloat(count1);
									}	
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
				
								}//end if(typeVar2=="count")																 
							 }//end if(typeVar1 == "binary") 
							else if (typeVar2 == "binary") 
							{
				
								label2 = nameVar1;
								ylabels[0] = nameVar2 + ": Yes";
								ylabels[1] = nameVar2 + ": No";
				
								var xlabel1 = [];
								xlabel1.push(0.2, nameVar2 + ": Yes");
								xlabels1.push(xlabel1);
				
								var xlabel2 = [];
								xlabel2.push(1.2, nameVar2 + ": No");
								xlabels1.push(xlabel2);
				
								if (typeVar1 == "score") 
								{
									avgTotalLabel = "Average";
									count1 = all_variable1_values.length;
									count2 = all_variable2_values.length;
									
									for (var i = 0; i < times.length; ++i) 
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(all_variable1_values[i]);
										avgScore2 = parseFloat(avgScore2) + parseFloat(all_variable2_values[i]);
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
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
				
								}//end if(typeVar1=="score")	
								
								if (typeVar1 == "count") 
								{
									avgTotalLabel = "Average";
									count1 = all_variable1_values.length;
									count2 = all_variable2_values.length;
									
									for (var i = 0; i < times.length; ++i) 
									{
										avgScore1 = parseFloat(avgScore1) + parseFloat(all_variable1_values[i]);
										avgScore2 = parseFloat(avgScore2) + parseFloat(all_variable2_values[i]);
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
		
									chartCount1 = displayedScore1.toFixed(1);
									chartCount2 = displayedScore2.toFixed(1);
				
								}//end if(typeVar1=="count")									
							 }//end if(typeVar2 == "binary") 							 
							 
							$("#show-comparison-charts").empty();
							$("#show-cumulative-charts").empty();
							$("<div class='col-md-6 row' id='cumulative-left'><h5>My Results:"+label2+"<h5></div>").appendTo("#show-cumulative-charts");
							if(chartCount1 > chartCount2)
							{
								
								
								$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='smallCircle orange1'> <div class='big_white'>"+chartCount2+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
								
							}
								
							if(chartCount1 == chartCount2)
							{
	
								$("<div class='col-xs-6'><div class='bigCircle green1'> <div class='big_white'>"+chartCount1+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
							}
							
							if(chartCount1 < chartCount2)
							{
				
								$("<div class='col-xs-6'><div class='smallCircle green1'> <div class='big_white'>"+chartCount1+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[0]+"</div>").appendTo("#cumulative-left");
								
								$("<div class='col-xs-6'><div class='bigCircle orange1'> <div class='big_white'>"+chartCount2+
								"</div> <span style='color:white; font-size:0.8em'>"+avgTotalLabel+"</span> </div>"+ylabels[1]+"</div>").appendTo("#cumulative-left");
							}
								
							
						/*
						 * Daily Visualization of all participants
						 */
						
						if ($("#content-daily").length != 0)
						{
							$("#content-daily").remove();
						}
										
						if ($("#content-daily").length == 0)
						{
						//alert("content-daily does not exist");
							$("<div id='content-daily' name='content-daily'> <div style='text-align:center; width:80%;'>Results (daily)</div> <div id='legendcontainer-daily'></div> <div id='placeholder-daily' class='demo-placeholder' style='height:400px; width:80%;'></div> <span id='hoverdata'></span> <span id='clickdata'></span> </div>").appendTo("#show-daily-charts");		
						}						
						
						
							/*
							 * Daily data for all participants
							 */								

						for (var i = 0; i < times.length; ++i) 
						{

							d1.push([i, all_variable1_values[i]]);
							d2.push([i+0.45, all_variable2_values[i]]);
						}//end for						
						
						var xlabels = [];
						for (var i = 0; i < times.length; ++i) 
						{
							var latestDate= times[i].toString();
							var parsedDate = $.datepicker.parseDate("dd-mm-yy", latestDate);
							var newDate = (parsedDate.getDate()) + '-' + (parsedDate.getMonth() + 1) + '-' +  parsedDate.getFullYear();				
							
							var xlabel = [];
							//xlabel.push(i+0.3, times[i]);
							xlabel.push(i+0.5, newDate);
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
								xlabel.push(x+0.5, newDate);
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
							/*
							lines : {
								show : true,
							},
							*/
			
							bars : {
									show : true,
									barWidth : 0.43,
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
		    		else if(typeVar1!="binary" || typeVar2!="binary")
		    		{
		    			
		    			
		    		}
		    		
		    		
		    		
		    	}//end else if(variable1_id!=-1 && variable2_id!=-1)
	       
	       
	            
	         }//end if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	     }//end xmlhttp.onreadystatechange = function()
	     
		if(variable1_id!=-1 || variable2_id!=-1)
		{  	
			//alert("experimentId="+experimentId);
			//alert("variable1_id="+variable1_id);
			//alert("variable2_id="+variable2_id);
			//alert("participantId="+participantId);
		 	xmlhttp.open("GET", "http://www.myliferocket.com/ajaxfiles/getExperimentResultsComparison.php?experimentId="+experimentId+"&userId="+userId
		   	+"&friendId="+participantId+"&variable1="+variable1_id+"&variable2="+variable2_id+"&typeVar1="+typeVar1+"&typeVar2="+typeVar2+"&times[]="+times+"&timesPP[]="+timesPP, 
		   	true);		   	
		  	   		 	
		  	xmlhttp.send();				
		}//end if(variable1_id!=-1 || variable2_id!=-1)	     

}//end showAllResults

