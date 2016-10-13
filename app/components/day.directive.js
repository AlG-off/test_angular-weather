app.directive("day", function ()
{
    return {
        restrict: 'E',
        templateUrl: "day.directive.html",
        replace: true,
        scope: {
            dataWeather: '='
        }
    }
});