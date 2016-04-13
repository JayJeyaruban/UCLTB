angular.module('app')

.controller('QuizController', ['$scope', '$firebaseArray', '$state','$ionicPopup',
	function($scope, $firebaseArray, $state, $ionicPopup) {
	$scope.quiz = $firebaseArray(firebase.child("quiz"));
	$scope.whichquestion = $state.params.question;
	$scope.correctAlert = function() {
	
    var alertPopup = $ionicPopup.alert({
         title: 'Correct',
         template: '<p align="center">Well done. Answer is correct</p>'
      });

    alertPopup.then(function(res) {
         console.log('Thank you for attempting an answer');
     });

   };
    $scope.incorrectAlert = function() {
	
    var alertPopup = $ionicPopup.alert({
         title: 'Incorrect',
         template: '<p align="center">Answer is Incorrect</p>'
      });

    alertPopup.then(function(res) {
         console.log('Thank you for attempting an answer');
     });

   };
	
}])
