app.service("restService", ["$http", "$q", 
    function($http, $q) {
        this.getCities = function () {
           var list;
            $http.get('../data.json')
                .success(function(data){
                    list = data;
                })
            console.log(list);
            return list;
        };
        this.getPrecipitation = function () {

        };
    }
]);