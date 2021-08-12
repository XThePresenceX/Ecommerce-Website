<?php

$servername = "localhost";
$username = "bhindi_form";
$password = "Shinchan45*";
$dbname = "bhindi_form"; 

if($_SERVER['REQUEST_METHOD']=='POST'){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];
}

 $conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO contactdata(Name, Email, Message) VALUES ('$name', '$email', '$message')"; 

if ($conn->query($sql) === TRUE) {
  echo "<script>
          alert('Form Submitted!');
          window.location.href='contact.html';
        </script>";
} else {
   echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


