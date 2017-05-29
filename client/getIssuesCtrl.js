'use strict';

var app = angular.module('mainApp');

app.controller('getIssuesCtrl', function($scope, $http) {
    var config = {headers:  {
            'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
            'Accept': 'application/json;odata=verbose',
            "X-Testing" : "testing"
        }
    };
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues", config).then(function(response) {
        $scope.myData = response.data.issues;
    });
});