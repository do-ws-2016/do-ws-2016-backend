'use strict';

/**
 * @ngdoc service
 * @name backendApp.listService
 * @description
 * # listService
 * Service in the backendApp.
 */
angular.module('backendApp')
    .service('listService', function ($q, server, $resource) {

        var List = $resource(
            server.url + '/list/:'
        );


        //service.get = function(params){
        //
        //    params = params || {};
        //
        //
        //
        //
        //};
        //
        //service.delete = function(){
        //
        //    var deferred = $q.defer();
        //
        //    deferred.resolve(true);
        //
        //    return deferred.promise;
        //
        //};



        return List;

    });
