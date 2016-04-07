angular.module('app')

.controller('GenInfoController', ['$scope', '$firebaseObject',
	function($scope, $firebaseObject) {
	$scope.about = $firebaseObject(firebase);
}])
