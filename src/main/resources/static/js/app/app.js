var app = angular.module('fizzbuzz', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/info', {
            templateUrl: 'info.html'
        })
        .when('/fizzbuzz', {
            templateUrl: 'fizzbuzz.html'
        })
        .otherwise({
            redirectTo: '/info'
        })

}]);