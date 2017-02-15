// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

/**
 * @ngdoc overview
 * @name flyworksApp
 * @description
 * # Entry point for angular app of flyworks
 *
 * Main module of the application.
 */

 //Defining Root App Module
var flyworksApp = angular.module('flyworksApp', ['ngRoute']);

//Defining routes for different locations
flyworksApp.config(function($routeProvider, $locationProvider) {
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