    var app = angular.module('myApp', []);
    app.controller('categoriesCtrl', function($scope, $http) {
        $http.get("http://gist.githubusercontent.com/anthonyarcidiacono/9ed3af2d52c05380551b/raw/3b22bcb7be2ab4e71b434671910f8420b3d17a10/gistfile1.js")
            .success(function(response) {
                $scope.categories = response;
            });
    });