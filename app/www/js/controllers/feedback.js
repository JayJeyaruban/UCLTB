angular.module('app')

.controller('FeedbackController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.faq = $firebaseArray(firebase.child("faq"));
	$scope.whichasked = $state.params.asked;
}])
