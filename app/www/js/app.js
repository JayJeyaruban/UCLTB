// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'controllers'])


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

		.state('quiz', {
			url: '/quiz',
			templateUrl: 'pages/quiz.html',
			controller: 'QuizController'
		})
		
				.state('correctAns', {
			url: '/correctAns',
			templateUrl: 'pages/correctAns.html',
			controller: 'correctController'
		})
		
				.state('incorrectAns', {
			url: '/incorrectAns',
			templateUrl: 'pages/incorrectAns.html',
			controller: 'incorrectController'
		})
		
		.state('question1', {
			url: '/question1',
			templateUrl: 'pages/question1.html',
			controller: 'Question1Controller'
		})		

		.state('research', {
			url: '/research',
			templateUrl: 'pages/research.html',
			controller: 'ResearchController'
		})
		
				.state('project1', {
			url: '/project1',
			templateUrl: 'pages/project1.html',
			controller: 'Project1Controller'
		})
		
				.state('project2', {
			url: '/project2',
			templateUrl: 'pages/project2.html',
			controller: 'Project2Controller'
		})
		

		.state('feedback', {
			url: '/feedback',
			templateUrl: 'pages/feedback.html',
			controller: 'FeedbackController'
		})

	$urlRouterProvider.otherwise('/mainmenu');
})
