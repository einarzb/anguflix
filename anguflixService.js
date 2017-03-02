app.factory('anguflixService', function(){
    var userCollection = [];
    var moviesList = [
    {title:"Bambi", poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1NzM4NDg5MV5BMl5BanBnXkFtZTgwMjI1MTkzMjE@._V1_UX182_CR0,0,182,268_AL_.jpg', year: 1942, plot: 'The story of a young deer growing up in the forest.'},
    {title:"Logan", poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI1MjkzMjczMV5BMl5BanBnXkFtZTgwNDk4NjYyMTI@._V1_UX182_CR0,0,182,268_AL_.jpg', year: 2017, plot: 'In the near future, a weary Logan cares for an ailing Professor X in a hide out'},
    {title:"Fiding Nemo", poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', year: 2003, plot: 'The story of a young deer growing up in the forest.'},
    {title:"The Lion King", poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg', year: 1994, plot: 'A young lion Prince is cast out of his pride by his cruel uncle, who claims he'},
    {title:"The Lion King", poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg', year: 1994, plot: 'A young lion Prince is cast out of his pride by his cruel uncle, who claims he'}
    ]; //search query array
    // var userCollection = []; //user collection array

    // var displayTitle = function(mTitle){
    //        moviesList.push(mTitle);
    //        console.log(mTitle);
    //        console.log(moviesList); 
    //       };

    //  var removeMovieFromList = function (index) {
    //       userCollection.splice(index, 1); 
    //       console.log(index); 
    //       };

 //ajax - to call netflix api

    // $http({
    //   method: 'GET',
    //   url: 'http://www.omdbapi.com/?' //maybe change it later to url (will be passed from ctrl)
    // }).then(function successCallback(response) {
    //       var mTitle = displayTitle()//???
    //       var plot = response.Plot;
    //       var movieYear = response.Year;
    //       var actors = response.Actors;
    //       var poster = response.Poster;

    //       var movieInfo = {
    //         mTitle:mTitle,
    //         plot:plot,
    //         movieYear:movieYear,
    //         actors:actors,
    //         poster:poster
    //       }

    //       return movieInfo;
    //       console.log(movieInfo);

    //   }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //   });

    return { 
      moviesList: moviesList,
      userCollection:userCollection
      // displayTitle:displayTitle 
    };

});

//services store data
//we construct them like controller. there are 2 kinds: service and factory.
//The function in a factory does not involve $scope - that's typically used for controllers
