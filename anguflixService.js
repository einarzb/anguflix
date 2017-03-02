app.factory('anguflixService', function(){

//ajax - to call netflix api

    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?' //maybe change it later to url (will be passed from ctrl)
    }).then(function successCallback(response) {
          var mTitle = displayTitle()//???
          var plot = response.Plot;
          var movieYear = response.Year;
          var actors = response.Actors;
          var poster = response.Poster;

          var movieInfo = {
            mTitle:mTitle,
            plot:plot,
            movieYear:movieYear,
            actors:actors,
            poster:poster
          }

          return movieInfo;
          console.log(movieInfo);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

    var moviesList = [];

    var displayTitle = function(mTitle){
           moviesList.push(mTitle);
           console.log(mTitle);
           console.log(moviesList); 
          };

    return { 
      moviesList: moviesList,
      displayTitle:displayTitle 
    };

});

//services store data
//we construct them like controller. there are 2 kinds: service and factory.
//The function in a factory does not involve $scope - that's typically used for controllers
