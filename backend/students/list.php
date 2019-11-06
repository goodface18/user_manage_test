<?php
  require_once("../connection.php");
  $page = $_GET['page'];
  $offset = ($page-1)*5;
  $sql = "SELECT * from students";
  if($result = $conn->query($sql)){
    $data['count'] = $result->num_rows;
  }else{
    $data['error'] = "query error";
    echo json_encode($data);
    die();
  }
  $sql = "SELECT * from students LIMIT $offset, 5";
  if($result = $conn->query($sql)){
    if($result->num_rows > 0){
      $data['students'] =array();
      while($row = $result->fetch_assoc()) {
          array_push($data['students'], $row);
      }
      echo json_encode($data);
    }else{
      $data['error'] = "There is no students data";
      echo json_encode($data);
      die();
    }
  }else{
    $data['error'] = "query error";
    echo json_encode($data);
    die();
  }
?>
