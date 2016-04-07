angular.module('app')

.controller('ResearchController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.projects = $firebaseArray(firebase.child("projects"));
	$scope.whichproj = $state.params.proj;
}])
