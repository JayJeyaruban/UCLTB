angular.module('app')


.controller('ParticipateController', ['$scope', function($scope,$ionicModal) {
  // No need for testing data anymore
  $scope.comments = [];


  // Called when the form is submitted
  $scope.createComment = function(comment) {
    $scope.comments.push({
      title: comment.title,
	  name: comment.name,
	  phone: comment.phone,
	  email: comment.email,
	  message: comment.message  
    });
	
    $scope.commentModal.hide();
    comment.title = "";
	comment.name ="";
	comment.phone="";
	commetn.email="";
	comment.message=""; 
  };


}]);

 



/*.controller('ParticipateController', ['$scope', function($scope,$ionicModal) {
  // No need for testing data anymore
  $scope.comments = [];


  // Called when the form is submitted
  $scope.createComment = function(comment) {
	 alert(comment.message);
    $scope.comments.push({
      title: comment.title,
	  message: comment.message
    });
    $scope.commentModal.hide();
    comment.title = "";
	comment.message ="";
  };


}]);*/


/* To submit finally
.controller('ParticipateController', ['$scope', function($scope,$ionicModal) {
  // No need for testing data anymore
  $scope.comments = [];


  // Called when the form is submitted
  $scope.createComment = function(comment) {
    $scope.comments.push({
      title: comment.title,
	  name: comment.name,
	  phone: comment.phone,
	  email: comment.email,
	  message: comment.message  
    });
	
    $scope.commentModal.hide();
    comment.title = "";
	comment.name ="";
	comment.phone="";
	commetn.email="";
	comment.message=""; 
  };


}]);*/