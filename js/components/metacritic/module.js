define( [ 'angular' ], function( angular ) {

	'use strict';
	angular.module( 'metacritic.directives', [] );

	return angular.module('metacritic', [
		'metacritic.directives'
	])
	.config(['$routeProvider', '$locationProvider', 'TemplateProvider', function MetacriticConfig($routeProvider, $locationProvider, TemplateProvider) {
		//some module config actions here
	}]);

});