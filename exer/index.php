<?php ob_start(); ?>
<!DOCTYPE html> 
<html lang="es"> 
<head> 
<!-- Meta, title, CSS, favicons, etc. --> 
<meta charset="utf-8"> 
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<meta name="keywords" content=""/> 
<meta name="description" content=""/> 
<meta name="author" content="Ramon Tenreiro"> 
<meta property="og:title" content=""/> 
<meta property="og:description" content=""/> 
<meta property='og:url' content='http://www.avvaferrol.com'/> 
<meta property="og:image" content="http://www.avvaferrol.com/images/LOGO.png"/> 
<meta property='og:site_name' content='avvaferrol.com'/>
<meta property='og:type' content='website'/>
<title> AvvaFerrol | Ramon Tenreiro </title> 
<!-- Favicons --> 
<link rel="apple-touch-icon-precomposed" href="../images/favicon.png"> 
<link rel="shortcut icon" href="../images/favicon.png"> 
<!-- Le styles -->
<link href="css/bootstrap.css" rel="stylesheet"> 
<link href="css/bootstrap-theme.css" rel="stylesheet"> 
<link href="css/docs.css" rel="stylesheet"> 
<link href="css/bootstrap-responsive.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
</head> 
<body class="bs-docs-home"><a class="sr-only" href="#content">Skip to main content</a> 
    
      <?php include('header.php'); ?>
      <?php
      if ($_GET['logout'] == 'yes')
	 echo"<script type='text/javascript'>alert('Has salido correctamente.');</script>";
      ?>
      <?php
      if ($_GET['invalid_username'] == 'ok') {
	 echo"<script type='text/javascript'>alert('Por favor, introduzca un usuario o password correcto.');</script>";
	 ?>
      <style type="text/css">
   	 .dropdown-menu {
   	    display: block !important;
   	 }
         </style>
      <?php }
      ?>
      <?php
      if ($_GET['registered'] == 'success') {
	 echo "<script type='text/javascript'>alert('Te has registrado correctamente.');</script>";
     header("Location:example.php", true);
	 ?>
<div class="container-fluid container-main"> 
     <div class="col-sm-4 col-sm-offset-2">
         <div id="login-link"><a href="login.php">Click para entrar</a></div>
     </div></div>
     <?php }
      ?>
      <script type="text/javascript">
	 $("#main_login").submit(function(event)
	 {
	    if ($('#username').val().trim() == '')
	    {
	       alert('Entre su Usuario.');
	       $('#username').focus();
	       event.preventDefault();
	    }
	    else if ($('#password').val().trim() == '')
	    {
	       alert('Entre su Contraseña');
	       $('#password').focus();
	       event.preventDefault();
	    }
	 });
      </script>
   </body>
</html>