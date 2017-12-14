describe('Unit tests for fizzBuzzEvaluator component', function () {

    beforeEach(module('fizzbuzz'));

    describe('FizzBuzzEvaluator controller', function () {
        var $scope;
        var fizzBuzzEvaluatorController;
        var fizzBuzzResultsService;
        var $q;

        beforeEach(inject(function (_$rootScope_, $componentController, _fizzBuzzResultsService_, _$q_) {
            $scope = _$rootScope_.$new();
            fizzBuzzResultsService = _fizzBuzzResultsService_;
            $q = _$q_;

            spyOn(fizzBuzzResultsService, 'getEvaluatedNumber').andCallFake(function(number) {
                var deferred = $q.defer();
                deferred.resolve(number);
                return deferred.promise;
            });

            console.log = jasmine.createSpy("log");

            fizzBuzzEvaluatorController = $componentController('fizzBuzzEvaluator', {fizzBuzzResultsService: fizzBuzzResultsService});
        }));

        it('FizzBuzzEvaluator controller created', function () {
            expect(fizzBuzzEvaluatorController).toBeDefined();
        });

        it('FizzBuzzEvaluator controller evaluate number', function () {

            fizzBuzzEvaluatorController.number = 1;
            fizzBuzzEvaluatorController.evaluateNumber();
            $scope.$apply();

            expect(console.log).toHaveBeenCalledWith('Get evaluated response', 1);
        });
    });

});