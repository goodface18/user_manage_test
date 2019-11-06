$(document).ready(function(){
  name = getCookie('name')
  if(!localStorage.name && !sessionStorage.name){
    window.location.href = "login.html";
  }
  user_list = load_data(1);

});

function load_data(page){
  page = page;
  $.ajax({
    method: "get",
    url: "backend/students/list.php",
    datatype: "json",
    data:{
      page: page,
    },
    success: function(msg){
      data = JSON.parse(msg);
      if(data.error){
        alert(data.error);
      }else{
        console.log(data);
        students = data["students"]
        $("#students_table > tbody").html("");
        for(i=0; i<students.length; i++){
          $("#students_table > tbody").append("<tr><td>"+(students[i].status == 'Y'?"<img class='icon-img' src='https://icon-library.net/images/uncheck-icon/uncheck-icon-2.jpg'/>":'')+"<td>"+students[i].std_id+"<br>"+students[i].name+"</td><td>... <br> default group</td></tr>");
        }
        $("#students_pagination").html("");
        if(page>3)
          $("#students_pagination").append("<li class='page-item'><a class='page-link' href='javascript:load_data(1)' tabindex='-1' aria-disabled='true'><<</a></li>");
        if(page!=1)
          $("#students_pagination").append("<li class='page-item'><a class='page-link' href='javascript:load_data("+(page-1)+")' tabindex='-1' aria-disabled='true'>Previous</a></li>");
        else
          $("#students_pagination").append("<li class='page-item disabled'><a class='page-link' tabindex='-1' aria-disabled='true'>Previous</a></li>");

        count = data['count'];
        last_page = Math.floor(count/5)
        if(count%5){
          last_page ++;
        }
        for(i=1;i<6;i++){
          item_offset = i - 3;
          item_index = page + item_offset;

          if(item_index >= 1 && item_index <= last_page){
            if(item_index == page)
              $("#students_pagination").append("<li class='page-item active'><a class='page-link' href='javascript:load_data("+item_index+")'>"+item_index+"</a></li>");
            else
              $("#students_pagination").append("<li class='page-item'><a class='page-link' href='javascript:load_data("+item_index+")'>"+item_index+"</a></li>");
          }
        }
        if(page!=last_page)
          $("#students_pagination").append("<li class='page-item'><a class='page-link' href='javascript:load_data("+(page+1)+")' tabindex='-1' aria-disabled='true'>Next</a></li>");
        else
          $("#students_pagination").append("<li class='page-item disabled'><a class='page-link' tabindex='-1' aria-disabled='true'>Next</a></li>");
          if(page<last_page-3)
            $("#students_pagination").append("<li class='page-item'><a class='page-link' href='javascript:load_data("+last_page+")' tabindex='-1' aria-disabled='true'>>></a></li>");
      }
    },
    error: function(error) {
      alert("error");
    }
  });
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
  return false;
}
function logout(){
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "login.html";
}
