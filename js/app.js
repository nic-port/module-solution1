(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.items = "";
  	$scope.sayMessage = "";
  	$scope.status = "";


	$scope.displayMessage = function () {
	    var message = numberofItems($scope.items);
	    $scope.sayMessage = message;
	};

	function numberofItems(string) {
		var words = string.split(",");
		for (var i = 0; i < words.length; i++) {
			$scope.status = "error";
			if (words == '') { 
    			return "Please enter data first" 
			}else if (words[i] === '' || words[i] === ' ') {
    			return "Please enter a valid data" 
	    	}; 
	    };
	    $scope.status = "ok";
	    if (words.length <= 3) {
	    	return "Enjoy!"
	    } else if (words.length > 3){
	    	return "Too much!"
	    };
    };
};
})();