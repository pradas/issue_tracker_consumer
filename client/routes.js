var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'home.html',
			controller: 'issueCtrl'
		})
		.when('/create', {
			templateUrl: 'create.html',
			controller: 'StudentController'
		})
		.when('/show', {
			templateUrl: 'show.html',
			controller: 'StudentController'
		})
		.when('/submit', {
			templateUrl: 'home.html',
			controller: 'newIssueCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});