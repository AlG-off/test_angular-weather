app.service("restService", ["$http", "$q", 
    function($http, $q) {
        this.getCitiesList = function(city) {
/*           var list;
            $http.get('../data.json')
                .success(function(data){
                    list = data;
                })
            console.log(list);
            return list;*/
            var list = [
                {
                    "name": "Samara",
                    "id": 0
                },
                {
                    "name": "Moscow",
                    "id": 1
                },
                {
                    "name": "Kazan",
                    "id": 2
                },
                {
                    "name": "Yakutsk",
                    "id": 3
                },
                {
                    "name": "Adler",
                    "id": 4
                }
            ]
            console.log(list);
            return list;
        };
        this.getPrecipitationList = function() {
            var list = [
                {
                    "id": 0,
                    "description": "sunny"
                },
                {
                    "id": 1,
                    "description": "cloudy"
                },
                {
                    "id": 2,
                    "description": "cloud"
                },
                {
                    "id": 3,
                    "description": "rainy"
                },
                {
                    "id": 4,
                    "description": "snowy"
                }
            ];
            console.log(list);
            return list;
        };
        this.getWeatherList = function() {
            var list = [
                {
                    "nameCity": "Samara",
                    "date": "Thu Oct 13 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "sunny",
                    "tNight": "3",
                    "tDay": "7",
                    "id": 0
                },
                {
                    "nameCity": "Samara",
                    "date": "Fri Oct 14 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "cloudy",
                    "tNight": "3",
                    "tDay": "7",
                    "id": 1
                },    {
                    "nameCity": "Samara",
                    "date": "Sat Oct 15 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "sunny",
                    "tNight": "3",
                    "tDay": "7",
                    "id": 2
                },    {
                    "nameCity": "Samara",
                    "date": "sunny Oct 16 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "rainy",
                    "tNight": "2",
                    "tDay": "4",
                    "id": 3
                },    {
                    "nameCity": "Samara",
                    "date": "Mon Oct 17 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "snowy",
                    "tNight": "-3",
                    "tDay": "2",
                    "id": 4
                },
                {
                    "nameCity": "Samara",
                    "date": "Thu Oct 13 2016 00:00:00 GMT+0400 (RTZ 3 (зима))",
                    "precipitation": "cloudy",
                    "tNight": "1",
                    "tDay": "5",
                    "id": 5
                }
            ];
            var str = JSON.stringify(list);
            list = JSON.parse(str, function(key, value) {
                if (key == 'date') return new Date(value);
                return value;
            });
            console.log(list);
            return list;
        };
        this.setWeather = function(data){

        }
    }
]);