define( [ 'angular', 'jquery', '../module' ], function( angular ) {
  'use strict';

  angular
    .module( 'metacritic.directives' )
    .directive( 'metacritic', ['Template', function MetacriticDir(Template) {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {},
            templateUrl: Template.view('metacritic', 'metacritic_tpl')
        };
    }]);

});