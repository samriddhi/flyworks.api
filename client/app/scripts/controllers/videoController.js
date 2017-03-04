flyworksApp.controller('videoController', function($scope, videos) {
    console.log('In Video Controller');

    $scope.videoData = videos;
});