<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Get Data From Entries
$mailFrom = $_POST["email"];
$name = $_POST["name"];
$message = $_POST["message"];

// Check If Variables Are Empty Or Any Other Error
$exit = false;
if (empty($mailFrom) || empty($name) || empty($message)) {
  $exit = true;
}

if ($exit == false) {
  // Variables To Include On Mail Body
  $mailTo = "contacto@brightai.site";
  $subject = "Nuevo Formulario Completo";
  $txt = "Hola, he rellanado el formulario de su página web con los siguientes datos, contácteme lo antes posible: \r\n\n";
  $txt .= "-Nombre---> " . $name . " \r\n";
  $txt .= "-Correo---> " . $mailFrom . " \r\n";
  $txt .= "-Mensaje---> " . $message . " \r\n\n";
  $txt .= "Enviado el " . date('d/m/Y');

  $headers = "From: " . $mailFrom . " \r\n";
  $headers .= "X-Mailer: PHP/" . phpversion() . " \r\n";
  $headers .= "Mime-Version: 1.0 \r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8";

  // Mail Function
  mail($mailTo, $subject, $txt, $headers);

  echo json_encode(array("sent" => true,));
} else {
  echo json_encode(array("sent" => false,));
}
