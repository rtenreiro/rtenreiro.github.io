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
	    <?php
	    session_start();
	    include('inc/config.php');
	    if (isset($_POST['username'])) {
	       $uname = filter_data($con, $_POST['username']);
	       $sql = "SELECT * FROM user WHERE username='$uname'";
	       $result = mysqli_query($con, $sql);
	       $num = mysqli_num_rows($result);
	       $row = mysqli_fetch_array($result);
	       $user_id = $row['user_id'];
	       if ($num == 0) {
		  $err = 'Invalid Username';
		  echo"<script type='text/javascript'>alert('Usuario no existe. Por favor entre uno valido');</script>";
	       } else {		  
		  $chars = "023456789abcdefghijkmnopqrstuvwxyz";
		  $i = 0;
		  $str = "";
		  while ($i <= 10) {
		     $str .= $chars[mt_rand(0, strlen($chars))];
		     $i++;
		  }
		   $forg = $str;
//		  $forg = $i + -17;
//		  echo $forg;
		  $sql = "update user set forget_code='$forg' where username='$uname'";
//		  echo $sql;
		  $search = mysqli_query($con, $sql);
		  if ($search) {

		     $to = $_POST['username'];
		     $from = "avvaferrol@gmail.com";
		     $subject = "Olvido su password ";
//		     echo $to;
//		     echo $from;
		     //begin of HTML message 
		     $message = "Hola &nbsp;" . $uname . " <br/><br/><br/>
         De acuerdo con su petición su password  ha sido eliminada <a href='http://avvaferrol.com/reset_password.php'>AvvAferrol</a>.<br/><br/>   
        &nbsp; Para crear su nueva password utilice su código de confirmación es &nbsp;:&nbsp;" . $forg;
		     //end of message 

		     $headers = "From: $from\r\n";
		     $headers .= "Content-type: text/html\r\n";

		     // now lets send the email. 
		     mail($to, $subject, $message, $headers);
		     $email_error = "send";
//		     $email_error = "Check your mail and get the confirm code";
//		     echo $email_error;
//		     echo "<script type='javascript'>alert(" . $email_error . ");
//			   </script>";
		     header("Location:reset_password.php?msg=$email_error", true);
		  } else {
		     $email_error = "Your server can't support SMTP.";
		     echo "<script type='javascript'>alert(" . $email_error . ");
			   </script>";
		     header("Location:index.php", true);
//		      echo $email_error;
		  }
	       }
//		
	    }
	    ?>

   <!--start: Container -->
	<div class="container-fluid container-main">   
    <div class="hero-unit well">
		 <div class="row" align="center">
	                <a class="brand" href="index.php"><img src="images/logo.png" height="70" alt="Logo" style="margin-top:10"></a>
      <div class="container forgot_pass_container">
	       <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method="post" id="forgot_pass" class="login-form">  
	       <input type="text" id="username" name="username" placeholder="Usuario"><br>
	       <input type="submit" class="btn btn-success btn-medium" id="get_new_pass_btn" value="Enviar">
	    </form>
	 </div>
      </div>
      <script src="js/jquery-1.8.2.js"></script>
      <script type="text/javascript">

	 $("#forgot_pass").submit(function(event)
	 {
	    var user_name = $('#username').val().trim();
	    if (user_name == '')
	    {
	       alert('Por favor entre su usuario.');
	       $('#username').focus();
	       event.preventDefault();
	       return false;
	    }

	 });
      </script>
   </body>
</html>
