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
</script>
      <style type="text/css">
	 @media only screen and (min-width: 960px) {
	    #select_food_btn {
	       margin-top: 17%;
	    }
	 }

	 #search_result_food{
	    margin-bottom : 2%;
	 }
	 #new_dish_btn_div{
	    float: right;
	    margin-right: 6%;
	 }
	 .tblheadnomargin
	 {
	    margin:0px;
	    width: 94.8%;
	 }
	 .user {
	    font-size: 20px;
	    font-weight: 700;
	    color: RGB(200,200,200);
	    display: inline;
	    float: right;
	 }
      </style>
     </head>
<!-- Docs master nav --> 
<main class="bs-docs-masthead" id="content" role="main"> 
<div class="container-fluid container-show"> 
	 <!-- page title -->
	 <div class="hero-unit well">
		  <div class="row" align="center">
		 <div class="col-sm-3 col-sm-offset-5">
<a href="http://www.sed.systems" class="navbar-brand"><img src="images/logo.png" height="70" alt="Logo"></a>
          </div></div><br><br>
		  <div class="row" align="center"> 
            <!--end: Logo -->
           <form action="login.php" method="post" id="main_login" class="login-form">  
            <input type="text" id="username" name="username" placeholder="Usuario"><br><br>
            <input type="password" id="password" name="password" placeholder="Contraseña"><br><br>
            <input type="submit" class="btn btn-success btn-medium" value="Entrar">&nbsp;&nbsp;o&nbsp;&nbsp;
            <input type="button" class="btn btn-success btn-medium" onclick="window.location.assign('register.php');" 
			value="Crear Nuevo"><br><br>
			<input type="button" class="btn btn-default-inverse btn-xs" onclick="window.location.assign('forgot_pass.php');" 
			value="Cambiar Contraseña">  
 </form>
		</div>
        <!--end: Row -->
    </div>
</div>
</div>
    <!--end: Container-->			
  <!--Footer  -->
   <footer class="bs-docs-footer container-footer" role="contentinfo">
      <div class="container"><!--
	 <div class="bs-docs-social">
	    <ul class="bs-docs-social-buttons">  
	       <li><div class="fb-like" data-href="https://www.facebook.com/SimplyEasyDiet" data-layout="button" data-action="recommend" data-show-faces="true" data-share="true"></div></li>
	       <li><a href="https://plus.google.com/105392150877893100881" class="btn btn-outline-inverse btn-xs" rel="publisher">Google+</a></li>  
	       <li><a href="https://www.youtube.com/channel/UCNNbz1HjrTQ8dgyQBhEIXMA/feed" class="btn btn-outline-inverse btn-xs"  rel="YouTube">Youtube</a></li> 
	       <li><a href="http://www.linkedin.com/pub/simplyeasyweb-llc/99/449/814" class="btn btn-outline-inverse btn-xs" rel="Linkedin">Linkedin</a></li>
	    </ul>-->
	 </div>
	 <ul class="bs-docs-footer-links muted" style="color: white">
	    <div class="row" align="center">Versión .1.1
	   <!-- <li>&middot;</li>
	    <li><a href="http://www.sed.systems" class="btn btn-outline-inverse btn-xs">Inicio</a></li>
	    <li>&middot;</li>
	    <li><a href="my_food.php" class="btn btn-outline-inverse btn-xs">Mi Comida</a></li>
	    <li>&middot;</li>
	    <li><a href="my_exercise.php" class="btn btn-outline-inverse btn-xs">Mi Actividad</a></li>
	    <li>&middot;</li>
	    <li><a href="my_exercise.php" class="btn btn-outline-inverse btn-xs">Mi Peso</a></li>
	    <li>&middot;</li>
	 </ul><br><br> -->
	 Ramon Tenreiro 2018 Copyright &copy; SED.systems SL - Todos los derechos reservados
      </div>
   </footer>

</body>
</html>
