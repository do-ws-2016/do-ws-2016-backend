'use strict';

/**
 * @ngdoc function
 * @name backendApp.controller:ReceipteditCtrl
 * @description
 * # ReceipteditCtrl
 * Controller of the backendApp
 */
angular.module('backendApp')
    .controller('ReceiptEditCtrl', function ($scope, ModalService, $log) {

        $scope.receipt = {
            steps : [],
            url : 'http://google.de'
        };

        var step = function(){
           return  {
                name : 'name',
                duration : 10
            }
        };

        $scope.init = function(){



        };

        function editStep(step){

            step = step || null;


            ModalService
                .showModal({
                    templateUrl: "views/partials/editStepModal.html",
                    controller: "EditStepCtrl",
                    inputs : {

                        step : step

                    }
                })
                .then(function(modal){
                    modal.element.modal();

                    return modal.close;
                })
                .then(function(result){

                    if(result.status){
                        if(step === null){
                            $scope.receipt.steps = $scope.receipt.steps || [];
                            $scope.receipt.steps.push(result.data);
                        } else {
                            _.forOwn(result.data, function(value, key){

                                if(step[key] && !/^hash/.test(key)){
                                    step[key] = value;
                                }


                            });

                        }
                        recalculateDurationDisplay();
                    }
                })
            ;

        }

        function recalculateDurationDisplay(){

            var timeInSec = 0,
                itemDuration = 0,
                itemDurationSplit,
                itemDurationPartial = 0,
                durations = {
                    h : 3600,
                    m : 60,
                    s : 1
                },
                stepRegex = /(\d+)(h|m|s)/
            ;

            _.each($scope.receipt.steps, function(item){
                itemDurationSplit = item.duration.split(' ');
                itemDurationPartial = 0;

                _.each(itemDurationSplit, function(partial){
                    var splittedValue = stepRegex.exec(partial);

                    itemDurationPartial += parseInt(splittedValue[1]) * durations[splittedValue[2]];
                });

                timeInSec += itemDurationPartial;
            });

            $scope.receipt.duration = timeInSec;
        }

        $scope.editStep = function(event, step){
            event.preventDefault();

            editStep(step);
        };

        $scope.addStep = function(event){

            event.preventDefault();

            editStep();

        };

        $scope.deleteStep = function($event, step){

            event.preventDefault();

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

                    if(result){
                        //_.find($scope.)
                    }

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
