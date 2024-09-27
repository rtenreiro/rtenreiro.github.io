<?php
$username='admin';
$password='letmein';
if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']))
{ 
  if ($_SERVER['PHP_AUTH_USER'] == $username && $_SERVER['PHP_AUTH_PW'] == $password)
      echo "Bienvenido: " . $_SERVER['PHP_AUTH_USER'] .
           "Password: " . $_SERVER['PHP_AUTH_PW'];
}
else
{
  header('WWW-Autentificación: Basic realm="Sección restringida"');
  header ('HTTP/1.0 401 No autorizado'); 
  die("Por favor introduzca usuario y password");
}
?>