<?php
	//Assign form names to PHP variables
	$emailTo = "isael-21@hotmail.com";
    $subject = $_POST["subject"];
    $body = $_POST["txt-area"];
    $headers = "From: ".$_POST["email-box"];

	//Send email and show success/failure message
    if (mail($emailTo, $subject, $body, $headers)) {
        echo "The email was sent successfully";
    } else {
        echo "The email could not be sent.";
    }
?>