angular.module('fizzbuzz').directive('ulActiveLink', ['$location', function ($location) {
    return {
        restrict: 'A',
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['#!' + $location.path().substr(1,$location.path().length)];
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');
                    }
                });
            });
        }
    }
}]);