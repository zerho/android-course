'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function paramsCtrl($scope) {
	$scope.word = "Debug console";
	$scope.method = 'GET';
	$scope.headers = [{head:'username', value:'matteo'},{head:'password', value:'qweasd'}];
	
	$scope.setMethod = function(method) {
		$scope.method = method;
	}
}
paramsCtrl.$inject = ['$scope'];

function infoCtrl() {
	
}
infoCtrl.$inject = [];