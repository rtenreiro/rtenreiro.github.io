<?php ob_start();
session_start();
?>
<?php include('../inc/config.php'); ?>
<?php
//error_reporting(E_ERROR);

//      echo $u_id;
$uname = $_SESSION['user_name'];
      if ($uname == '') {
	 ?>
<script>
   window.open("../index.php","_self");
</script>   
	 <?php
	 // header function is not working here
	 	 //header('Location:http://simplyeasyweb.com/simplyeasydiet/incrust/index.php');
      } else {
   $uname = $_SESSION['user_name'];
   $rname = $_SESSION['r_name'];
   $u_id = $_SESSION['user_id'];
   //echo 'logged in';
   echo "<input type='hidden' id='u_id' value= '$u_id'/><input type='hidden' id='u_name' value= '$uname'/><input type='hidden' id='r_name' value= '$rname'/>";
}
?>
<!--start: Header -->
<header "Content-Type: text/html;charset=utf-8">
		 <!--start: Navigation -->
<div class="navbar navbar-inverse navbar-fixed-top">     
	<div class="container">
    <div class="navbar-header">
    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    </button>    	
    <ul class="nav navbar-nav">	
		<li><img src="../images/logo.png" height="50" alt="Logo"></li>
		<li id="home-menu"><a href="upload.php">UploadFile</a></li>
		<li id="home-menu"><a href="my_profile.php">Mail</a></li>
        <li id="home-menu"><a href="index.php">xxx</a></li>
		<li id="app-menu"><a href="my_store.php">xxxx</a></li>
		<li id="business-menu"><a href="log_out.php">Salir</a></li>
	</ul>
</div>
</div>
</div>
</header>
<!--end: Header-->

	 
