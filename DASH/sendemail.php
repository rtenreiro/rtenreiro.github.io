<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = "adm@tenreiros.com";
    $body = 'E-mail: ' .$email." Nombre: ".$name." Mensaje: ".$message;
    $to = 'tenreiroramon@gmail.com'; 
    $subject = 'from tenreiros site'; 
 	$headers = "From: $from\r\n";
	$headers .= "Content-type: text/html\r\n";
    if (mail($to, $subject, $body, $headers)){
        echo "mail send successful";
    }else{
        echo "mail send fail";
    }

?>
