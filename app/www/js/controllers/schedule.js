angular.module('app')

.controller('ScheduleController', ['$scope', '$firebaseArray', '$state',
	function($scope, $firebaseArray, $state) {
	$scope.schedule = $firebaseArray(firebase.child("schedule"));
	$scope.whichtime = $state.params.time;
}])
