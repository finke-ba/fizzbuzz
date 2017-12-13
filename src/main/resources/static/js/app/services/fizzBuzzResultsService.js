angular.module("fizzbuzz").service("fizzBuzzResultsService", ['$http', 'broadcastService', function ($http, broadcastService) {

    var service = this;
    this.results = [];

    this.getEvaluatedNumber = function (number) {
        return $http.get('fizzbuzz/api/evaluate/' + number).then(function (response) {
            service.results.push(response.data);
            broadcastService.send('getEvaluatedNumber', {
                results: service.results
            });
            return response.data;
        })
    };

    this.getResults = function () {
        return this.results;
    }

}]);