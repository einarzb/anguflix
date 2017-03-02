app.controller('anguflixCtrl', function($scope, anguflixService) {
  $scope.moviesList = anguflixService.moviesList;
  $scope.userBudget = 100; //initialize budget!
  $scope.userCollection = anguflixService.userCollection;

  //most importent function to get API 
  $scope.searchMovie = anguflixService.searchMovie;
  //takes movie and send it to service

  //array of API movies
  $scope.popular = anguflixService.popular;
  
  $scope.addToCollection = function(movieToAdd){
    anguflixService.addToCollection(movieToAdd); //invoke service function 
    console.log($scope.userCollection);
  };
   

    //function that pushes API scopes to service


    // //function that removes movie from the array
    // $scope.removeMovieFromList = function (index) {
    //     userCollection.removeMovieFromList(index);
    // };

});