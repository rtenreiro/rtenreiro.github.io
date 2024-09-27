<?php
include('config.php');
    function filter_data($data)
    {
        return strip_tags(mysqli_real_escape_string($con,trim($data)));
    }
?> 