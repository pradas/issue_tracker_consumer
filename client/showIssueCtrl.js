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
}]); 

  
app.controller('createComment', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$scope.submit = function () {
    var data = {
            text: document.getElementById('comment-text')
        };
    
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }

    $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/comments', data, config)
    .success(function (data, status, headers, config) {
        console.log(data)
        window.location.href = '#/issues/' + $routeParams.id;
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
}]);
    
app.controller('voteIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$scope.submit = function () {
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }

    $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/votes', null, config)
    .success(function (data, status, headers, config) {
        window.location.href = '#/issues/' + $routeParams.id;
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
}]);

app.controller('unvoteIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$scope.submit = function () {
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }

    $http.delete('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/votes', config)
    .success(function (data, status, headers, config) {
        window.location.href = '#/issues/' + $routeParams.id;
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
}]);

app.controller('watchIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$scope.submit = function () {
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }

    $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/watchers', null, config)
    .success(function (data, status, headers, config) {
        window.location.href = '#/issues/' + $routeParams.id;
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
}]);

app.controller('unwatchIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

$scope.submit = function () {
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }

    $http.delete('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/watchers', config)
    .success(function (data, status, headers, config) {
        window.location.href = '#/issues/' + $routeParams.id;
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
}]);

app.controller('editIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues" + $routeParams.id).then(function(response) {
        $scope = response.data;
    });

    $scope.submit = function () {
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
    
        $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/votes', config)
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

app.controller('deleteIssue', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
    
        $http.post('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id, config)
        .success(function (status, headers, config) {
            window.location.href = '/';
        })
        .error(function (status, header, config) {
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
}]);