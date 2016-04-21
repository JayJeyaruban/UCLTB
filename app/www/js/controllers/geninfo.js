angular.module('app')

.controller('GenInfoController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.info = $firebaseArray(firebase.child("About TB"));
	$scope.whichinfo = $state.params.info;
}])