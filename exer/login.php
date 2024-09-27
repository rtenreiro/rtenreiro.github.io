<?php
include('inc/config.php');
$email = filter_data($con, $_POST['email']);
$pwd = md5(filter_data($con, $_POST['password']));

$sql = "SELECT * FROM user WHERE email='$email'";
$result = mysqli_query($con, $sql);
$num = mysqli_num_rows($result);
$row = mysqli_fetch_array($result);
$email = $row['email'];
//echo $user_id;
if ($num == 0) {
    echo"<script type='text/javascript'>alert('email no existe o incorrecto');</script>";
    header("Location: indexes.html", true);
} else if ($pwd != $row['password']) {
   echo"<script type='text/javascript'>alert('Contraseña incorrecta');</script>";
   header("Location:indexes.html", true);
} else {
   $dateTime = date("F j, Y, g:i a");    
   //$dateTime->format('Y-m-d H:i:s'); 
   //$dateTime->getTimestamp();
   //$dateTime = '2014';
   $ip = $_SERVER['REMOTE_ADDR'];
   $ch = curl_init(); 
   // set url 
   curl_setopt($ch, CURLOPT_URL, 'https://ipinfo.io/'.$ip.'/json'); 
   //return the transfer as a string 
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
   // $output contains the output string 
   $result = curl_exec($ch); 
   // close curl resource to free up system resources 
   curl_close($ch);  
   $result = json_decode($result, true);
   $ip = (string) $result["ip"];
   $hostname = (string) $result["hostname"];
   $city = (string) $result["city"];
   $country = (string) $result["country"];
   $sql = "INSERT  INTO visita SET email = '$email', dateTime = '$dateTime', Site = 'Tenreiro passw', ip = '$ip', hostname = '$hostname', city = '$city', country = '$country' ";
//    $response['sql'] = $sql;
      $sql_res = mysqli_query($con, $sql);
//      $response['res'] = $sql_res;
       if ($sql_res) {
	 echo"<script type='text/javascript'>alert('You have logout successfully.');</script>";
      } else {
	 $response['success'] = 0;
       echo"<script type='text/javascript'>alert('Error');</script>";}
header("Location:dash/dashs.html", true);
} echo $err;
?>


