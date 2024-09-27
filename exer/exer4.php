<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Documento sin título</title>
</head>

<body>
<?php if(!$_POST) { //si no existe $_POST, el formulario se debe mostrar ?> 
<form action="form1.php" method="post"> <label for="nombre">Escriba su usuario</label> 
<input type="text" name="nombre" maxlength="20" /> <br /> <label for="contra">Escriba la contraseña</label> 
<input type="password" name="contra" maxlength="20" /> <br /> 
<input type="submit" value="enviar"/><br /> 
</form> 
<?php 
}//cierre del if 
else{ 
$nombre=$_POST["nombre"]; 
$contra=$_POST["contra"]; 
if($nombre!="Jorge" || 
$contra!="123456") 
{ 
echo "No es válido ese usuario y contraseña <br />"; 
echo "<a href='form1.php'>Volver al formulario</a>"; 
}
else { echo "Entrada correcta"; 
} 
} 
?>
</body>
</html>