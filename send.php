<?php
echo 'hello';

print_r($_POST);

// $firstname = $_POST['firstname'];
// $lastname = $_POST['lastname'];
// $gender = $_POST['gender'];
// $country = $_POST['country'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];
// $pwd = $_POST['pwd'];

// $conn = new mysqli('localhost','root','assign3');
// if($conn->connect_error){
//     die('Connection Failed : '.conn->connect_error);
// }else{
//     $stml = $conn->prepare("INSERT INTO form(FirstName, LastName, DOB, Gender, Country, Email, Phone, Password) VALUES (?,?,?,?,?,?,?,?)");
//     $stml->bindParam($firstname,$lastname,fssdf,$gender,$country,$email,$phone,$pwd);
//     $stml->execute();
//     echo "registred";
//     $stml->close();
//     $conn->close();
// }

// header('Content-Type: charset=utf-8');
//   echo "Hello";

// if(isset($_POST['firstname'])&&isset($_POST['lastname'])&&isset($_POST['gender'])&&isset($_POST['country'])&&isset($_POST['email'])&&isset($_POST['phone'])&&isset($_POST['pwd'])){
//     include 'db_conn.php';
  
// }else{
//     header("Location: index.html");
// }
?>