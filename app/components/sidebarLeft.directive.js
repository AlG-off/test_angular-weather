app.directive("sidebarLeft", function ()
{
    return {
        restrict: 'E',
        templateUrl: "components/sidebarLeft.directive.html",
        scope: {},
        controllerAs: 'SidebarCtrl',
        controller: function($scope, $mdSidenav, dataservice) {
            $scope.closeLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
            $scope.listCities = dataservice.getCitiesList();
        }
    }
});