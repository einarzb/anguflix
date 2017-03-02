app.controller('anguflixCtrl', function($scope, anguflixService) {
    $scope.moviesList = anguflixService.moviesList;
});