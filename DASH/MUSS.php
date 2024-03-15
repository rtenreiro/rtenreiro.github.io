<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mus by R Tenreiro </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="juegos, mus, html,javascript">
    <meta name="author" content="Ramon Tenreiro">
    <meta property='og:title' content='Ramon Tenreiro | juegos, mus, html,javascript'/>
    <meta property='og:description' content='juegos, mus, html,javascript'/>
    <meta property='og:url' content='http://www.tenreiros.com'/>
    <meta property='og:site_name' content='Ramon Tenreiro'/>
    <meta property='og:type' content='website'/>
    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <link href="css/docs.css" rel="stylesheet">
    <link href="js/google-code-prettify/prettify.css" rel="stylesheet">
    <link rel="apple-touch-icon-precomposed" href="images/favicon32.png">
    <link rel="shortcut icon" href="images/favicon32.png">
    <style type="text/css">
		tableR {
				width: 80%;
				alignment-adjust:central;
			}
		th, td {
			width: 40%;
			alignment-adjust:central;
			}
        h1, h2, h3, h4, h5, a {
            line-height: 14px;
            alignment-adjust: central;
            text-align:center;
            }
		.card {
			display: table-cell;
			margin:auto auto;
			padding: 4px;
			visibility: hidden;
		}	
		.card.show {
			visibility: visible;
			alignment-adjust:central;
		}
       output {
			color: white;
			text-align:center;
			padding-top: 8px;
            padding-bottom: 8px;
            display:inherit;
            line-height:0;
		}
        .footer {
			background: #330066;;
			color: white;
		    padding: 2px;
            alignment-adjust: central;
            margin-bottom: 2px;
            margin-top: 2px;
            text-align:center;
		}
		#ta {
			background: green;
			color: white;
			text-align:center;
		    padding-left: 10px; 
			padding-right: 10px;
		}
		h1 {
			font-size: 18px;
			}
		.jumbotron {
			padding: 8px;
			
			}	
        body {
        color: white;
        }
		a {
		color: white;
		text-decoration: none;
		}
		#tablero{
		padding:1px;
	    border:1px solid #eee;
			}
		.container{
		margin: auto auto;	
			}
        .flash {
        animation-name: flash;
        animation-duration: 0.7s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
}

