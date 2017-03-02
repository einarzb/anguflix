app.factory('anguflixService', function(){

//each object has 2 properties
var moviesList = [
      {name: "Lion King", rate: '&#9733;&#9733;&#9733;&#9733;&#9733;'}, //stars are in '' as strings
      {name: "Finding Nemo", rate: 5},
      {name: "Titanic", rate: 1},
      {name: "Moonlight", rate: 10}
    ];
  return { 
    moviesList: moviesList 
  };
});

//services store data
//we construct them like controller. there are 2 kinds: service and factory.
//The function in a factory does not involve $scope - that's typically used for controllers
