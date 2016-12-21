'use strict';

/**
 * @ngdoc service
 * @name backendApp.server
 * @description
 * # server
 * Service in the backendApp.
 */
angular.module('backendApp')
    .service('server', function ($location) {

        var server = {}

        ;

        if($location.host() === 'localhost' || $location.host() === '127.0.0.1'){
            server.protocol = 'http';
            server.host = 'localhost';
            server.port = '9001';
        }


        server.url =
            server.protocol + '://'
            + server.host
            + (server.port ? ':' + server.port : '')
        ;

        return server;
    });
