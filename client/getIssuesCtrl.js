'use strict';

var app = angular.module('mainApp');

app.controller('getIssuesCtrl', function($scope, $http) {
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues").then(function(response) {
        $scope.myData = response.data.issues;
    });
});

app.controller('createIssue', function($scope, $http) {
    
    $http.get("http://fast-lake-76623.herokuapp.com/api/issue").then(function(response) {
        $scope.issue = response.data.users;
    });
    
    $scope.submit = function () {
       // use $.param jQuery function to serialize data from JSON 
        var data = {
            title: $scope.title,
            description: $scope.description,
            user_id: $scope.userissue,
            kind: $scope.kind,
            priority: $scope.prior
        };
    
        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }

        $http.post("http://fast-lake-76623.herokuapp.com/api/issues", data, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            window.location.href = '/';
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
    
});