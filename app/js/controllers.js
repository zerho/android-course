'use strict';

/* Controllers */

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function paramsCtrl($scope) {
	$scope.word = "Debug console";
	$scope.method = 'GET';
	$scope.headers = [{head:'username', value:'matteo'},{head:'password', value:'qweasd'}];
	$scope.params = [{head:'age', value:'23'},{head:'belonging', value:'wolves'}];
	$scope.result = "[Response]"
	
	$scope.setMethod = function(method) {
		$scope.method = method;
	}
	
	$scope.sendRequest = function(method) {
		
		$scope.result = method + ": \nLorem ipsum dolor sith amet";
	}
}

paramsCtrl.$inject = ['$scope'];

function infoCtrl() {
	
}
infoCtrl.$inject = [];