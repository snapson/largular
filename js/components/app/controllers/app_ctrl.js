define( [ 'angular', 'app' ], function( angular ) {
	'use strict';
	angular
	.module( 'app.controllers' )
	.controller( 'AppCtrl', ['$scope', '$timeout', function AppCtrl($scope, $timeout) {
		$scope.currentUser  = 'nick';
	}])
	.controller('ErrorCtrl', ['$scope', '$route', function ErrorCtrl($scope, $route) {
	}]);
});