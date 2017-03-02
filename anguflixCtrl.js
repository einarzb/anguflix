app.controller('anguflixCtrl', function($scope, anguflixService) {
  $scope.moviesList = anguflixService.moviesList;
  $scope.userBudget = 100; //initialize budget!
  
  $scope.addToCollection = function(){

  }
    //from user 
    // $scope.movieTitle; //initialize
    // $scope.budget = 100; //I've initialzed it to 100$
    // $scope.moviePoster

    // //array of movie objects
    // $scope.moviesList = anguflixService.moviesList; //scope.array
    // $scope.userCollection = anguflixService.userCollection; 

    //function that pushes movie title to service
    // $scope.getTitle = function(){
    //   var mTitle = 'http://www.omdbapi.com/?t=' + $scope.inputTitle;
    //   anguflixService.displayTitle(mTitle);
    //   console.log(mTitle);
    // }

    //function that pushes API scopes to service


    // //function that removes movie from the array
    // $scope.removeMovieFromList = function (index) {
    //     userCollection.removeMovieFromList(index);
    // };

});