var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'StudentController'
		})
		.when('/create', {
			templateUrl: 'create.html',
			controller: 'StudentController'
		})
		.when('/show', {
			templateUrl: 'show.html',
			controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});