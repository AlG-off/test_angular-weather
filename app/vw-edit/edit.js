app.controller('EditCtrl', ['$scope','$state', 'dataservice',
    function($scope, $state, dataservice) {
        $scope.selectCity = dataservice.getTempStore();
        $scope.cities = dataservice.getCitiesList();
        $scope.precipitation = dataservice.getPrecipitationList();
        $scope.addWeather = addWeather;
        $scope.cancel = cancel;

        function addWeather(data){
            dataservice.setWeather(data)
            cancel();
        }

        function cancel(){
            dataservice.setTempStore(null);
            $state.go('list');
        }
    }
]);