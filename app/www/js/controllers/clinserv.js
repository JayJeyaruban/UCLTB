angular.module('app')

.controller('ClinServController', ['$scope', function($scope) {
	$scope.menuitems = [
		{
			name: 'Clinical Schedule',
			filename: 'schedule'
		}, {
			name: 'Staff',
			filename: 'staff'
		}, {
			name: 'Contact',
			filename: 'contact'
		}
	];
}])

