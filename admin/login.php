<!DOCTYPE html>
<html>
 <head>
		<meta charset="UTF-8">

		<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		
		<link href="../css/main.css" rel="stylesheet">
        
        <script src="dist/sweetalert.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="dist/sweetalert.css">

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

		<script  src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

		<script async src="https://cdnjs.cloudflare.com/ajax/libs/json2/20160511/json2.js"> </script>
        
        <script type="text/javascript" src="loginAuthorization.js"></script>

		<meta name="viewport" content="initial-scale=1,user-scalable=no,maximum-scale=1,width=device-width,height=device-height">

		<meta name="description" content="Estructura Para página">
		<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>CETYS - Admin</title>

	</head>

<body>
<div class="wrapper">

<?php
include 'adminHeaderNav.php';
?>

<div class="main-content">


  <div class="admin-login-container">
    <img src="../img/cetys_logo.png" alt="">
        <form class="admin-login-form">
            <label for="">Usuario</label><br>
            <input type="text" id="user"><br>
            <label for="">Contraseña</label><br>
            <input type="password" id="password"><br>
        </form>
        <button onclick="setVerification();">Entrar</button>
    </div>  

   
    
<?php
include 'adminFooter.php';
?>