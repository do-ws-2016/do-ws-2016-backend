'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:EditstepCtrl
 * @description
 * # EditstepCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
    .controller('EditStepCtrl', function ($scope, close, step) {

        var originStep = angular.copy(step);

        $scope.step = originStep || {};

        $scope.save = function(){
            close({status : true, data: $scope.step}, 200);
        };

        $scope.reject = function(){
            close({status : false, data: step}, 200);
        }


    });
