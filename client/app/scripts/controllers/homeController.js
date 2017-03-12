flyworksApp.controller('homeController', function($scope, $http, $window){
  $scope.jumbo = {
    height: $window.innerHeight,
    width: $window.innerWidth
  };
  console.log($window.innerHeight);
  console.log($window.innerWidth);
});