'use strict';
var app = angular.module('app', ['ngRoute', 'appControllers', 'appFilters', 'appServices', 'appDirectives']);

/**
 * Define routes
 */
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/partial1', {
		templateUrl: 'partials/partial1.html',
		controller: 'HomeController'
	}).
	when('/partial2', {
		templateUrl: 'partials/partial2.html'
	}).
	otherwise({
		redirectTo: '/partial2'
	});
}]);
