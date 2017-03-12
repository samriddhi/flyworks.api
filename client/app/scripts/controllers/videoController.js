'use strict';

flyworksApp.controller('videoController', function($scope, videos) {
    $scope.videoData = videos;
    $scope.init = function() {

        var js = document.createElement('script');
        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', url);
        document.getElementsByTagName('head').item(0).appendChild(js);
    }

    var videoUrl = 'http://www.vimeo.com/208017372';

    // This is the oEmbed endpoint for Vimeo (we're using JSON)
    // (Vimeo also supports oEmbed discovery. See the PHP example.)
    var endpoint = 'http://www.vimeo.com/api/oembed.json';

    // Tell Vimeo what function to call
    var callback = 'embedVideo';

    // Put together the URL
    var url = endpoint + '?url=' + encodeURIComponent(videoUrl) + '&callback=' + callback + '&width=640';

});

// This function puts the video on the page
function embedVideo(video) {
    document.getElementById('embed').innerHTML = unescape(video.html);
}