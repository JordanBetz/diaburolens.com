<?php
$recaptchaSecret = '6Lc92hMpAAAAALcFReTN3m3k-lLXK8h3FJdwIkVI';
$response = $_POST['g-recaptcha-response'];
$recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$response";
$verify = json_decode(file_get_contents($recaptchaUrl));

if ($verify->success) {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
        $subject = filter_input(INPUT_POST, "subject", FILTER_SANITIZE_STRING);
        $message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);

        $recipient = "diaburolens@gmail.com"; 
        $headers = "From: noreply@diaburo.de\r\n";
        $headers .= "Reply-To: " . $email . "\r\n";
        $email_content = "Name: $name\n";
        $email_content .= "E-Mail: $email\n\n";
        $email_content .= "Nachricht:\n$message\n";

        if (mail($recipient, $subject, $email_content, $headers)) {
            echo "Message sent successfully";
        } else {
            echo "Message could not be sent";
        }
    }
} else {
    echo "CAPTCHA-Überprüfung fehlgeschlagen";
}
?>

