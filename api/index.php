<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['name'])) {
    $errors[] = 'Name is empty';
  } else {
    $name = $_POST['name'];
  }

  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
  }

  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }

  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Fecha: <span style=\"color:#888\">$date</span>
    <br>
    Nombre: <span style=\"color:#888\">$name</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Mensaje: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

    $headers =   'From: Contact Form <contact@mydomain.com>' . "\r\n" .
      "Reply-To: $email" . "\r\n" .
      "MIME-Version: 1.0\r\n" .
      "Content-Type: text/html; charset=iso-8859-1\r\n";

    $to = 'contacto@escala2.es';
    $subject = 'Tienes un nuevo formulario';

    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>