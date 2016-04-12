angular.module('app')

.controller('FaqController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.faq = $firebaseArray(firebase.child("faq"));
	$scope.whichasked = $state.params.asked;
}])
