angular.module('app')

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
