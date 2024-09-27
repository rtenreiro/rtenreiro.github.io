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
<div class="container-fluid container-show" align="center"> 
<div class="hero-unit well">
		  <div class="row" align="center">
		 <div class="col-sm-3 col-sm-offset-5">
<a href="http://www.sed.systems" class="navbar-brand"><img src="../images/logo.png" height="70" alt="Logo"></a>
          </div></div><br><br>
		  <div class="row" align="center"> 
   <form action="upload.php" method="post" enctype="multipart/form-data">Seleccione Fichero para subir:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>
</div>
</div>
<?php
$target_dir = "../files/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 5000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif"&& $imageFileType != "pdf" ) {
    echo "Sorry, only JPG, JPEG, PNG, GIF & PDF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
        echo header("Location:index.php");
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
</div>
</body>
</html>