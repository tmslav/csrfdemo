'use strict';

/**
 * @ngdoc overview
 * @name wwwrootApp
 * @description
 * # wwwrootApp
 *
 * Main module of the application.
 */
angular
  .module('wwwrootApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
