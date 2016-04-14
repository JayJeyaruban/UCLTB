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

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/home', {
      templateUrl: 'views/home.html'
      // controller: 'AboutCtrl',
      // controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
})

.run(function() {
	firebase = new Firebase("https://resplendent-inferno-6066.firebaseio.com/");
});
