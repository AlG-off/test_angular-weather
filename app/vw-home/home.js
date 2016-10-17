app.controller('HomeCtrl', ['$scope', 'dataservice',
    function($scope, dataservice) {
        var weatherList = dataservice.getWeatherList();
        $scope.today = weatherList[0];
        $scope.otherDays = weatherList.slice(1)
    }
]);