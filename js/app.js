'use strict';
var app = angular.module('app', ['ngRoute', 'appControllers', 'appFilters', 'appServices', 'appDirectives']);

/**
 * Define routes
 */
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);
