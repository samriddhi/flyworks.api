flyworksApp.factory('videoService', function(argument) {
    return {
        getVideos: function() {
            return $http.get('/videos')
                .then(
                    function(response) {
                        // success callback
                        console.log('in video service');
                        console.log(response);
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