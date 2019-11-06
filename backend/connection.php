<?php
$servername = "localhost";
$username = "root";
$password = "root";
$database = "user_management_db";
$port = 8889;
// Create connection
$conn = new mysqli($servername, $username, $password, $database, $port);

// Check connection
if ($conn->connect_error) {
  $data['error'] = $conn->connect_error;
  echo json_encode($data);
  die();
}
?>
