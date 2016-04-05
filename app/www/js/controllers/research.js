angular.module('app')

.controller('ResearchController', ['$scope', '$http', '$state',
	function($scope, $http, $state) {
	$http.get('js/project.json').success(function(data) {
		$scope.projects = data;
		$scope.whichproj = $state.params.proj;
	});
}])
