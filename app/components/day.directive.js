app.directive("day", function ()
{
    return {
        restrict: 'E',
        templateUrl: "components/day.directive.html",
        scope: {
            weather: '='
        }
    }
});