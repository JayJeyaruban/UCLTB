angular.module('controllers', [])

.controller('MainMenuController', ['$scope', function($scope) {
	$scope.menuitems = [
		//  'General Information', 'Clinical Services', 'Quiz', 'Research', 'Feedback'
		{
			name: 'General Information',
			filename: 'geninfo'
		}, {
			name: 'Clinical Services',
			filename: 'clinserv'
		}, {
			name: 'Quiz',
			filename: 'quiz'
		}, {
			name: 'Resarch',
			filename: 'research'
		}, {
			name: 'Feedback',
			filename: 'feedback'
		}
	];
}])

.controller('GenInfoController', ['$scope', '$http', function($scope, $http) {

}])

.controller('ClinServController', ['$scope', function($scope) {
	$scope.menuitems = [
		{
			name: 'Clinical Schedule',
			filename: 'schedule'
		}, {
			name: 'Staff',
			filename: 'staff'
		}
	];
}])

.controller('ScheduleController', ['$scope', function($scope) {

}])

.controller('StaffController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/staff.json').success(function(data) {
		$scope.stafflist = data;
	});
}])

.controller('QuizController', ['$scope', function($scope) {

}])

.controller('FeedbackController', ['$scope', function($scope) {

}])

.controller('ResearchController', ['$scope', function($scope) {

}]);
