'use strict';

flyworksApp.config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.
        state('/', {
            url: '/',
            resolve: {
                videos: function(videoService) {
                    return videoService.getVideos();
                }
            },
            views: {
                '': {
                    controller: 'homeController',
                    templateUrl: '/views/home.html'
                },

                'contact@/': {
                    controller: 'contactController',
                    templateUrl: '/views/contact.html'
                }
            }
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
            //templateUrl: '/views/contact.html',
            templateUrl: function() {
                return '/views/contact.html';
            },
            resolve: {
                title: function() {
                    return 'I am Hereee';
                }
            },
            onEnter: function(title) {
                if (title) {
                    console.log('Entry in contact dependency');
                }
            },
            onExit: function(title) {
                if (title) {
                    console.log('Exit from contact dependency');
                }
            }
        });
    }
]);