define( [ 'angular', 'app' ], function( angular ) {
	'use strict';
	angular
	.module( 'app.controllers' )
	.controller( 'AppCtrl', ['$scope', '$timeout', function AppCtrl($scope, $timeout) {
		$scope.currentUser  = 'nick';

		// $apply() changes with isError set to false
		$scope.$on('$routeChangeSuccess', function(event, current, previous) {
			if (current.$$route.controller == 'AppCtrl') {
				$timeout(function() { $scope.isError = false; }, 100);
			}
		});
		// $apply() changes with isError set to true
		$scope.$on('404', function(evt, isError) {
			$timeout(function() { $scope.isError = isError; }, 100);
		});
	}])
	.controller('ErrorCtrl', ['$scope', '$route', function ErrorCtrl($scope, $route) {
		$scope.$emit('404', $route.current.$$route.isError);
	}]);
});