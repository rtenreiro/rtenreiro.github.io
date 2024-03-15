<?php                                                 
    $con = mysqli_connect("tenreiroscom.ipagemysql.com","tenreiror",'tenrBD021158',"tenreiros");// Check connection
    if (mysqli_connect_errno())
    {
         echo"<script type='text/javascript'>alert('Error Conexion Base datos');</script>";
    }
  // set the default timezone and date
   date_default_timezone_set('Europe/Madrid');
   $dateTime = date('Y-m-d H:i');
    if (!empty($_SERVER['HTTP_CLIENT_IP']))//check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    else { 
    $ip = $_SERVER['REMOTE_ADDR'];}
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
   $country = (string) $result["country"];
   $city = (string) $result["city"];
   $region = (string) $result["region"];
   $postal = (string) $result["postal"];
   $org = (string) $result["org"];
    if(!empty($city))//check city from share internet
    {
       $sql = "INSERT  INTO visita SET dateTime = '$dateTime', Site = 'CV 2021RT', ip = '$ip', hostname = '$hostname', city = '$city', region = '$region', postal = '$postal',  country = '$country', org ='$org' ";
//    $response['sql'] = $sql;
      $sql_res = mysqli_query($con, $sql);
      if ($sql_res) {
      } else {
       echo"<script type='text/javascript'>alert('Error');</script>";}
    }
?>