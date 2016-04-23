angular.module('app')

.controller('HospitalController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.hospital = $firebaseArray(firebase.child("AboutService"));
	$scope.whichhospital = $state.params.hospital;
}])
