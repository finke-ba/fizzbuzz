describe('Unit tests for broadcastService', function () {

    beforeEach(module('fizzbuzz'));

    describe('BroadcastService', function () {
        var $scope;
        var broadcastService;

        beforeEach(inject(function (_$rootScope_, _broadcastService_) {
            $scope = _$rootScope_.$new();
            broadcastService = _broadcastService_;
        }));

        it('BroadcastService created', function () {
            expect(broadcastService).toBeDefined();
        });

        it('FizzBuzzResults get results from FizzBuzzResultsService by $scope.$on', function () {
            // $scope.$broadcast('getEvaluatedNumber', {results:[{30: 'FizzBuzz'},{5: 'Buzz'}]});
            broadcastService.send('sendData', {result:'data to send'});

            $scope.$on('sendData', function (event, args) {
                expect(args.results).toEqual('data to send');
            });
        });

    });

});