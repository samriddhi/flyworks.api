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
        },
        getVimeoHtml: function() {
            // This is the URL of the video you want to load
            var videoUrl = 'http://www.vimeo.com/7100569';

            // This is the oEmbed endpoint for Vimeo (we're using JSON)
            // (Vimeo also supports oEmbed discovery. See the PHP example.)
            var endpoint = 'http://www.vimeo.com/api/oembed.json';

            // Tell Vimeo what function to call
            var callback = 'embedVideo';

            // Put together the URL
            var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&width=640';

            // This function puts the video on the page
            return $http.get(url).then(
                function(response) {
                    // success callback
                    console.log('video returned');
                    return unescape(video.html);
                },
                function(error) {
                    // failure callback
                    console.log(error);
                }
            );
        }
    };
})