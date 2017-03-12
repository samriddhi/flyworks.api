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
        when('/about', {
          controller: 'aboutController',
          templateUrl: '/views/about.html'
        }).
        when('/products', {
          controller: 'productController',
          templateUrl: '/views/product.html'
        }).
        when('/videos',{
          controller: 'videoController',
          templateUrl: '/views/videos.html'
        }).
        otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);