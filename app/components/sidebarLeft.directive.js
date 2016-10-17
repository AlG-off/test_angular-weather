app.directive("sidebarLeft", function ()
{
    return {
        restrict: 'E',
        templateUrl: "components/sidebarLeft.directive.html",
        scope: {
            geolocation: '='
        },
        controllerAs: 'SidebarCtrl',
        controller: function($scope, $mdSidenav, dataservice) {
            $scope.citiesList = dataservice.getCitiesList();
            $scope.closeSidebar = function() {
                $mdSidenav('left').toggle();
            };
            $scope.setGeolocation = function(city) {
                console.log(city);
                $scope.closeSidebar();
            }
        }
    }
});