<?php
## Config ##

# Mailing List
$recipient = "example@yourdomainname.com";

# Subject (Subscribe || Remove)
$subject = "Newsletter Subscription";

# Result Page
$location = "success.html";

## Form Values ##

# Sender
$email = $_REQUEST['Email'] ;

# Email Body
$body .= "Email: ".$_REQUEST['Email']." \n";
# add more fields here if required

## Send Message ##

mail( $recipient, $subject, $body, "From: $email" ) or die ("The E-mail Could Not Be Sent.");

## Result Page ##

header( "Location: $location" );
?>