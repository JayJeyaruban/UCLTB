'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('app')

.controller('HomeCtrl', function($firebaseObject, $firebaseArray) {
	this.base = $firebaseObject(firebase);	
});
