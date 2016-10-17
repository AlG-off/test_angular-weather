app.controller('ListCtrl', ['$scope','$state', 'dataservice',
    function($scope, $state, dataservice) {
        $scope.weatherList = dataservice.getWeatherList();
        $scope.allChecked = false;

        //$scope.activateBtnDelete = activateBtnDelete;
        $scope.chooseAllWeathers = chooseAllWeathers;
        $scope.delWeather = delWeather;
        $scope.editWeather = editWeather;
        $scope.sortList = {
            fieldName: undefined,
            reverse : false,
            sort: function (fieldName){
                if(this.fieldName === fieldName){
                    this.reverse = !this.reverse;
                }else{
                    this.fieldName = fieldName;
                    this.reverse = false;
                }
            },
            isSortUp: function (fieldName){
                return this.fieldName === fieldName && !this.reverse;
            },
            isSortDown: function (fieldName){
                return this.fieldName === fieldName && this.reverse;
            }
        };

        function editWeather(weather) {
            var newWeather = angular.copy(weather);
            dataservice.setTempStore(newWeather);
            $state.go('edit',{id:weather.id});
        }
        function delWeather(id, index){
            var isDelWeather = confirm("Вы действидельно хотите безвозвратно удалить эту запись?")
            if(!isDelWeather) return;
            dataservice.delWeather(id);
            $scope.weatherList.splice(index,1);
        }
        function chooseAllWeathers() {
            if ($scope.allChecked) {
                $scope.weatherList.forEach(function(item) {
                    item.isChecked = true;
                });
//                $scope.disableBtnArchive = false;
            } else {
                $scope.weatherList.forEach(function (item) {
                    item.isChecked = false;
                });
//                $scope.disableBtnArchive = true;
            }
        }
        
    }
]);