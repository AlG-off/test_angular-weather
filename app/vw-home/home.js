app.controller('HomeCtrl', ['$scope', 'dataservice',
    function($scope, dataservice) {
        $scope.weatherList = dataservice.getWeatherList();
    }
]);