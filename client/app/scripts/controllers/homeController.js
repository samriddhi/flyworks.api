'use strict';
flyworksApp.controller('homeController', function($scope, $http, $window){
  $scope.jumbo = {
    height: $window.innerHeight,
    width: $window.innerWidth
  };

  $scope.test="All the other content goes here";
  console.log($window.innerHeight);
  console.log($window.innerWidth);
})
.directive('contactForm', function(){
  return{
    restrict: 'E',
    templateUrl: 'views/contact.html',
    controller: 'contactController'
  }
});