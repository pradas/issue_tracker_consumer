'use strict';

var app = angular.module('mainApp');

app.controller('getIssuesCtrl', function($scope, $http) {
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues").then(function(response) {
        $scope.myData = response.data.issues;
    });
});