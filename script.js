
var fetch = function (url) { //data 
  $.ajax({
    method: "GET",
    url: url,
    dataType: "json",

    success: function(data) { //data is the object
      //console.log(data);
       var cityInfo = createCity(data); //var holds the function createcity that returned cityInfo
       addCity(cityInfo);
       renderCities();


    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};//end fetch function