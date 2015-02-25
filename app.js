var app = angular.module('sampleApp', ['firebase']);

app.controller('SampleCtrl',['$scope','$firebase',function($scope,$firebase){
	var ref = new Firebase('https://dazzling-inferno-2858.firebaseio.com/');
	var sync = $firebase(ref);
	
	// create a synchronized array for use in our HTML code
	$scope.messages = sync.$asArray();

	$scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
  }
}]);
