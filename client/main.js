var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl : 'index.html',
		})
		.when('/create', {
			templateUrl : 'create.html',
		})
		.otherwise({
			redirectTo: '/index'
		});
});