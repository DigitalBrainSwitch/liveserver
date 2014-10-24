<?php
/*
Author: Ming Ki Chong (mingki@acm.org)
*/

/*
Send email
*/
function sendMail($mail_receiver, $mail_sender, $mail_subject, $mail_message ){
	//set up email header information
	$mail_headers = "From: " . $mail_sender . "\r\n";
	$mail_headers .= "Reply-To: " . $mail_sender . "\r\n";
	$mail_headers .= "X-Mailer: PHP/" . phpversion();
	$mail_headers .= "MIME-Version: 1.0\r\n";
	$mail_headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

	//send email
	$sent = mail($mail_receiver, $mail_subject, $mail_message, $mail_headers);
	print_r(error_get_last());	

	$sentTime = date('Y-m-d H:i:s') . "\n";
	if($sent){
		echo $sentTime . "\t| Message Sent";
	}else{
		echo $sentTime . "\t| Message Not Sent ";
	}
}

?>
