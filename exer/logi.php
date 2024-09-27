<?php
ob_start();
session_start();
include('inc/config.php');
//include('inc/functions.php');
$uname = filter_data($con, $_POST['username']);
$pwd = md5(filter_data($con, $_POST['password']));

$sql = "SELECT * FROM user WHERE username='$uname'";
$result = mysqli_query($con, $sql);
$num = mysqli_num_rows($result);
$row = mysqli_fetch_array($result);
$user_id = $row['user_id'];
$name = $row['name'];
//echo $user_id;
if ($num == 0) {
   $err = 'Invalid Username';
   header("Location:index.php?invalid_username=ok", true);
} else if ($pwd != $row['password']) {
   $err = 'Invalid Password';
    header("Location:index.php?invalid_username=ok", true);
} else {
//   $err = 'success';
   $_SESSION['user_name'] = $uname;
   $_SESSION['user_id'] = $user_id;
   $dateTime = date("F j, Y, g:i a");    
   //$dateTime->format('Y-m-d H:i:s'); 
   //$dateTime->getTimestamp();
   //$dateTime = '2014';
   $ip = $_SERVER['REMOTE_ADDR'];
   $ch = curl_init(); 
   // set url 
   curl_setopt($ch, CURLOPT_URL, 'http://ipinfo.io/'.$ip.'/json'); 
   //return the transfer as a string 
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
   // $output contains the output string 
   $result = curl_exec($ch); 
   // close curl resource to free up system resources 
   curl_close($ch);  
   $result = json_decode($result, true);
   $ip = (string) $result["ip"];
   $hostname = (string) $result["hostname"];
   $country = (string) $result["country"];
   $city = (string) $result["city"];
   $region = (string) $result["region"];
   $postal = (string) $result["postal"];
   $org = (string) $result["org"];
   $sql = "INSERT  INTO visita SET user_id = '$user_id', name = '$name', dateTime = '$dateTime', Site = 'avvaferrol.com', ip = '$ip', hostname = '$hostname', city = '$city', region = '$region', postal = '$postal',  country = '$country', org ='$org' ";
//    $response['sql'] = $sql;
      $sql_res = mysqli_query($con, $sql);
//      $response['res'] = $sql_res;
       if ($sql_res) {
	 echo"<script type='text/javascript'>alert('You have logout successfully.');</script>";
      } else {
	 $response['success'] = 0;
       echo"<script type='text/javascript'>alert('Error');</script>";}
header("Location:webapp/index.php", true);
} echo $err;
?>
<?php ob_end_flush();?>
