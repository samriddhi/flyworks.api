'use strict';
angular.
  module('flyworksApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          controller: 'homeController',
          templateUrl:  '/views/home.html'
        }).
        when('/contact', {
          controller: 'contactController',
          templateUrl: '/views/contact.html'
        }).
        when('/test', {
          template: '<testModule></testModule>'
        }).
        otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);