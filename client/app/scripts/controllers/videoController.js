flyworksApp.controller('videoController', function($scope, $http) {
    console.log('In Video Controller');

    $scope.videoData =  return $http.get('/videos')
        .then(
            function(response) {
                // success callback
                console.log(response);
                return response.data;                
            },
            function(error) {
                // failure callback
                console.log(error);
            }
        );    
});