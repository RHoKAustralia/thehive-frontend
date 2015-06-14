angular.module('getCategories', ['ui.bootstrap']);
angular.module('getCategories').controller('Accordion', function($scope, $http) {
    $http.get("http://ec2-52-64-56-176.ap-southeast-2.compute.amazonaws.com/api/category")
        .success(function(response) {
            $scope.categories = response;
        });
    $scope.oneAtATime = true;
    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
});