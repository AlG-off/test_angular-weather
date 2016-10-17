app.factory('dataservice', ['restService' , 
    function(restService){
        var weatherList = restService.getWeatherList(),
            citiesList = restService.getCitiesList(),
            precipicationList = restService.getPrecipitationList(),
            tempStore = null;


        return {
            getCitiesList : getCitiesList,
            getPrecipitationList : getPrecipitationList,
            getWeatherList : getWeatherList,
            getTempStore : getTempStore,
            setTempStore : setTempStore,
            setWeather : setWeather,
            delWeather : delWeather
        };
        function getCitiesList(){
            return citiesList;
        }
        function getPrecipitationList(){
            return precipicationList
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
        function setWeather(data){
            restService.setWeather(data)
        }
        function delWeather(data){
            restService.setWeather(data)
        }
}]);