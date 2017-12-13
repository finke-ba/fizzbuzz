var app = angular.module('fizzbuzz', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/info', {
            templateUrl: 'info.html'
        })
        .when('/fizzbuzz', {
            templateUrl: 'fizzbuzz.html'
        })
        .when('/docs', {
            templateUrl: 'api-doc.html'
        })
        .otherwise({
            redirectTo: '/info'
        })

}]);