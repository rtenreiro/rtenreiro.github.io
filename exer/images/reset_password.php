<?php ob_start(); ?>
<!DOCTYPE html> 
<html lang="es"> 

<body class="bs-docs-home"><a class="sr-only" href="#content">Skip to main content</a> 
<!-- Facebook --> 
<div id="fb-root"></div> 
<!-- Docs master nav --> 
      <?php
      session_start();
      include('config.php');
      if (isset($_GET['msg'])) {
	 echo "<script type='text/javascript'>alert('Mire su email e introduzca código.');</script>";
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
 
      <div class="container-fluid container-main"> 
      <div class="col-sm-12 col-sm-offset-5">
			<a href="http://www.sed.systems" class="navbar-brand"><img src="images/LOGO.png" height="50" alt="logo"/></a> 
	  	</div> <br>
 	  <div class="hero-unit well">
	  <div class="row" align="center"> 
	    <form class="login-form" action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post" id="reset_pass"> 

	       <p><input type="text" id="username" name="username" required placeholder="Usuario"></p>

	       <p><input type="text" title="code" name="code" id="code" placeholder="Codigo enviado" required  /></p>

	       <p> <input type="password" title="password" id="newpass" name="newpass"  placeholder="Nueva Contraseña"  required="required" > </p>
	       <p><input type="submit" title="submit" class="btn btn-success btn-medium" value="Casmbiar Contraseña" name="submit"></p>
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
