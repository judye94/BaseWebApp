$(document).ready(function(){
getTable();
});

function getTable(){
var url = "https://api.hubapi.com/hubdb/api/v2/tables/1036302?portalId=2832391"


$.ajax(url,{success: function(data){
  console.log(data);

  $(".table").text(data.name);
}})
}

