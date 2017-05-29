'use strict';
var app = angular.module('mainApp');

app.controller('showIssueCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
   
  
    
    $http.get('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id, config).
    then(function(response) {
        $scope.issue = response.data;
    });
    
    app.controller('voteIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    $scope.submit = function () {
        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams + '/votes', config)
        .success(function (status, headers, config) {
            window.location.href = '/issues/' + $routeParams.id;
        })
        .error(function (status, header, config) {
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
    
}]);

}]);