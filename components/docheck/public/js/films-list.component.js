(function() {
	'use strict';
	angular
		.module('app', [])
		.component('filmsList', {
			templateUrl: 'js/films-list.html',
			controller: FilmsListCtrl,
			controllerAs: 'vm',
		});


	FilmsListCtrl.$inject = ['$http'];

	function FilmsListCtrl($http) {
		var vm = this,
			prevVal;

		vm.$onInit = onInit();

		function onInit() {
			console.log('Init Films List');
			getFilmsLists('Game of Thrones');
			prevVal = angular.copy(vm.film);
			// debugger
		}

		vm.$doCheck = doCheck;

		function doCheck() {
			if (!vm.film) return;
			if (!angular.equals(this.film, prevVal)) {
				prevVal = angular.copy(vm.film);
				console.log(vm.film);
			}
		}

		// TODO: add Some delay
		vm.getFilmsLists = getFilmsLists;

		function getFilmsLists(title) {
			$http.get(' http://www.omdbapi.com/?t=' + title + '&Season=1')
				.then(function(resp) {
					vm.film = resp.data;
				}).catch(function(err) {
					console.log(err);
				});
		}

	};

})();