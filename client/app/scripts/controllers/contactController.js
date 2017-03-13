'use strict';
flyworksApp.controller('contactController', function($scope, $http) {
    $scope.submit = function() {
        var data = {
            userDetails: this.userDetails,
            querySource: "HOMEPAGE"
        };

        var config = {};
        $http.post("/submit", data, config)
            .then(
                function(response) {
                    // success callback
                    console.log(response);
                },
                function(error) {
                    // failure callback
                    console.log(error);
                }
            );
    }

    $scope.$on('$viewContentLoaded', function() {
        console.log('contact view is loaded completely');
    });
});