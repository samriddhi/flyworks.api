flyworksApp.controller('contactController', function($scope, $http) {    

    $scope.submit = function() {
        var data = {
            userDetails: this.userDetails,
            querySource: "HOMEPAGE"
        };
        
        var config = {};
        $http.post("/submit", data, config)
            .success(function(response) {
                console.log(response);
            })
            .error(function(response) {
                console.log(response);
            })
    }
});