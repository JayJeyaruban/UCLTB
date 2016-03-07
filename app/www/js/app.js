// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('mainmenu', {
			url: '/mainmenu',
			templateUrl: 'templates/mainmenu.html',
			controller: 'MainMenuController'
		})

		.state('geninfo', {
			url: '/geninfo',
			templateUrl: 'templates/geninfo.html',
			controller: 'GenInfoController'
		})

		.state('clinserv', {
			url: '/clinserv',
			templateUrl: 'templates/clinserv.html',
			controller: 'ClinServController'
		})

		.state('schedule', {
			url: '/schedule',
			templateUrl: 'templates/schedule',
			controller: 'ScheduleController'
		})

		.state('staff', {
			url: '/staff',
			templateUrl: 'templates/staff.html',
			controller: 'StaffController'
		})
	$urlRouterProvider.otherwise('/mainmenu');
})

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
