'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
    .controller('ListCtrl', function ($scope, $log, $routeParams, ModalService, listService, toastr) {

        $log.log($routeParams);

        var listParams = $routeParams;

        $scope.isEditMode = false;

        if(listParams.id){
            $scope.isEditMode = true;
        }


        $scope.list = [{
            name : 'List 1',
            count : 10,
            key : 'babb656783cabfdded'
        }];


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
                        toastr.success('Item deleted successfully');
                    }

                })
                .catch(function(error){
                    $log.error(error);
                    toastr.error('An error occured!');
                })

            ;
        }



    });
