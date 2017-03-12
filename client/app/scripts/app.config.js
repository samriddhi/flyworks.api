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
        state('videos', {
            url: '/videos',
            controller: 'videoController',
            templateUrl: '/views/videos.html',
            resolve: {
                videos: function(videoService) {
                    return videoService.getVideos();
                }
            }
        }).
        state('contact', {
            url: '/contact',
            controller: 'contactController',
            templateUrl: '/views/contact.html'
        }).
        state('/test', {
            template: '<testModule></testModule>'
        });

    }
]);