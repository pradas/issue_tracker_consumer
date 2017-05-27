var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl : 'index.html',
      controller : 'mainController'
  })
  .when('/create', {
      templateUrl : 'create.html',
      controller : 'createController'
  })
  .otherwise({
      redirectTo: '/'
  });
});

myApp.controller('mainController', function($scope) {
	$scope.message = 'Hola, Mundo!';
});

myApp.controller('createController', function($scope) {
	$scope.message = 'Esta es la página "Create"';
});