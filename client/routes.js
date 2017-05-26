'use strict';

myApp
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/create", {
        templateUrl : "create.html"
    });
}]);