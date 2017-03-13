'use strict';

flyworksApp.config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.
        state('/', {
            url: '/',
            controller: 'homeController',
            templateUrl: '/views/home.html'
        }).
        state('products', {
            url: '/videos',
            controller: 'videoController',
            templateUrl: '/views/videos.html',
            resolve: {
                videos: function(videoService) {
                    return videoService.getVideos();
                }
            }
        }).
        state('about', {
            url: '/about',
            controller: 'aboutController',
            templateUrl: '/views/about.html',
            resolve: {

            }
        }).
        state('contact', {
            url: '/contact',
            controller: 'contactController',
            templateUrl: '/views/contact.html',
            resolve: {

            }
        });
    }
]);