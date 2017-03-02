
var fetch = function (url) { //data 
  $.ajax({
    method: "GET",
    url: 'http://www.omdbapi.com/?t=' + getTitle,
    dataType: "json",

    success: function(data) { //data is the object
      console.log(data);
      

    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};//end fetch function