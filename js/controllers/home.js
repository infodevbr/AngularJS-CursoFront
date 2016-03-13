(function(){
	'use strict';

	var main = angular.module('main');

	main.controller('home', ['$scope', home]);

	function home($scope){
		$scope.helloWorld = "Hello World";
	}

})();