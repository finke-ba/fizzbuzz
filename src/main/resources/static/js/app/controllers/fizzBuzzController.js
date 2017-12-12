angular.module('fizzbuzz').controller('fizzBuzzController', ['$http', function ($http) {
    var ctrl = this;

    ctrl.evaluateNumber = function () {
        $http.get('fizzbuzz/evaluate/' + ctrl.number).then(function (response) {
            ctrl.result = response.data;
        }, function (error) {
            console.log(error.data);
            console.log(error.message);
        })
    }

}]);