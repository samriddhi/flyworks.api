flyworksApp.controller('contactCtrl', function($scope, $http) {    

    $scope.submit = function() {
        var pageInfo = {
            source: "HOMEPAGE"
        };
        var data = {
            userDetails: this.userDetails,
            pageInfo: pageInfo
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