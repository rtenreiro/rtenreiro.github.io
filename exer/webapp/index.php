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
<link href="../css/bootstrap.css" rel="stylesheet"> 
<link href="../css/bootstrap-theme.css" rel="stylesheet"> 
<link href="../css/docs.css" rel="stylesheet"> 
<link href="../css/bootstrap-responsive.css" rel="stylesheet">
<link href="../css/style.css" rel="stylesheet">
</head>
<!-- Docs master nav --> 
<main class="bs-docs-masthead" id="content" role="main"> 
<div class="container-fluid container-show"> 
	 <!-- page title -->
      <?php
      include('app_header.php');
      $rname = $_SESSION['r_name'];
      $uname = $_SESSION['user_name'];
      if ($uname == '') {
	 header("Location:../index.php");
      }
      ?> 
	  <!-- start: Container -->
    <div class="container">
	 <div class="hero-unit well">
	 <h3 id="app-page-title"><b>Mis Tareas</b>
	       <div id="r_name" class="name"><?php echo $rname; ?></div></h3>
	 </div>
		  <a href="my_food.php" class="btn btn-success btn-medium regi-form-btn">Mi Comida</a>
		  <a href="my_exercise.php" class="btn btn-success btn-medium regi-form-btn">Mi Actividad</a>
		  <a href="my_weight.php" class="btn btn-success btn-medium regi-form-btn">Mi Peso</a>      
	 </div>
  </div>
</div>
      <!-- end: Container  -->	
      <!--Footer  -->
      <footer class="bs-docs-footer container-footer" role="contentinfo">
	 <div class="container">
	   
	    <p>Diseñado y creado por  Ramon Tenreiro 2018 Copyright &copy; SED.systems SL All rights reserved</p>
	 </div>
      </footer>
   </div>
   <!-- start: Java Script -->
   <!-- Placed at the end of the document so the pages load faster -->
   <script src="../js/jquery-1.8.2.js"></script>
   <script src="../js/bootstrap.js"></script>
   <script src="../js/flexslider.js"></script>
   <script src="../js/carousel.js"></script>
   <script src="../js/jquery.cslider.js"></script>
   <script src="../js/slider.js"></script>
   <script defer src="../js/custom.js"></script>
   <!-- end: Java Script -->
</body>
</html>
<?php ob_get_flush(); ?>