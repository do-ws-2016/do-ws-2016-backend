'use strict';

/**
 * @ngdoc overview
 * @name backendApp
 * @description
 * # backendApp
 *
 * Main module of the application.
 */
angular
    .module('backendApp', [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'datatables',
        'angularModalService',
        'toastr'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/receipts', {
                templateUrl: 'views/receipt.html',
                controller: 'ReceiptCtrl'
            })
            .when('/list', {
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            })
            .when('/list/:id', {
                templateUrl: 'views/listEdit.html',
                controller: 'ListEditCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
