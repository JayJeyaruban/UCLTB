'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
var firebase = null;
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
		'firebase',
		'ui.bootstrap'
  ])

// .config(function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('ucltb', {
//       url: '/test',
//       templateUrl: 'views/frames/loginFrame.html',
//       abstract: true
//     })
//
//     .state('ucltb.login', {
//       url: '/login',
//       views: {
//         'login' : {
//           templateUrl: 'views/login.html',
//           controller: 'LoginCtrl',
//           controllerAs: 'login'
//         }
//       }
//     })
//
//     .state('signedIn', {
//       url: '/signedIn',
//       templateUrl: 'views/frames/signedInFrame.html',
//       abstract: true
//     })
//
//     .state('signedIn.home', {
//       url: '/home',
//       templateUrl: 'views/home.html',
//       controller: 'HomeCtrl'
//     })
//
//   $urlRouterProvider.otherwise('/test');
// })

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
      // controllerAs: 'home'
    })
    .when('/staff', {
      templateUrl: 'views/staff.html',
      controller: 'HomeCtrl'
    })
    .when('/projects', {
      templateUrl: 'views/projects.html',
      controller: 'HomeCtrl'
    })
    .when('/quiz', {
      templateUrl: 'views/quiz.html',
      controller: 'HomeCtrl'
    })
    .when('/schedule', {
      templateUrl: 'views/schedule.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.run(function() {
	firebase = new Firebase("https://resplendent-inferno-6066.firebaseio.com/");
});
