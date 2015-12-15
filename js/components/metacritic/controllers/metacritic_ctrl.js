define( [ 'angular', 'metacritic' ], function( angular ) {
  'use strict';

  angular
  .module('metacritic.controllers')
  .controller( 'MetacriticCtrl', ['$scope', '$http', '$templateCache',
  	function MetacriticCtrl($scope, $http, $templateCache) {
  		$scope.loading = true;
  		$scope.header = {
	  		'X-Mashape-Key': '6SwGetuZ84msh5edfNEcBHbqNBbpp1Wq0QyjsnlRiyE2Ug77R1',
	  		'Accept': 'application/json'
	  	};
	  	$scope.url = 'https://metacritic-2.p.mashape.com/movie-list/coming-soon';

		$http({
			method: 'GET',
			url: $scope.url,
			headers: $scope.header,
			cache: $templateCache
		})
			.success(function(data) {
				$scope.status = 'OK';
				$scope.data = data;
			})
			.catch(function(err) {
				$scope.status = 'Request failed';
				$scope.data = err;
			})
			.finally(function() {
				$scope.loading = false;
			});
    }]
  );

});