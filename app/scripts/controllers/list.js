'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
    .controller('ListCtrl', function ($scope, $log, ModalService, listService, toastr) {

        $scope.list = [{
            name : 'List 1',
            count : 10,
            key : 'babb656783cabfdded'
        }];

        var List = listService.List;

        $scope.init = function(){

            List.get({id : 'wbezweQvf6t763gqicbiq'});


            List
                .query()
                .$promise
                .then(function(lists){
                    $scope.lists = lists;
                })
                .catch(function(err){

                    $scope.lists = [];

                    toastr.error(err.message || 'An error occured!');
                })
            ;



        };


        $scope.delete = function(item, $event){
            $event.preventDefault();

            // open the modal
            ModalService
                .showModal({
                    templateUrl: "views/partials/confirmModal.html",
                    controller: "confirmModalCtrl",
                    inputs : {
                        item : item
                    }
                })
                .then(function(modal) {
                    // init modal instance with bootstrap modal
                    modal.element.modal();

                    // modal action handling

                    return modal.close;
                })
                .then(function(result){

                    return result ? listService.delete() : false;



                })
                .then(function(result){

                    if(result){
                        toastr.success('Item deleted successfully','', {timeOut:30000});
                    }

                })
                .catch(function(error){
                    $log.error(error);
                    toastr.error('An error occured!');
                })

            ;
        }



    });
