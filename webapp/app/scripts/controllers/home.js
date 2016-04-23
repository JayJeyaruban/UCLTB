'use strict';

/**
 * @ngdoc function
 * @name app.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the app
 */
angular.module('app')

.controller('HomeCtrl', function($scope, $firebaseObject, $firebaseArray, $uibModal, $log) {
	$scope.base = $firebaseObject(firebase);
	// $scope.genInfo = JSON.toString($scope.base.about);
	$scope.staff = $firebaseArray(firebase.child("staff"));
	$scope.projects = $firebaseArray(firebase.child("projects"));
	$scope.quiz = $firebaseArray(firebase.child("quiz"));
	$scope.schedule = $firebaseArray(firebase.child("schedule"));
	$scope.faq = $firebaseArray(firebase.child("faq"));

  $scope.animationsEnabled = true;

  $scope.open = function(size, title) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/templates/modalTemplate.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        pageContent: function() {
           return $scope.base.about;
        },
				title: function() {
					return title;
				}
      }
    });

    modalInstance.result.then(function(pageContent) {
      $scope.items = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});
