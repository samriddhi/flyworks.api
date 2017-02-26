flyworksApp.controller('contactCtrl', function($scope, $http){
	console.log('Here In Contact Controller');
	
	$scope.submit = function() {
		console.log('form submitted');
		console.log("form Data ::: " + this.userDetails.name);
		var data = {userDetails: this.userDetails};
		var config = {};
		$http.post("/submit", data, config)
			.success(function(response) {
				console.log(response);
			})
			.error(function (response) {
				console.log(response);
			})
	}
});