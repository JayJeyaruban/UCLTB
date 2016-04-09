// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var firebase = null;
angular.module('app', [
	'ionic',
	'firebase'
])


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
    // if(window.StatusBar) {
    //   StatusBar.styleDefault();
    // }
		if(window.StatusBar) {
			if (ionic.Platform.isAndroid()) {
				StatusBar.backgroundColorByHexString("#0D47A1");
			} else {
				StatusBar.styleLightContent();
			}
		}

		firebase = new Firebase("https://resplendent-inferno-6066.firebaseio.com/")
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('mainmenu', {
			url: '/mainmenu',
			templateUrl: 'pages/mainmenu.html',
			controller: 'MainMenuController'
		})

		.state('geninfo', {
			url: '/geninfo',
			templateUrl: 'pages/geninfo.html',
			controller: 'GenInfoController'
		})

		.state('clinserv', {
			url: '/clinserv',
			templateUrl: 'pages/clinserv.html',
			controller: 'ClinServController'
		})

		.state('schedule', {
			url: '/schedule',
			templateUrl: 'pages/schedule.html',
			controller: 'ScheduleController'
		})

		.state('staff', {
			url: '/staff',
			templateUrl: 'pages/staff.html',
			controller: 'StaffController'
		})

		.state('research', {
			url: '/research',
			templateUrl: 'pages/research.html',
			controller: 'ResearchController'
		})

		.state('quiz', {
			url: '/quiz',
			templateUrl: 'pages/quiz.html',
			controller: 'QuizController'
		})

		.state('feedback', {
			url: '/feedback',
			templateUrl: 'pages/feedback.html',
			controller: 'FeedbackController'
		})		

		.state('detail', {
			url: '/:detail',
			templateUrl: 'pages/templates/stafftemplate.html',
			controller: 'StaffController'
		})

		.state('project', {
			url: '/:proj',
			templateUrl: 'pages/templates/projecttemplate.html',
			controller: 'ResearchController'
		})
		

	$urlRouterProvider.otherwise('/mainmenu');
})
