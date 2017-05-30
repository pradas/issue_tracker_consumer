var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.controller('navUserName', function($scope, $http, $routeParams) {
    $http.get("http://fast-lake-76623.herokuapp.com/api/users").then(function(response) {
    	$scope.navUser = "Guest";
        response.data.users.forEach(function(element) {
		    if (element.uid == "110490905416396817633") {
		    	$scope.navUser = element.name ;
		    }
		});
    });
});

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
		.when('/edit/:id', {
			templateUrl: 'edit.html',
			controller: 'showIssueCtrl'
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
		.when('/createcomment/:id', {
			templateUrl: 'show.html',
			controller: 'showIssueCtrl'
		})
		.otherwise({
			redirectTo: '/home'
		});
});