app.factory('dataservice', ['restService' , 
    function(restService){
        var weatherList = restService.getWeatherList(),
            citiesList = restService.getCitiesList(),
            PRECIPICATION_LIST = restService.getPrecipitationList(),
            tempStore = null;


        return {
            getCitiesList : getCitiesList,
            getPrecipitationList : getPrecipitationList,
            getWeatherList : getWeatherList,
            getTempStore : getTempStore,
            setTempStore : setTempStore
        };
        function getCitiesList(){
            return citiesList;
        }
        function getPrecipitationList(){
            return PRECIPICATION_LIST
        }
        function getWeatherList(){
            return weatherList;
        }
        function  getTempStore(){
            return tempStore;
        }
        function setTempStore(data){
            tempStore = data;
        }
}]);