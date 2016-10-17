app.controller('ListCtrl', ['$scope','$state', 'dataservice',
    function($scope, $state, dataservice) {
        $scope.weatherList = dataservice.getWeatherList();
        $scope.allRowsChecked = false;
        $scope.activeToolbar = false;
        $scope.hideBtnEdit = true;

        $scope.toggleToolbar = toggleToolbar;
        $scope.toggleSelectAllRows = toggleSelectAllRows;
        $scope.delAllRowWeather = delAllRowWeather;
        $scope.editRowWeather = editRowWeather;
        $scope.unselectAllRows = unselectAllRows;
        $scope.sortList = sortList;

        var sortList = {
            fieldName: undefined,
            reverse : false,
            sort: function (fieldName) {
                if(this.fieldName === fieldName) {
                    this.reverse = !this.reverse;
                }else{
                    this.fieldName = fieldName;
                    this.reverse = false;
                }
            },
            isSortUp: function (fieldName) {
                return this.fieldName === fieldName && !this.reverse;
            },
            isSortDown: function (fieldName) {
                return this.fieldName === fieldName && this.reverse;
            }
        };

        function editRowWeather(weather) {
            var newWeather = angular.copy(weather);
            dataservice.setTempStore(newWeather);
            $state.go('edit',{id:weather.id});
        }

        function delAllRowWeather() {
            $scope.weatherList.forEach(function(item) {
                if(!item.isChecked) return;
                delRowWeather(item);
                $scope.activeToolbar = false;
            })
        }
        function delRowWeather(item) {
            dataservice.delWeather(item.id);
        }
        function toggleSelectAllRows() {
            if ($scope.allRowsChecked) {
                $scope.weatherList.forEach(function(item) {
                    item.isChecked = true;
                });
                $scope.activeToolbar = true;
            } else {
                unselectAllRows();
            }
        }
        function unselectAllRows() {
            $scope.weatherList.forEach(function (item) {
                item.isChecked = false;
            });
            $scope.allRowsChecked = false;
            $scope.activeToolbar = false;
        }
        function toggleToolbar(){
            var result = hasActiveCheckbox();
            $scope.activeToolbar = result;
        }
        function hasActiveCheckbox() {
            return $scope.weatherList.some(function(item) {
                return item.isChecked === true;
            });
        }
    }
]);