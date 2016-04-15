'use strict';

/**
 * @ngdoc function
 * @name app.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the app
 */
angular.module('app')

.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, pageContent) {

  $scope.pageContent = pageContent;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  $scope.ok = function() {
    $uibModalInstance.close($scope.pageContent);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
