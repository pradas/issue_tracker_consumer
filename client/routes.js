var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'getIssuesCtrl'
		})
		.when('/create', {
			templateUrl: 'create.html',
			controller: 'getIssuesCtrl'
		})
		.when('/show', {
			templateUrl: 'show.html',
			controller: 'getIssuesCtrl'
		})
		.when('/submit', {
			templateUrl: 'home.html',
			controller: 'newIssueCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});