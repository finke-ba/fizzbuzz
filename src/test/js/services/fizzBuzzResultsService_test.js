describe('Unit tests for fizzBuzzResultsService', function () {

    beforeEach(module('fizzbuzz'));

    describe('FizzBuzzResultsService', function () {
        var $rootScope;
        var $scope;
        var $http;
        var fizzBuzzResultsService;
        var $httpBackend;

        beforeEach(inject(function (_$rootScope_, _fizzBuzzResultsService_, _$http_, _$httpBackend_) {
            $scope = _$rootScope_.$new();
            fizzBuzzResultsService = _fizzBuzzResultsService_;
            $http = _$http_;
            $httpBackend = _$httpBackend_;

            $httpBackend
                .when('GET','fizzbuzz/api/evaluate/30')
                .respond({number: 30, fizzbuzz: "FizzBuzz"});
        }));

        it('FizzBuzzResults created', function () {
            expect(fizzBuzzResultsService).toBeDefined();
        });

        it('FizzBuzzResults get results from FizzBuzzResultsService by $scope.$on', function () {
            fizzBuzzResultsService.getEvaluatedNumber(30);
            $httpBackend.flush();
            expect(fizzBuzzResultsService.results).toEqual([{number : 30, fizzbuzz : 'FizzBuzz'}]);
        });

    });

});