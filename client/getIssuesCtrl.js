'use strict';

var app = angular.module('myApp', []);

app.controller('getIssuesCtrl', function($scope, $http) {
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues").header("Authorization: 110490905416396817633").then(function(response) {
        $scope.myData = response.data.issues;
    });
});