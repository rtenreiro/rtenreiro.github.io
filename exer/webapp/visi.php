<!DOCTYPE html>
<html lang="es"> 
<head> 
<!-- Meta, title, CSS, favicons, etc. --> 
<meta charset="utf-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<meta name="keywords" content="Dieta, gestion de peso, control de calorias, dieta saludable, salud, bajar de peso, adelgazar, seguimiento de calorias, Nutricion, Contador de calorias, Plan de comidas, control de ejercicios, seguimiento de ejercicio, dieta diaria, ejercicio recomendado, tablas de calorias, calorias de los alimentos, comer saludable, Salud, ejercicio y dieta, sed.systems"/> <meta name="description" content=" Simple Ejercicio y Dieta es un sistema para facilitar una dieta equilibrada y motivar a un ejercicio saludable. Use SED.Systems para perder peso, para seguir una dieta saludable y comenzar a vivir de forma más sana. Analiza y controla tu dieta y ejercicio de una forma facil y sencilla." /> 
<meta name="author" content="Ramon Tenreiro"> 
<meta property="og:title" content="SED.Systems es una aplicacion para controlar la dieta y el ejercicio que hacemos, através del uso de la tecnologia, y nos facilita realizar los pequeños cambios que necesitamos para disfrutar de una vida mas sana"/> 
<meta property="og:description" content="SED.System es una plataforma que te ayuda a controlar tu dieta y tu actividad física."/> 
<meta property='og:url' content='http://www.sed.systems'/> 
<meta property="og:image" content="http://www.SED.SYSTEMS/images/SEDLOGObar.png"/> 
<meta property='og:site_name' content='SED.systems'/>
<meta property='og:type' content='website'/>
<title> SED.System | Mi Peso </title> 
<!-- Favicons --> 
<link rel="apple-touch-icon-precomposed" href="../../images/favicon.png"> 
<link rel="shortcut icon" href="../../images/favicon.png"> 
<!-- Le styles -->
<link href="../css/bootstrap.css" rel="stylesheet"> 
<link href="../css/bootstrap-theme.css" rel="stylesheet"> 
<link href="../css/docs.css" rel="stylesheet"> 
<link href="../css/bootstrap-responsive.css" rel="stylesheet">
<link href="../css/style.css" rel="stylesheet">
<style type="text/css">
	 .user {
	    font-size: 20px;
	    font-weight: 700;
	    color: RGB(0,194,196);
	    display: inline;
	    float: right;
	 }
      </style>
<script src="https://apis.google.com/js/platform.js"></script> 
</head> 
<body> 
<!-- Facebook --> 
<div id="fb-root"></div> 
<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=455006647959491&version=v2.0"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));</script> 
<!-- Docs master nav --> 
      <script src="https://apis.google.com/js/platform.js"></script>  
      <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-51897835-3', 'auto');
  ga('send', 'pageview');
</script> 

<div class="hero-unit">
	    <div class="row">
	       <li class="span12">
		  <div class="form-group">
		     <div>			         	  
		     <h3 align="center" style="color:#00c2c4">Visitas</h3>
			<div class="form-group"></table></div>
			<table id="recetas" class="sortable history_tbl table table-hover table-bordered table-striped table-responsive">
			<tbody>
<?php 
include('app_header.php');
$sql = "SELECT * FROM visita";
$rece = mysqli_query($con, $sql);
while ($arr = mysqli_fetch_array($rece)){
	//$receta = $arr[user_id] + $arr['dateTime'] + $arr['Site'] + $arra['ip'] + $arr['hostname'] + $arr['country'];
	//$receta = $arr['country'];
   $receta = $arr['user_id'] . ' | ' .$arr['dateTime'] . ' | '.$arr['name'] .' | ' . $arr['Site'] .' | ' . $arra['ip'] .' | ' . $arr['hostname'] .' | ' . $arr['country'];
 ?>
			     <tr>
   				 <td><?php echo $receta;?></td>
   			     </tr>
<?php }    ?>
   			</tbody>
   			</table>		
		     </div>
			</div>
           </li>
</div>
</div>
</body>











?>
