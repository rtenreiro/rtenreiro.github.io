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
<!-- Docs master nav --> 
      <?php
      session_start();
      include('inc/config.php');
      if (isset($_GET['msg'])) {
	 echo "<script type='text/javascript'>alert('Mire su email e introduzca codigo.');</script>";
      }
      if (isset($_POST['username'])) {
	 $uname = filter_data($con, $_POST['username']);
//	 echo $uname;
	 $code = filter_data($con, $_POST['code']);
//	 echo $code;
	 $newpass = md5(filter_data($con, $_POST['newpass']));
//	 echo $newpass;
	 $sql1 = "select * from `user` where username='$uname' and forget_code='$code'";
//	 echo $sql1;
	 $searchs = mysqli_query($con, $sql1);
	 $result = mysqli_num_rows($searchs);
	 if ($result) {
	    $update_sql = "update `user` set password='$newpass' where username='$uname'";
//	    echo $update_sql;
	    $update1 = mysqli_query($con, $update_sql);
	    if ($update1) {
	       echo "<script type='text/javascript'>alert('Password actualizada correctamente')</script>";
//	        header("Location:index.php", true);
	    } else {
	       die(mysqli_error($con));
	    }
	 } else {
	    $login5 = "Invalid user or authentication code.";
	    echo "<script type='text/javascript'>alert('Invalido usuario o error código.')</script>";
	 }
      }
      ?>
	 <div class="hero-unit well">
		  <div class="row" align="center">
		 <div class="col-sm-3 col-sm-offset-5">
<a href="http://www.sed.systems" class="navbar-brand"><img src="images/logo.png" height="70" alt="Logo"></a>
          </div></div><br><br>
		  <div class="row" align="center"> 
            <!--end: Logo -->
	    <form class="login-form" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post" id="reset_pass"> 

	       <p><input type="text" id="username" name="username" required placeholder="Usuario"></p>

	       <p><input type="text" title="code" name="code" id="code" placeholder="Codigo enviado" required  /></p>

	       <p> <input type="password" title="password" id="newpass" name="newpass"  placeholder="Nueva password"  required="required" > </p>
	       <p><input type="submit" title="submit" class="btn btn-success btn-medium" value="Cambiar password" name="submit"></p>
	       <p><?php echo $login5; ?></p>
	    </form>
	 </div>
     </div>
      </div>
      <script src="js/jquery-1.8.2.js"></script>
      <script type="text/javascript">
	 $("#reset_pass").submit(function(event)
	 {
	    var user_name = $('#username').val().trim();
	    var confirm_code = $('#code').val().trim();
	    var new_pass = $('#newpass').val().trim();
	    var pass_pattern = /^((?=.*[a-zA-Z])(?=.*\d)(?=.*[#@%$]).{6,20})$/;
	    if (user_name == '')
	    {
	       alert('Usuario.');
	       $('#username').focus();
	       event.preventDefault();
	       return false;
	    }
	    else
	    if (confirm_code == '')
	    {
	       alert('Código Enviado');
	       $('#code').focus();
	       event.preventDefault();
	       return false;
	    }
	    else
	    if (new_pass == '')
	    {
	       alert('Nueva Contraseña');
	       $('#newpass').focus();
	       event.preventDefault();
	       return false;
	    }
	    else if (!pass_pattern.test(new_pass)) {
	       alert('Error. La contraseña debe tener entre 6 y 20 caracteres, una mayúscula, una minúscula un número y un caracter especial');
	       $('#newpass').focus();
	       event.preventDefault();
	       return false;
	    }
	 });
      </script>
   </body>
</html>
