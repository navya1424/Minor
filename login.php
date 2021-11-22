<?php

session_start();
$conn=mysqli_connect('localhost','root','');
mysqli_select_db($conn, 'login');

if(!$conn)
 {
 	die("connection_failed:" . mysql_connect_error());
 }

if(isset($_POST['login'])) 
{
	$email = $_POST['email'];
	$password = $_POST['password'];
	$s = " SELECT * from users_info where email = '$email' && password = '$password'";
	
//response
$result = mysqli_query($conn, $s);
$num = mysqli_num_rows($result);
if ( empty($email) || empty($password)){
echo '<script language="javascript">';
echo 'alert("Please fill up the feilds");';
echo 'window.location.href="signup.html";';
echo '</script>';
}
elseif($num == 1) {
	$_SESSION['username'] = $email;
    header("location:index.html");
} else {
echo '<script language="javascript">';
echo 'alert("WRONG AUTHENTICATION!! please retry with correct email and password or try signing up");';
echo 'window.location.href="signup.html";';
echo '</script>';
}

}
?>