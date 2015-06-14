
angular.module('getCategories', ['ui.bootstrap']);
angular.module('getCategories').controller('Accordion', function($scope, $http) {
    $http.get("http://gist.githubusercontent.com/anthonyarcidiacono/9ed3af2d52c05380551b/raw/3b22bcb7be2ab4e71b434671910f8420b3d17a10/gistfile1.js")
        .success(function(response) {
            $scope.categories = response;
        });
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});

var app = angular.module('myApp', []);

    angular.module('myApp', ['uiGmapgoogle-maps']);

    app.controller('resultsCtrl', function($scope, $http) {
        $http.get("https://gist.githubusercontent.com/martimatix/8fdbbcd613cc9b228144/raw/066f120ea50c5d0496f163cec00701cf7b87b7f9/results.json")
            .success(function(response) {
                $scope.results = response;
                var lat = $scope.results[0].locations[0].latitude;
                var lng = $scope.results[0].locations[0].longitude;
                $scope.map = { center: { latitude: lat, longitude: lng }, zoom: 8 };
            });
    });
