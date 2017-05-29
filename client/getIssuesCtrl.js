'use strict';

var app = angular.module('mainApp');

app.controller('getIssuesCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    console.log($routeParams);
        var q2 = "";
        if ($routeParams.direction!= null && $routeParams.sort != null) 
          q2+= "direction="+$routeParams.direction+"&sort="+$routeParams.sort;

        if($routeParams.kind!=null) q2 +="&kind="+$routeParams.kind;
        if($routeParams.status!=null) q2 +="&status="+$routeParams.status;
        if($routeParams.priority!=null) q2 +="&priority="+$routeParams.priority;
        if($routeParams.responsible!=null) q2 +="&responsible="+$routeParams.responsible;
        
        $http.get("http://fast-lake-76623.herokuapp.com/api/issues?"+q2).then(function(response) {
           $scope.myData = response.data.issues;
 
        });

}]);

app.controller('createIssue', function($scope, $http) {
    
    $http.get("http://fast-lake-76623.herokuapp.com/api/users").then(function(response) {
        $scope.users = response.data.users;
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