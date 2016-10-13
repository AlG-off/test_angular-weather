'use strict';

var app = angular.module('app', ['ui.router', 'ngMaterial'])
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
                    url: '/edit',
                    views: {
                        'content@': {
                            templateUrl: 'vw-edit/edit.html',
                            controller: 'EditCtrl'
                        }
                    }
               });
        }
    ])
    .controller('MainCtrl', ['$scope', '$mdSidenav',
        function($scope, $mdSidenav) {
            $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
        }
    ])
    .controller('SidenavCtrl', ['$scope', '$mdSidenav',
        function($scope, $mdSidenav) {
            $scope.closeLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
        }
    ])
