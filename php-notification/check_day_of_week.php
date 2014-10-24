<?php
/*
Author: Ming Ki Chong (mingki@acm.org)
*/

//Test statement
//echo (IsTodayWeekday()) ? "Weekday" :  "Weekend";

/*
Functions to check if now (today) is a weekday or a weekend
*/
function IsTodayWeekday(){
	return IsWeekday(getDayOfWeek("now")); 
}

/*
Return true if $dayOfWeek is 1=Monday,...,5=Friday
*/
function IsWeekday($dayOfWeek){
	return ($dayOfWeek > 0 && $dayOfWeek < 6); 
}

/*
Convert dateString to a numerical representation of the day of the week 
0=Sunday, 1=Monday, ..., 6=Saturday
*/
function getDayOfWeek($dateString){
	return date("w", strtotime($dateString)); 
}

?>