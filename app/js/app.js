'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.services']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/builder', {templateUrl: 'partials/requestbuilder.html', controller: paramsCtrl});
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/info', {templateUrl: 'partials/info.html', controller: infoCtrl});
    $routeProvider.otherwise({templateUrl: 'partials/error.html'});
  }]);
