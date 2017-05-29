'use strict';
var app = angular.module('myApp', []);

app.controller('newIssueCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.submitIssueForm = function() {
        var title = document.getElementById("title").value;
        var description = document.getElementById("description").value;
        var user = document.getElementById("user").value;
        var kind = document.getElementById("kind").value;
        var priority = document.getElementById("prior").value;
        if (title == "") {
            alert("You need to specify a title for the issue");
        } else {
            $http.post('http://fast-lake-76623.herokuapp.com/api/issues').headers('Authorization: 110490905416396817633')
                . error(function (data,status, config) {
                    if (status == 400) {
                        alert("Missing parameters");
                    }
                    else if (status == 401) {
                        alert("Invalid request");
                    }
                })
                .then(function(response) {
                    window.location.href = "#home"
                });
        }
    };
}]);