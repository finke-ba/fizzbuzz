angular.module('fizzbuzz').component('fizzBuzzResults', {
    templateUrl: "fizzBuzzResults.html",
    controller: FizzBuzzResultsController,
    controllerAs: "ctrl",
    $inject: ['$http', '$scope', 'fizzBuzzResultsService']
});

function FizzBuzzResultsController($http, $scope, fizzBuzzResultsService) {
    var ctrl = this;
    ctrl.results = fizzBuzzResultsService.getResults();
    ctrl.isShow = ctrl.results.length > 0;

    $scope.$on('getEvaluatedNumber', function (event, args) {
        ctrl.results = args.results;
        ctrl.isShow = ctrl.results.length > 0;
    })

}