angular.module('fizzbuzz').component('fizzBuzzEvaluator', {
    templateUrl: "fizzBuzzEvaluator.html",
    controller: FizzBuzzEvaluatorController,
    controllerAs: "ctrl",
    $inject: ['$http']
});

function FizzBuzzEvaluatorController($http) {
    var ctrl = this;
    ctrl.results = [];

    ctrl.evaluateNumber = function () {
        $http.get('fizzbuzz/evaluate/' + ctrl.number).then(function (response) {
            ctrl.results.push(response.data);
            ctrl.number = null;
        }, function (error) {
            console.log(error.data);
            console.log(error.message);
        })
    }

}