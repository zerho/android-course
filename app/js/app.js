'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/abstract', {templateUrl: 'partials/abstract.html', controller: abstractCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: infoCtrl});
    $routeProvider.otherwise({templateUrl: 'partials/error.html'});
  }]);
