
<?php
        
                                        
    $con = mysqli_connect("tenreiroscom.ipagemysql.com","rtenreiro",'aA1111',"exer");// Check connection
    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
    
    function filter_data($con,$data)
    {
        return strip_tags(mysqli_real_escape_string($con,trim($data)));
    }
  
    
?> 