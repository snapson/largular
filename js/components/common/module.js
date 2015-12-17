define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'common.providers', [] );

	return angular.module('common', [
		'common.providers'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider',
		function CommonModuleConfig($routeProvider, $locationProvider, TemplateProvider) {

		}
	]);

});