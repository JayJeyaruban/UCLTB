angular.module('controllers', [])



.controller('MainMenuController', ['$scope', function($scope) {
	$scope.menuitems = [
		//  'General Information', 'Clinical Services', 'Quiz', 'Research', 'Feedback'
		{
			name: 'About TB',
			filename: 'geninfo'
		}, {
			name: 'About Our Service',
			filename: 'clinserv'
		}, {
			name: 'About Our Research',
			filename: 'research'
		}, {
			
			name: 'Test Your Knowledge',
			filename: 'quiz'
		}, {
			name: 'Give Us Feedback',
			filename: 'feedback'
		}
	];
}])

.controller('GenInfoController', ['$scope', '$http', function($scope, $http) {

}])

.controller('ClinServController', ['$scope', function($scope) {
	$scope.menuitems = [
		{
			name: 'Clinical Schedule',
			filename: 'schedule'
		}, {
			name: 'Staff',
			filename: 'staff'
		}
	];
}])

.controller('ScheduleController', ['$scope', function($scope) {

}])

.controller('StaffController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/staff.json').success(function(data) {
		$scope.stafflist = data;
	});
}])

.controller('QuizController', ['$scope', function($scope) {

}])

.controller('Question1Controller', ['$scope', function($scope) {
$scope.menuitems = [
		{
			option: 'True',
			filename: 'correctAns'
		}, {
			option: 'False',
			filename: 'incorrectAns'
		}
	];
}])

.controller('ResearchController', ['$scope', function($scope) {
	$scope.menuitems = [
		{
			name: 'Research Project 1',
			filename: 'project1'
		}, {
			name: 'Research Project 2',
			filename: 'project2'
		}
	];
}])

.controller('incorrectController', ['$scope', function($scope) {

}])

.controller('correctController', ['$scope', function($scope) {

}])

.controller('Project1Controller', ['$scope', function($scope) {

}])

.controller('Project2Controller', ['$scope', function($scope) {

}])

.controller('FeedbackController', ['$scope', function($scope) {

}]);


angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

 // Triggered on a button click, or some other target
 $scope.showPopup = function() {
   $scope.data = {}

   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     template: '<input type="password" ng-model="data.wifi">',
     title: 'Enter Wi-Fi Password',
     subTitle: 'Please use normal things',
     scope: $scope,
     buttons: [
       { text: 'Cancel' },
       {
         text: '<b>Save</b>',
         type: 'button-positive',
         onTap: function(e) {
           if (!$scope.data.wifi) {
             //don't allow the user to close unless he enters wifi password
             e.preventDefault();
           } else {
             return $scope.data.wifi;
           }
         }
       },
     ]
   });
   myPopup.then(function(res) {
     console.log('Tapped!', res);
   });
   $timeout(function() {
      myPopup.close(); //close the popup after 3 seconds for some reason
   }, 3000);
  };
   // A confirm dialog
   $scope.showConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Consume Ice Cream',
       template: 'Are you sure you want to eat this ice cream?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         console.log('You are sure');
       } else {
         console.log('You are not sure');
       }
     });
   };

   // An alert dialog
   $scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Don\'t eat that!',
       template: 'It might taste good'
     });
     alertPopup.then(function(res) {
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };
});
