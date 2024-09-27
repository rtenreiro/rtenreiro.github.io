<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
<?php 
echo isset($x); //escribe falso, o sea no escribe nada 
$x=12; 
echo isset($x); //devuelve verdadero, escribe 1 
?>
</body>
</html>