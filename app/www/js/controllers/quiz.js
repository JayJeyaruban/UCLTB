angular.module('app')

.controller('QuizController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.quiz = $firebaseArray(firebase.child("quiz"));
	$scope.whichquestion = $state.params.question;
}])
