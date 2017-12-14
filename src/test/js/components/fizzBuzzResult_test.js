describe('Unit tests for fizzBuzzResults component', function () {

    beforeEach(module('fizzbuzz'));

    describe('FizzBuzzResults controller', function () {
        var $scope;
        var fizzBuzzResultsController;
        var fizzBuzzResultsService;
        var $q;

        beforeEach(inject(function (_$rootScope_, $componentController, _fizzBuzzResultsService_, _$q_) {
            $scope = _$rootScope_.$new();
            fizzBuzzResultsService = _fizzBuzzResultsService_;
            $q = _$q_;

            spyOn(fizzBuzzResultsService, 'getResults').andReturn([{30: 'FizzBuzz'}]);

            fizzBuzzResultsController = $componentController('fizzBuzzResults', {$scope: $scope, fizzBuzzResultsService: fizzBuzzResultsService});
        }));

        it('FizzBuzzResults controller created', function () {
            expect(fizzBuzzResultsController).toBeDefined();
        });

        it('FizzBuzzResults get results from FizzBuzzResultsService', function () {
            expect(fizzBuzzResultsController.results).toEqual([{30: 'FizzBuzz'}]);
        });

        it('FizzBuzzResults get results from FizzBuzzResultsService by $scope.$on', function () {
            $scope.$broadcast('getEvaluatedNumber', {results:[{30: 'FizzBuzz'},{5: 'Buzz'}]});
            expect(fizzBuzzResultsController.results).toEqual([{30: 'FizzBuzz'},{5: 'Buzz'}]);
        });

    });

});