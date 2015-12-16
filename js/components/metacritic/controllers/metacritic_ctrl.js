define( [ 'angular', 'metacritic' ], function( angular ) {
	'use strict';

	angular
	.module('metacritic.controllers')
	.controller( 'MetacriticCtrl', [
			'$scope',
			'$http',
			'$location',
			'$filter',
			'$templateCache',
		function MetacriticCtrl($scope, $http, $location, $filter, $templateCache) {
			$scope.loading = true;
			$scope.totalCount = 25;
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
					$scope.data = data && data.results;
					$scope.initPagination();
				})
				.catch(function(err) {
					$scope.status = 'Request failed';
					$scope.data = err;
					$location.url('/404');
				})
				.finally(function() {
					$scope.loading = false;
				});

		$scope.resetFilters = function () {
			// needs to be a function or it won't trigger a $watch
			$scope.search = {};
		};
		$scope.initPagination = function() {
			// create empty search model (object) to trigger $watch on update
			$scope.search = {};
			// pagination controls
			$scope.currentPage = 0;
			$scope.totalItems = $scope.data && $scope.data.length;
			$scope.entryLimit = 25; // items per page
			$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

			// $watch search to update pagination
			$scope.$watch('search', function (newVal, oldVal) {
				$scope.filtered = $filter('filter')($scope.data, newVal);
				$scope.totalItems = $scope.filtered.length;
				$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
				$scope.currentPage = 0;
			}, true);
		}
	}])
	.filter('startFrom', function () {
		return function (input, start) {
			if (input) {
				start = +start;
				return input.slice(start);
			}
			return [];
		};
	});
});