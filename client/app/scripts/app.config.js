'use strict';

flyworksApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function config($stateProvider, $urlRouterProvider, $httpProvider) {

$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];


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
            },
                vHtml: function(videoService) {
                    return videoService.getVimeoHtml();                    
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