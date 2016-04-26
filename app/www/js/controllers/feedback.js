angular.module('app')

/*.controller('FeedbackController', ['$scope', function($scope) {

}]);*/



.factory('Items', ['$firebaseArray', function($firebaseArray) {
  var itemsRef = new Firebase('https://ucltb.firebaseio.com/items/comments');
  return $firebaseArray(itemsRef);
}])

.controller("FeedbackController", function($scope, Items) {

  $scope.comments = Items;

  $scope.addComment = function() {
    var name = prompt("What would you like to comment?");
    if (name) {
      $scope.comments.$add({
        'comment': name
      });
    }
  };
  
  
 
});





/*.factory('Items', ['$firebaseArray', function($firebaseArray) {
  var itemsRef = new Firebase('https://ucltb.firebaseio.com/items');
  return $firebaseArray(itemsRef);
}])

.controller("FeedbackController", function($scope, Items) {

  $scope.items = Items;

  $scope.addItem = function() {
    var name = prompt("What would you like to comment?");
    if (name) {
      $scope.items.$add({
        'name': name
      });
    }
  };
  
  
 
});*/