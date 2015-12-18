define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'app.controllers', [] );
	angular.module( 'app.directives', [] );

	return angular.module('app', [
		'ngRoute',
		'app.controllers',
		'app.directives',
		'common',
		'mymodule',
		'metacritic'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function AppModuleConfig($routeProvider, $locationProvider, $templateProvider) {
		$locationProvider.html5Mode( true );
		$routeProvider
			.when( '/', {
				controller: 'AppCtrl',
				template: '<metacritic></metacritic>'
			}, {
				controller: 'MetacriticCtrl'
			})
			.when( '/404', {
				templateUrl: $templateProvider.view( 'app', '404' ),
				controller: 'ErrorCtrl',
				isError: true
			})
			.otherwise({ redirectTo: '/' });
	}]);

});