'use strict';

/**
 * @ngdoc service
 * @name backendApp.listService
 * @description
 * # listService
 * Service in the backendApp.
 */
angular.module('backendApp')
    .service('listService', function ($q, server, $resource, $log) {

        var List = $resource(
            server.url + '/list/:id',
            {
                id : '@id'
            }
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



        return { List : List };

    });
