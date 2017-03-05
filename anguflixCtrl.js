app.controller('anguflixCtrl', function($scope, anguflixService) {
  $scope.moviesList = anguflixService.moviesList;
  $scope.userBudget = 100; //initialize budget!
  $scope.userCollection = anguflixService.userCollection;

  //most importent function to get API 
  $scope.searchMovie = anguflixService.searchMovie;
  //takes movie and send it to service

  //array of API movies
  $scope.popular = anguflixService.popular;
  
  $scope.addToCollection = function(newMovie){
    //scaning the array
    for(var i = 0; i < anguflixService.userCollection.length; i++) {
    //checks if movie exists in array
      if(newMovie === anguflixService.userCollection[i]) {
        alert("movie is alreay in list");
        return;
    //if movie exists than alert and abort    
      } 
    };
    //the else happens OUTSIDE the loop and only THAN adds the new movie to array 
        anguflixService.addToCollection(newMovie); //invoke service function 
        console.log($scope.userCollection);
    };
   
  $scope.removeFromList = function(index){
    anguflixService.removeFromList(index);
    console.log($scope.userCollection);
  }



});