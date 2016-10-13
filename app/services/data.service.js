app.factory('dataservice', ['restService' , 
    function(restService){
        return {
            getCities : getCities,
            getPrecipitation : getPrecipitation
        }    
}]);