flyworksApp.controller('videoController', function($scope, $http) {
    console.log('In Video Controller');
    $http.get('/videos')
        .success(function(response) {
            console.log(response);
        })
        .error(function(response) {
            console.log(response);
        })
    return;
});