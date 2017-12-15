'use strict';

/**
 * @ngdoc function
 * @name wwwrootApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwrootApp
 */

function blabla($scope,$q,$http) {
    function check(name){
        var def = $q.defer();
        $http.get("http://localhost:5000/api/Values/").then(function (response) {
            def.resolve(response);
        });
        return def.promise;
        }
    $scope.check = function(){
        check($scope.inputName).then(function(data){
            $scope.response = data;
        })
    }
  };
angular.module('wwwrootApp',)
  .controller('MainCtrl', ['$scope','$q','$http', blabla])

