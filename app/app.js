'use strict';

var app = angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
               .state('home', {
                    url: '/home',
                    views: {
                        'content@': {
                            templateUrl: 'vw-home/home.html',
                            controller: 'HomeCtrl'
                        }
                    }
               })
               .state('list', {
                    url: '/list',
                    views: {
                        'content@': {
                            templateUrl: 'vw-list/list.html',
                            controller: 'ListCtrl'
                        }
                    }
               })
               .state('add', {
                    parent: 'list',
                    url: '/add',
                    views: {
                        'content@': {
                            templateUrl: 'vw-edit/edit.html',
                            controller: 'EditCtrl'
                        }
                    }
               })
               .state('edit', {
                    parent: 'list',
                    url: '/edit/:id',
                    views: {
                        'content@': {
                            templateUrl: 'vw-edit/edit.html',
                            controller: 'EditCtrl'
                        }
                    }
               });
        }
    ])
    .controller('MainCtrl', ['$scope', '$mdSidenav', 'dataservice',
        function($scope, $mdSidenav, dataservice) {
            $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
            $scope.geolocation = dataservice.getCitiesList()[0].name;
        }
    ]);

