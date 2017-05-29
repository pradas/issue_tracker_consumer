'use strict';
var app = angular.module('mainApp');

app.controller('showIssueCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id).
    then(function(response) {
        $scope.issue = response.data;
    });
}]);
    