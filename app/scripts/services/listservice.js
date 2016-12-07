'use strict';

/**
 * @ngdoc service
 * @name backendApp.listService
 * @description
 * # listService
 * Service in the backendApp.
 */
angular.module('backendApp')
    .service('listService', function ($q) {

        var service = {};

        service.delete = function(){

            var deferred = $q.defer();

            deferred.resolve(true);

            return deferred.promise;

        };



        return service;

    });
