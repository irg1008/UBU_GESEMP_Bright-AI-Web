<?php
/*
* @ Author: Iván Ruiz Gázquez
* @ Timestamp: 11:54 - 9/27/2019
*/

// If submit button clicked
if (isset($_POST["submit"])) {
  $location = "../contacto/"; /*../html/es/contacto*/
  $exit = "false";
  // Get Data From Entries
  $mailFrom = $_POST["mail"];
  $name = $_POST["name"];
  $tel = $_POST["tel"];
  $message = $_POST["message"];
  $captcha = $_POST["g-recaptcha-response"];
  
  // Check If Variables Are Empty Or Any Other Error
  if (empty($mailFrom) || empty($name) || empty($tel) || empty($message)) {
    $location = $location."?entries=empty";
    header("Location: ".$location);
    $exit = "true";
  }
  // Check If Email Is Valid
  if (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
    $location = $location."?&invalidMail";
    header("Location: ".$location);
    $exit = "true";
  }
  else {
    $location = $location."?&validMail=$mailFrom";
    header("Location: ".$location);
  }
  // Check If Name Is Valid
  if (!preg_match("/^[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]{2,}+$/",$name)) {
    $location = $location."&invalidName";
    header("Location: ".$location);
    $exit = "true";
  }
  else {
    $location = $location."&validName=$name";
    header("Location: ".$location);
  }
  // Check If Phone Is Valid
  if(!preg_match("/^[0-9]{9,}+$/", $tel)) {
    $location = $location."&invalidTel";
    header("Location: ".$location);
    $exit = "true";
  }
  else {
    $location = $location."&validTel=$tel";
    header("Location: ".$location);
  }
  // Check if reCaptcha has been passed
  if(isset($captcha)) {
      $secret = '6Ld4ncYUAAAAAGnm0Y7u3dS_yHzWQGC374KftgEj';
      $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['g-recaptcha-response']);
      $responseData = json_decode($verifyResponse);
      
      if(!$responseData->success) {
          $location = $location."&invalidCap";
          header("Location: ".$location);
          $exit = "true";
      }
  }
  $location = $location."&text=$message";
  header("Location: ".$location);

  if ($exit == "false") {
    // Variables To Include On Mail Body
    $mailTo = "contacto@escala2.es";

    $subject = "Nuevo Formulario Completo";

    $txt = "Hola, he rellanado el formulario de su página web con los siguientes datos, contácteme lo antes posible: \r\n\n";
    $txt .= "-Nombre---> ".$name." \r\n";
    $txt .= "-Correo---> ".$mailFrom." \r\n";
    $txt .= "-Tel---> ".$tel." \r\n\n";
    $txt .= "-Mensaje---> ".$message." \r\n\n";
    $txt .= "Enviado el " . date('d/m/Y');

    $headers = "From: ".$mailFrom." \r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . " \r\n";
    $headers .= "Mime-Version: 1.0 \r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    // Mail Function
    mail($mailTo, $subject, $txt, $headers);
    // Header Confirmation Function
    header("Location: ../html/es/contacto/?mail=send");
  }
}
?>
