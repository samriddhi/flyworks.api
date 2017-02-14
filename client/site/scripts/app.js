// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

/**
 * @ngdoc overview
 * @name loopbackExampleFullStackApp
 * @description
 * # loopbackExampleFullStackApp
 *
 * Main module of the application.
 */
angular
  .module('flyworksApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    Object.keys(HomepageRoutes)
      .forEach(function(route) {
        var routeDef = HomepageRoutes[route];
        $routeProvider.when(route, routeDef);
      });

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
