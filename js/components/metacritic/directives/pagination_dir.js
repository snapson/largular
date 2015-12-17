define( [ 'angular', '../module' ], function( angular ) {
  'use strict';

  angular
    .module( 'metacritic.directives' )
    .directive( 'pagination', ['Template', function PaginationDir(Template) {
        return {
            restrict: 'E',
            link: function ($scope, element, attrs) {},
            templateUrl: Template.view('metacritic', 'pagination_tpl')
        };
    }]);

});