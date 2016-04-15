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


  $scope.items = 'Testing';

  $scope.animationsEnabled = true;

  $scope.open = function(size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'views/templates/modalTemplate.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        pageContent: function() {
           return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});
