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
		.when('/issues/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.when('/submit', {
			templateUrl: 'home.html',
			controller: 'newIssueCtrl'
		})
		.when('/watch/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.when('/unwatch/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.when('/vote/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.when('/unvote/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});