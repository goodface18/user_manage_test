<?php
  require_once("connection.php");
  $sql = "SELECT * from api_users where name='".$_POST['name']."' and password=md5('".$_POST['password']."')";
  if($result = $conn->query($sql)){
    if($row = mysqli_fetch_assoc($result)){
      $_SESSION['id'] = $row['id'];
      $_SESSION['name'] = $row['name'];
      $data = array('id' => $row['id'], 'name' => $row['name']);
      echo json_encode($data);
    } else {
      $data['error'] = "Password or Username wrong";
      echo json_encode($data);
    }
  }else{
    $data['error'] = "query error";
    echo json_encode($data);
  }
?>
