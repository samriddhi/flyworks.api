'use strict';

flyworksApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
        when('/', {
            controller: 'homeController',
            templateUrl: '/views/home.html'
        }).
        when('/videos', {
            controller: 'videoController',
            templateUrl: '/views/videos.html',
            resolve: {
                videos: function(videoService) {
                    console.log("in resolve");
                    videoService.getVideos();
                }
            }
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