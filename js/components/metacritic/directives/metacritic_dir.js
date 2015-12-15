define( [ 'angular', '../module' ], function( angular ) {
  'use strict';

  angular
    .module( 'metacritic.directives' )
    .directive( 'metacritic', ['Template', function MetacriticDir(Template) {
        
        console.log(Template.view('metacritic', 'metacritic_tpl'));
        
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {

            },
            templateUrl: Template.view('metacritic', 'metacritic_tpl')
        };
    }]);

});