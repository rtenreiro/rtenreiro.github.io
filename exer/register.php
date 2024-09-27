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
      <?php include('inc/config.php'); ?>
	    <?php
	    if (isset($_POST['r-username'])) {
	       $uname = filter_data($con, $_POST['r-username']);
           $rname = filter_data($con, $_POST['r-name']);
	       $pass = filter_data($con, $_POST['r-password']);
	       $pwd = md5(filter_data($con, $_POST['r-password']));
	       echo "username : " . $uname;
           echo "rname : " . $rname;
	       echo "<br>password : " . $pass;
	       echo "accepted go to insert";

//	       insert into user table
	       $insert_query = "INSERT INTO user set username = '$uname', rname = '$rname', password = '$pwd'";
	       echo $insert_query;

	       $res = mysqli_query($con, $insert_query);
	       echo "result : " . $res;

	       if ($res) {
		  $user_id_sql = "SELECT * FROM user WHERE username='$uname'";
		  echo "<br/> user_id sql : " . $user_id_sql;

		  $user_id_result = mysqli_query($con, $user_id_sql);
		  $row = mysqli_fetch_array($user_id_result);

		  $_SESSION['user_id'] = $row['user_id'];
		  $user_id = $_SESSION['user_id'];
		  echo "<br/> user_id : " . $user_id;

		  $_SESSION['user_name'] = $row['username'];
          $_SESSION['r_name'] = $row['rname'];

		  $date = date("Y-m-d");
		  echo "<br/> date : " . $date;

		  echo "<script type='text/javascript'>alert('Te has registrado correctamente');</script>";
		   header("Location:index.php?registered=success", true);
	       }
	    }
	     ?>
	 <div class="hero-unit well">
		  <div class="row" align="center">
		 <div class="col-sm-3 col-sm-offset-5">
<a href="http://www.sed.systems" class="navbar-brand"><img src="images/logo.png" height="70" alt="Logo"></a>
          </div></div><br><br>
		  <div class="row" align="center"> 
            <!--end: Logo -->

	    <!--registration form-->
	    <form action="<?php echo htmlentities($_SERVER['PHP_SELF']); ?>" method = "post" id = "main-register" class = "register-form">
		  <div id="register-form-div">
		    
		     <table id = "regi-table"> 
             <tr>
               <td id = "regi-title" width="50%">Registro Usuario</td>
            </tr>
			<tr>
			   <td> <label> Usuario: <font color="#FF0000">*</font></label></td>
			   <td><input class='regi-form-input' type="text" value = '<?php echo $uname; ?>' id="r-username" name="r-username" placeholder="Usuario"></td>
			</tr>
			<tr>
			   <td> <label> Nombre: <font color="#FF0000">*</font></label></td>
			   <td><input class='regi-form-input' type="text" value = '<?php echo $rname; ?>' id="r-name" name="r-name" placeholder="Nombre"></td>
			</tr>
			<tr>
			   <td><label> Contraseña: <font color="#FF0000">*</font></label></td>
			   <td><input class='regi-form-input' type="password" id="r-password" name="r-password" placeholder="Contraseña"></td>
			</tr>
			<tr>
			   <td><label> Confirme Contraseña: <font color="#FF0000">*</font></label></td>
			   <td><input class='regi-form-input' type="password" id="r-cpassword" name="r-cpassword" placeholder="Contraseña"></td>
			</tr>
			<tr>
			   <td></td>
			   <td><input type="button" id="next" class="btn btn-success btn-medium regi-form-btn" value="Continuar"><input type="reset" id='cancel-btn' class="btn btn-success btn-medium regi-form-btn" value="Cancelar"></td>
			</tr>
		     </table>
		  </div>

		  <!--Display after clicking next button Terms and conditions-->
		  <div id="terms-conditions" style="display:none">
		     <div id = "terms-title">Terminos de Uso</div>
		     <div id="term-coditions-desc" align="justify" style="padding:5;">
