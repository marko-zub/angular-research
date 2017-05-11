(function() {
	'use strict';

	angular
		.module('app')
		.component('film', {
			template: renderTemplate,
			controller: FilmCtrl,
			controllerAs: 'vm',
			bindings: {
				item: '<'
			}
		});

	renderTemplate.$inject = [];

	function renderTemplate() {
		return [
			'<div>',
			'{{vm.item.Title}}',
			'<div>'
		].join('\n');
	}

	FilmCtrl.$inject = [];

	function FilmCtrl() {
		var vm = this;

		vm.$onInit = onInit

		function onInit() {
			// console.log('initFilm');
		}

		// vm.$doCheck = doCheck;

		// function doCheck() {
		// 	console.log(vm);
		// }

		vm.$onChanges = onChanges;

		function onChanges(changes) {
			if (!angular.equals(changes.item.currentValue, changes.item.previousValue)) {
				vm.itemDisplay = changes.item.currentValue
			}
		}

	}
})();