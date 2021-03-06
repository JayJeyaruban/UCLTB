angular.module('controllers', [])

.controller('MainMenuController', ['$scope', function($scope) {
	$scope.menuitems = [
		//  'General Information', 'Clinical Services', 'Quiz', 'Research', 'Feedback'
		{
			name: 'About TB',
			filename: 'geninfo'
		}, {
			name: 'About Our Service',
			filename: 'clinserv'
		}, {
			name: 'About Our Research',
			filename: 'research'
		}, {
			
			name: 'Test Your Knowledge',
			filename: 'quiz'
		}, {
			name: 'Give Us Feedback',
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

.controller('ResearchController', ['$scope', function($scope) {
	$scope.menuitems = [
		{
			name: 'Research Project 1',
			filename: 'project1'
		}, {
			name: 'Research Project 2',
			filename: 'project2'
		}
	];
}])

.controller('Project1Controller', ['$scope', function($scope) {

}])

.controller('Project2Controller', ['$scope', function($scope) {

}])



.controller('FeedbackController', ['$scope', function($scope) {

}]);


