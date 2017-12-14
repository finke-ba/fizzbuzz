angular.module('fizzbuzz').component('fizzBuzzEvaluator', {
    templateUrl: "fizzBuzzEvaluator.html",
    controller: FizzBuzzEvaluatorController,
    controllerAs: "ctrl",
    $inject: ['fizzBuzzResultsService']
});

function FizzBuzzEvaluatorController(fizzBuzzResultsService) {
    var ctrl = this;

    ctrl.evaluateNumber = function () {
        fizzBuzzResultsService.getEvaluatedNumber(ctrl.number)
            .then(function (response) {
                console.log("Get evaluated response", response);
                ctrl.number = null;
            })
            .catch(function (error) {
                console.log(error.data);
                console.log(error.message);
            });
    }

}