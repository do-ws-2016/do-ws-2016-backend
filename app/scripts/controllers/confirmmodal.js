'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:ConfirmmodalCtrl
 * @description
 * # ConfirmmodalCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
    .controller('confirmModalCtrl', function (close, item, $scope) {

        $scope.item = item;

        $scope.reject = function(){
            close(false, 200);
        };

        $scope.ok = function(){
            close(true, 200);
        };
    });
