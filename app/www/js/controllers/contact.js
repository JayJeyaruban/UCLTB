angular.module('app')

.controller('ContactController', ['$scope', '$firebaseArray', '$state', function($scope, $firebaseObject, $state) {

	$scope.contact = $firebaseObject(firebase.child("contact"));
	$scope.whichcontact = $state.params.contact;
}])
