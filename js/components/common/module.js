define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'common.providers', [] );
	angular.module( 'common.directives', [] );

	return angular.module('common', [
		'common.providers',
		'common.directives'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function CommonModuleConfig($routeProvider, $locationProvider, TemplateProvider) {
		$routeProvider
			.when( '/404', {
				templateUrl: TemplateProvider.view( 'common', '404' ),
				public: true
		});
	}]);

});