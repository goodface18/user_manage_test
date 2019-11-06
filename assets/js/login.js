$(document).ready(function(){
  if(localStorage.name || sessionStorage.name){
    window.location.href = "students.html";
  }
  $("#signin_btn").click(function(){
    $.ajax({
      method: "post",
      url: "backend/login.php",
      datatype: "json",
      data:{
        name: $("#inputUser").val(),
        password: $("#inputPassword").val()
      },
      success: function(msg){
        data = JSON.parse(msg);
        if(data.error){
          alert(data.error);
        }else{
          alert("login success!!");
          window.location.href = "students.html";
          if($("#remember_me").is(":checked")){
            localStorage.name = data.name
            localStorage.id = data.id
          }
          else{
            sessionStorage.name = data.name
            sessionStorage.id = data.id
          }
        }
      },
      error: function(error) {
        alert("error");
      }
    });
  });
});
