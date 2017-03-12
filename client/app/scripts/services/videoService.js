'use strict';

flyworksApp.factory('videoService', function($http) {
    return {
        getVideos: function() {
            return $http.get('/videos').then(
                function(response) {
                    // success callback
                    return response.data;
                },
                function(error) {
                    // failure callback
                    console.log(error);
                }
            );
        }
    };
})