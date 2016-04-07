angular.module('app')

// .controller('StaffController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
// 	var ref = new Firebase("https://resplendent-inferno-6066.firebaseio.com/")
//
// 	$scope.stafflist = $firebaseArray(ref);
// }])

.controller('StaffController', ['$scope', '$firebaseArray', '$state', function($scope, $firebaseObject, $state) {
	var ref = new Firebase("https://resplendent-inferno-6066.firebaseio.com/");

	$scope.stafflist = $firebaseObject(firebase.child("staff"));
	$scope.whichstaff = $state.params.detail;
}])
