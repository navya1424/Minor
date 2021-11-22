<?php

session_start();

$conn=mysqli_connect('localhost','root','');
mysqli_select_db($conn, 'login');

if(!$conn)
 {
 	die("connection_failed:" . mysql_connect_error());
 }

if(isset($_POST['submit'])) 
{
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phonenumber = $_POST['phonenumber'];
	$password = $_POST['password'];
	$s = " SELECT * from users_info where name = '$name'";
	
//response
$result = mysqli_query($conn, $s);
$num = mysqli_num_rows($result);



if (empty($name) || empty($email) || empty($phonenumber) || empty($password)){
echo '<script language="javascript">';
echo 'alert("Please fill up the feilds");';
echo 'window.location.href="signup.html";';
echo '</script>';
}
 else{
	$reg = "INSERT into users_info (name, email, phonenumber, password) 
	VALUES ('$name', '$email', '$phonenumber', '$password')";
	mysqli_query($conn, $reg);
	echo '<script language="javascript">';
echo 'alert("SIGNUP SUCCESSFULL!! NOW YOU CAN LOGIN WITH OUR WEBSITE!");';
echo 'window.location.href="signup.html";';
echo '</script>';
}

}
$conn->close();
?>