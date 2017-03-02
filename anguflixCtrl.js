app.controller('anguflixCtrl', function($scope, anguflixService) {
    $scope.inputTitle; //initialize

    $scope.getTitle = function(){
      var mTitle = 'http://www.omdbapi.com/?t=' + $scope.inputTitle;
      anguflixService.displayTitle(mTitle);
      console.log(mTitle);
    }
});