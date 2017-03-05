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
    if (newMovie === anguflixService.userCollection) {
         alert("movie is alreay in list");
    }else{     
        anguflixService.addToCollection(newMovie); //invoke service function 
        console.log($scope.userCollection);} 
    };
   
  $scope.removeFromList = function(index){
    anguflixService.removeFromList(index);
    console.log($scope.userCollection);
  }



});