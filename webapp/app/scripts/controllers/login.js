'use strict';

/**
 * @ngdoc function
 * @name app.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the app
 */
angular.module('app')

.controller('LoginCtrl', function($firebaseAuth, $location) {
	this.signin = function(username, password) {
		var fbAuth = $firebaseAuth(firebase);
		fbAuth.$authWithPassword({
			email: username,
			password: password
		}).then(function(authData) {
			$location.path("/home");
		}).catch(function(error) {
			alert("Incorrect username and/or password!!");
		});
	};
})
