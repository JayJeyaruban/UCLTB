angular.module('app')

.controller('StaffController', ['$scope', '$http', '$state',
	function($scope, $http, $state, Items) {
	$http.get('js/staff.json').success(function(data) {
	// $http.get('https://resplendent-inferno-6066.firebaseio.com').success(function(data) {
		$scope.stafflist = data;
		$scope.whichstaff = $state.params.detail;
	});
}])

.factory("Items", function($firebaseArray) {
	var itemsRef = new Firebase("https://resplendent-inferno-6066.firebaseio.com/0");
	console.log("Test");
	return $firebaseArray(itemsRef);
})