<li>Si descarga el software haciendo clic en el botón "Acepto", y / o utiliza el software incluido o cualquier documentación (Software), usted  esta aceptando los Terminos y Condiciones de este Acuerdo (Acuerdo), entre usted (usted) y SED.systems SL (SED) jy se considera vinculado jurídicamente. Si usted no está de acuerdo con los Términos y Condiciones de este Acuerdo, usted debe desinstalar el software y no usarlo.
			</li><li>Concesión de licencia. Sujeto a los términos y condiciones de este Acuerdo, SED le concede a usted una licencia personal, no transferible y no exclusiva para instalar y utilizar el Software en un solo dispositivo únicamente con la finalidad de su uso personal y no comercial. SED se reserva el derecho de suspender la totalidad o parte del Software con o sin previo aviso en cualquier momento. Todos los derechos no expresamente concedidos en virtud del presente acuerdo están reservados por SED. SED y sus licenciantes conservan todos propiedad del Software, incluyendo, pero no a modo de limitación, cualquier imagen, algoritmos, fotografías, animaciones, vídeo, audio, música y texto incorporados en el Software.
			   </li><li> Restricciones de uso. Usted no podrá sublicenciar, distribuir, alquilar, prestar o de otra manera transmitir el Software o cualquier parte de el. Usted no podrá modificar el Software  o incorporarlo en todo o en parte en cualquier otro producto derivado o crear trabajos.Usted no podrá eliminar cualquier derecho de autor, marca registrada, derechos propietarias, renuncia o aviso previo. El software no está diseñado ni destinada a ser utilizada en cualquier situación en la que el fallo del Software podría provocar la muerte o lesiones corporales de cualquier tipo a cualquier persona.
			   </li><li> Asunción de Riesgos. Usted reconoce y acepta que ningún consejo médico es proporcionado a través del Software y que está utilizando el Software bajo su propio riesgo. El software está diseñado sólo para uso informativo y no se puede utilizar en cualquier otro uso.Usted esta de acuerdo y acepta que SED  no incurrirá en ninguna responsabilidad legal ni moral por el uso que usted o cualquier otra persona haga dell Software o de cualquier información producida o contenida por el Software.
			   </li><li> Datos. Al introducir o entregar datos o contenidos con el Software, usted representa y garantiza automáticamente a SED que el propietario de dicho contenido ha concedido expresamente libre de regalías, perpetua, irrevocable, mundial licencia no exclusiva para usar, reproducir, crear trabajos derivados de SED, modificar, publicar, editar, traducir, distribuir, ejecutar y mostrar los datos o contenidos en cualquier soporte o medio, o de cualquier forma, formato o foro ahora conocidos o por desarrollar. SED pueden combinar cualquier información que usted proporciona con la información de otros usuarios crear datos agregados para mostrar en el sitio web. Los datos agregados no contienen ninguna información que pueda ser utilizada para contactar con usted o identificarlo.
			   </li><li> Renuncia de Garantía. SED ofrece el Software a usted "tal cual" con todos sus defectos, y sin garantía de ningún tipo, expresa, estatutaria, implícita o de otro tipo, incluyendo sin limitación cualquier garantía de comerciabilidad, adecuación a un propósito particular, o no infracción. SED renuncia expresamente a todas las representaciones o garantía de que la información proporcionada por el software es exacta, y usted no puede confiar en dicha información o consejos.
			   </li><li>Limitación de Responsabilidad. En ningún caso SED o sus licenciantes serán responsables ante usted por cualquier daño especial, indirecto, punitivo, ejemplar, incidentales o indirectos de cualquier tipo, daños personales / homicidio culposo, incluyendo, sin limitación. El costo de los daños derivados de la cobertura de pérdida de datos, utilizar, beneficios o buena voluntad. Haya o no SED advertido de la posibilidad de tal pérdida, sin importar su causa y bajo cualquier teoría de responsabilidad que surja de este acuerdo. Limitaciones  se aplicarán sin perjuicio de la falla del propósito esencial de cualquier remedio limitado. Usted acepta que la responsabilidad máxima total que surja de este acuerdo y / o su uso o posesión del Software, incluyendo sin limitación cualquier reclamación por agravio (incluyendo negligencia), contractuales, incumplimiento de garantía, responsabilidad estricta o de otra manera, y por cualquier y todas las demandas combinadas , no excederá de la cuota que pagó por licencia para el Software.Al utilizar el Software usted acepta no inculpar ni exigir responsabilidades a SED, sus licenciarios, directores, empleados, afiliados, agentes,  representantesr  sobre todas las pérdidas, daños, responsabilidades, reclamaciones, demandas, juicios, o causas de acción (incluyendo honorarios y costos razonables de abogados) que surja del uso o mal uso del Software.
			   </li><li> Terminación y cancelación. Usted o SED puede rescindir o cancelar su uso y / o acceso al software en cualquier momento, con o sin causa. Usted entiende y acepta que no acceder  ni usar el Software es su único derecho y recurso con respecto a cualquier disputa con SED.
			   </li><li>  General. Este acuerdo reemplaza a todas las propuestas, oral o escritas, a todas las negociaciones, conversaciones, discusiones y todo supuesto pasado de tratar entre usted y SED en  relación con el Software o las condiciones de su licencia. Las Modificaciones de este acuerdo podrán ser incorporadas en el Software y el uso continuado suyo implica la aceptación de los Términos de Uso modificados. En el caso de que cualquier cláusula de este Acuerdo sea considerada por un tribunal de jurisdicción competente como inválida, los términos restantes seguirán vigentes y se aplicará en la medida máxima permitida por la ley. Ninguna renuncia a cualquier derecho o la obligación contenida en el presente documento se dará, excepto por escrito firmado por SED. Este  Acuerdo redundará en beneficio de las partes y sus sucesores y cesionarios Este Acuerdo se regirá e interpretará de acuerdo con las leyes de España, como si se realiza en su totalidad dentro del Estado y sin dar efecto a los principios de conflicto de derecho.                      
			   </li></ol>
		     </div>
		     <input id="accept-check" type="checkbox" />&nbsp;&nbsp; <label style="display: inline"> He leido y acepto</label>
		     <br/>
		     <input type="submit" disabled="disabled" id="accept-btn" class="btn btn-success btn-medium term-conditions-btn" value="Aceptar"/>
		     <input type="button" id='refuse-btn' class="btn btn-success btn-medium term-conditions-btn" value="No Acepto"/>
		  </div>
		  </div>
	     </form>
	 </div>
      </div>
      <!-- start: Footer -->
      <div id="footer">
 </div>
	 <ul class="bs-docs-footer-links muted" style="color: white">
	    <div class="row" align="center">Versión .1.1 - Ramon Tenreiro - 2018 - Copyright &copy; SED.systems SL - Todos los derechos reservados
      </div>
   <!-- Placed at the end of the document so the pages load faster -->
   <script src="js/jquery-1.8.2.js"></script>
   <script src="js/bootstrap.js"></script>
   <script src="js/flexslider.js"></script>
   <script src="js/carousel.js"></script>
   <script src="js/jquery.cslider.js"></script>
   <script src="js/slider.js"></script>
   <script defer src="js/custom.js"></script>
   <!-- end: Java Script -->
   <script type="text/javascript">

    $(document).ready(function() {

	 $('#accept-check').click(function() {
//	    alert("clicked");
	    if ($('#accept-check').attr('checked')) {
//	       alert("checked");
	       $("#accept-btn").removeAttr("disabled");
	    }
	    else {
	       $("#accept-btn").attr("disabled", true);
	    }
	 });

      });

      $("#refuse-btn").click(function() {

	 var r = confirm("Quieres Abandonar?");
	 if (r == true) {
//			    return true;
	    window.location.assign("index.php");
	 } else {
	    return false;
	 }
      });
      $("#cancel-btn").click(function() {

	 var r = confirm("Vas a cancelar el registro?");
	 if (r == true) {
//			     return true;
	    window.location.assign("index.php");
	 } else {
	    return false;
	 }
      });
      $("#cancel-profile-btn").click(function() {

	 var r = confirm("Quieres salir?");
	 if (r == true) {
	    $('#height').val("");
	    $('#weight').val("");
	    $('#waist').val("");
	 } else {
	    return false;
	 }
      });

      $("#accept-btn").click(function() {

	 if ($('#accept-check').attr('checked')) {
//	       alert("accept");
	    $('#terms-conditions').css('display', 'none');
	    $('#profile-div').css('display', 'block');
	 }
      });

      $("#next").click(function(event)
      {
	 var pass_pattern = /^((?=.*[a-zA-Z])(?=.*\d)(?=.*[#@%$]).{6,20})$/;
	 var pass = $('#r-password').val();
	 if ($('#r-username').val().trim() == '')
	 {
	    alert('Usuario debe ser e-mail');
	    $('#r-username').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if (!(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,7})$/.test($('#r-username').val())))
	 {
	    submit_form = false;
	    alert("Error. El usuario tiene que ser su email.");
	    $('#r-username').focus();
	    return false;
	 }
	 else if ($('#r-password').val().trim() == '')
	 {
	    alert('Contraseña.');
	    $('#r-password').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if ($('#r-password').val().trim().length < 6)
	 {
	    alert('Mínimo 6 carácteres.');
	    $('#r-password').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if ($('#r-cpassword').val().trim() == '')
	 {
	    alert('Confirme su Contraseña.');
	    $('#r-cpassword').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if (!pass_pattern.test(pass)) {
	    alert('Error. su contraseña debe tener entre 6 y 2o carácteres, al menos una mayúscula, una minúscula, un número y un caracter especial (@ o $, etc.');
	    $('#r-password').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if ($('#r-cpassword').val() != $('#r-password').val())
	 {
	    alert('No coinciden las dos contraseñas.');
	    $('#r-password').focus();
	    event.preventDefault();
	    return false;
	 }
	 else if ($('#r-username').val().trim() !== '') {
	    var user_name = $('#r-username').val().trim();
	    // alert(user_name);
	    $.ajax({type: "post", url: "check_valid_user.php",
	       data: {
		  username: user_name

	       }, success: function(response) {
		  // alert(response);
		  var data1 = response.trim();
		  if (data1 == "exists") {
		     alert('Usuario Existente. Use otro');
		     $('#r-username').val('').focus();
		     return false;
		  }
		  else {
		     $('#register-form-div').css('display', 'none');
		     $('#terms-conditions').css('display', 'block');
		  }
	       }});
	 }

      });

      
      $("#main-register").submit(function(event) {
	 });
   </script>

</body>
</html>
<?php ob_end_flush(); ?>