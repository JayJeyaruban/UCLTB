angular.module('app')

.controller('ContactController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.contact = $firebaseArray(firebase.child("contact"));
	$scope.whichcontact = $state.params.cont;
}])
