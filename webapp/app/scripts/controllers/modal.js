'use strict';

/**
 * @ngdoc function
 * @name app.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the app
 */
angular.module('app')

.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, pageContent, title) {

  $scope.pageContent = pageContent;
  $scope.pageTitle = title;

  $scope.ok = function() {
    $uibModalInstance.close($scope.pageContent);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
