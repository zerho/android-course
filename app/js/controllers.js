'use strict';

/* Controllers */

function abstractCtrl($scope) {
	
	$scope.lessons = [{
		title: '01 - What\'s that?',
		deck: 'https://docs.google.com/presentation/d/1RvcHOnoSVV7a2oYzHrGZN2Q2VCqx69925VfYUQRPNho/edit?usp=sharing',
		code: ''
	},{
		title: '01bis - A deeper look',
		deck: 'https://docs.google.com/presentation/d/12IB5eczfmcwm5zIBwg58TCEEYMkEeEX-sM0_YP56uw8/edit?usp=sharing',
		code: ''
	},{
		title: '02 - Setup',
		deck: 'https://docs.google.com/presentation/d/1t-_-PWTa2CFfe4asRtTaG_hszVQN0lP2Otir_zgZP4E/edit?usp=sharing',
		code: ''
	},{
		title: '03 - Project Structure',
		deck: 'https://docs.google.com/presentation/d/16z86QY__FBv5r7rvLQD3n5TQfVKcN6B7iaq_vttyccg/edit?usp=sharing',
		code: ''
	},{
		title: '04 - UI',
		deck: '',
		code: ''
	},{
		title: '05 - Asset & Resources',
		deck: 'https://docs.google.com/presentation/d/1QfrJqdOQRx5il38lzUt18KjDPd3SOrbhUZbRB-Iuo5w/edit?usp=sharing',
		code: ''
	},{
		title: 'XX - Coming Soon...',
		deck: '',
		code: ''
	}];
}
abstractCtrl.$inject = ['$scope'];


function infoCtrl() {
}
MyCtrl2.$inject = [];
