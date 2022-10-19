<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','coding_quizb');

// get the post records
$username = $_POST['username'];
$cname = $_POST['cname'];
$Fscore = $_POST['Fscore'];
//$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `scoring` (`Name`,`College_Name`,`Score`) VALUES ('$username','$cname','$Fscore')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>