@keyframes flash {
    from {color: white;}
    to {color: #AAAAAA;}
}
</style>
<script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-42970867-1']);
      _gaq.push(['_trackPageview']);
     (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
    </script>
<script id="domain" data-name="1637653" type="text/javascript" src="http://www.tenreiros.com/sitespy/js/analytics_js/client.js"></script>

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
       $sql = "INSERT  INTO visita SET dateTime = '$dateTime', Site = 'Tenreiros-Mus', ip = '$ip', hostname = '$hostname', city = '$city', region = '$region', postal = '$postal',  country = '$country', org ='$org' ";
//    $response['sql'] = $sql;
      $sql_res = mysqli_query($con, $sql);
      if ($sql_res) {
      } else {
       echo"<script type='text/javascript'>alert('Error');</script>";}
    }
?>
   </head>
    <body data-spy="scroll" data-target=".bs-docs-sidebar">
<!-- Subhead
================================================== -->
<header class="jumbotron subhead" id="overview">
  <div class="container">
    <h3>Mus by Ramon Tenreiro</h3>
  </div>
</header>
<!-- Main Container (Play)
================================================== -->
<div class="navbar navbar-inverse navbar-fixed-top">
	<div class="navbar-inner">
       <div class="card">
		  <div class="container" align="center">
			<button type="button" class="btn_mini btn-navbar" data-toggle="drop" data-target=".drop">
            	<button class="btn btn_mini btn-warning" id="B1"></button>
                <button class="btn btn_mini btn-success" id="B2"></button>
                <button class="btn btn_mini btn-success" id="B3"></button>    
                <button class="btn btn_mini btn-success" id="B4"></button>
                <button class="btn btn_mini btn-success" id="B5"></button>
			</button>
		</div>
	</div>
	</div>
</div>     
<div class="container" id="ta" align="center" >                     
<div class="accordion-heading"><h4><a class="accordion-toggle" data-toggle="collapse" href="#collapseOne" style="color:#330066">OCULTAR/MOSTRAR MESA.</a><h4><u>Mesa: <output id="dealer_score"></output></u></h4></div>
    <div id="collapseOne" class="accordion-body collapse">
      <div class="accordion-inner" align="center">
       <div class="row-fluid" align="center"> 
            <div class="card"><img id="dealer_card1" width="75" height="104"></div>
            <div class="card"><img id="dealer_card2" width="75" height="104"></div>
            <div class="card"><img id="dealer_card3" width="75" height="104"></div>
            <div class="card"><img id="dealer_card4" width="75" height="104" ></div>
        </div>
        <div class="row-fluid"> 
          <div class="card.show" id="tablero"><h4>Mesa:</h4>              
                <h5><output id="dealer_score2"></output>
                <output id="dealer_score7"></output></h5>
           <h5> <div class="over" id="dealer_over"></div></h5>
           </div> <!-- Card-Show-->
        </div>     
       </div> 
     </div> <!-- accordion-->     
   <div align="center">
            <div class="card.show" id="tablero"><h4><u>TABLERO:</u></h4>
            <h5><output id="game_score"></output></h5>
            <h4 class="flash"><div class="over" id="game_over"></div></h4>
            <h5><div class="over" id="game_over2"></div>
            <div class="over" id="game_over3"></div>
                <output id="dealer_score3"></output>
                <output id="dealer_score4"></output>
                <output id="dealer_score5"></output>
                <output id="dealer_score6"></output></h5>
          <!--  <div class="over" id="game_over4"></div> 
            <div class="over" id="game_over5"></div>
            <div class="over" id="game_over6"></div>
            <div class="over" id="game_over7"></div>
            <div class="over" id="game_over8"></div>
            <div class="over" id="game_over9"></div>
            <div class="over" id="game_over10"></div>
            <div class="over" id="game_over11"></div>
            <div class="over" id="game_over12"></div> -->
   </div>      
  <div class="row-fluid"> 
  <div align="center" >
     <table class="tableR" align="center">         
            <div class="card.show" id="tablero"><h4><u>Jugador: <output id="player_score"></output></u></h4>
            <h5 class="flash"><div class="over" id="player_over4"></div></h5>
            <h5><div class="over" id="player_over2"></div>
            <div class="over" id="player_over5"></div>
            <div class="over" id="player_over3"></div>
            <div class="over" id="player_over"></div></h5>
      </table>
      </div>
      <div align="center" >
            <div class="card"><img id="player_card1" src="images/40/card_back.png" width="75" height="104"></div>
            <div class="card"><img id="player_card2" src="images/40/card_back.png" width="75" height="104"></div>
            <div class="card"><img id="player_card3" src="images/40/card_back.png" width="75" height="104"></div>
            <div class="card"><img id="player_card4" src="images/40/card_back.png" width="75" height="104"></div>

        </div> 
        <div align="center">
            <div class="card">  <input type="checkbox" id="D1" checked>Descartar</div>
            <div class="card">  <input type="checkbox" id="D2" checked>Descartar</div>
            <div class="card">  <input type="checkbox" id="D3" checked>Descartar</div>
            <div class="card">  <input type="checkbox" id="D4" checked>Descartar</div>
        </div>      
     </div>           
       </div><!-- Row Fluid -->
       <audio id="musica" preload="auto">
            <source src="sounds/Kissing in the Rain.mp3" type="audio/mp3">
            <source src="sounds/Kissing in the Rain.wav" type="audio/wav">
        </audio> 
        <audio id="winner" preload="auto">
            <source src="sounds/alegria.mp3" type="audio/mp3">
        </audio>
        <audio id="loser" preload="auto">
            <source src="sounds/mozart.mp3" type="audio/mp3">
        </audio>
        <audio id="shuffle" preload="auto">
            <source src="sounds/shuffle.ogg" type="audio/ogg">
            <source src="sounds/shuffle.mp3" type="audio/mp3">
            <source src="sounds/shuffle.wav" type="audio/wav">
        </audio>
        <audio id="card_drop" preload="auto">
            <source src="sounds/cardSlap.ogg" type="audio/ogg">
            <source src="sounds/cardSlap.mp3" type="audio/mp3">
            <source src="sounds/cardSlap.wav" type="audio/wav">
        </audio>
        <audio id="win" preload="auto">
            <source src="sounds/win.ogg" type="audio/ogg">
            <source src="sounds/win.mp3" type="audio/mp3">
            <source src="sounds/win.wav" type="audio/wav">
        </audio>
        <audio id="lose" preload="auto">
            <source src="sounds/lose.ogg" type="audio/ogg">
            <source src="sounds/lose.mp3" type="audio/mp3">
            <source src="sounds/lose.wav" type="audio/wav">
        </audio>
        <div class="row-fluid"><!--Handlers-->
           <a <button type="button" class="btn btn-info" href="https://es.wikipedia.org/wiki/Mus">Reglas MUS</a>
           <a <button type="button" class="btn btn-danger" href="http://www.tenreiros.com/games2.html">Regresar</a> 
            <input type="checkbox" id="play_sounds" checked>Sonido</input></br>
        </div>  
</div>
</div><!-- Container -->
   
           <!-- Footer
        ================================================== -->
        <footer class="footer">by Ramon Tenreiro &copy; 2013-2018</footer>       
    <!-- Le javascript
    ================================================== -->
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap-transition.js"></script>
    <script src="js/bootstrap-alert.js"></script>
    <script src="js/bootstrap-modal.js"></script>
    <script src="js/bootstrap-dropdown.js"></script>
    <script src="js/bootstrap-scrollspy.js"></script>
    <script src="js/bootstrap-tab.js"></script>
    <script src="js/bootstrap-tooltip.js"></script>
    <script src="js/bootstrap-popover.js"></script>
    <script src="js/bootstrap-button.js"></script>
    <script src="js/bootstrap-collapse.js"></script>
    <script src="js/bootstrap-carousel.js"></script>
    <script src="js/bootstrap-typeahead.js"></script>
    <script src="lib/Mus4.js"></script>
    <script>
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
   })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
   ga('create', 'UA-42970867-1', 'tenreiros.com');
   ga('send', 'pageview');
   </script>
  </body>
</html>
