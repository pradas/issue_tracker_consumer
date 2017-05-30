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

  
app.controller('createComment', function($scope, $http, $routeParams) {

$scope.sendComment = function () {
    var data = {
            text: $scope.comment
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
        location.reload(); 
    })
    .error(function (data, status, header, config) {
        console.log(data)
        $scope.ResponseDetails ="<hr />status: " + status +
            "<hr />headers: " + header +
            "<hr />config: " + config;
    });
};
});


app.controller('deleteComment', function($scope, $http, $routeParams) {
    $scope.delete = function (comment_id) {

        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
        
        $http.delete('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/comments/' + comment_id, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            location.reload(); 
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
});

app.controller('deleteAttachment', function($scope, $http, $routeParams) {
    $scope.delete = function (attachment_id) {

        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
        
        $http.delete('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/attachments/' + attachment_id, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            location.reload(); 
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
});


app.controller('editForm', function($scope, $http, $routeParams) {
    $scope.editForm = function (id) {
        $('.comment-'+id).toggle();
    };
});

app.controller('editComment', function($scope, $http, $routeParams) {
    $scope.editComment = function (id) {
        var data = {
            text: $scope.commentToSend
        };
        
        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
    
        $http.put('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id + '/comments/' + id, data, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            location.reload(); 
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });    
        
    };
});



    
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

app.controller('editIssue', function($scope, $http, $routeParams) {
    
    $http.get("http://fast-lake-76623.herokuapp.com/api/users").then(function(response) {
        $scope.users = response.data.users;
    });
    
    var config = {
        headers : {
            'Authorization': '110490905416396817633',
            'Content-Type': 'application/json'
        }
    }
    $http.get("http://fast-lake-76623.herokuapp.com/api/issues/" + $routeParams.id, config).then(function(response) {
        $scope.title = response.data.title;
        $scope.description = response.data.description;
        $scope.userissue = response.data.user_id;
        $scope.kind = response.data.kind;
        $scope.prior = response.data.priority;
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
    
        $http.put('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id, data, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            window.location.href = '#/issues/' + $routeParams.id;
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
});

app.controller('deleteIssue', function($scope, $http, $routeParams) {
    $scope.delete = function () {

        var config = {
            headers : {
                'Authorization': '110490905416396817633',
                'Content-Type': 'application/json'
            }
        }
    
        $http.delete('http://fast-lake-76623.herokuapp.com/api/issues/' + $routeParams.id, config)
        .success(function (data, status, headers, config) {
            console.log(data);
            window.location.href = '/';
        })
        .error(function (data, status, header, config) {
            console.log(data);
            $scope.ResponseDetails ="<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
        });
    };
});