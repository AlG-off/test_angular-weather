app.controller('EditCtrl', ['$scope', 'dataservice',
    function($scope, dataservice) {
        $scope.selectCity = dataservice.getTempStore();
        $scope.cities = dataservice.getCitiesList();
        $scope.precipitation = dataservice.getPrecipitationList()
    }
]);