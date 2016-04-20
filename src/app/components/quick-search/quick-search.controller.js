(function() {
  'use strict';

  angular
    .module('spogen')
    .controller('QuickSearchController', QuickSearchController);

  /** @ngInject */
  function QuickSearchController($log, $timeout) {
    var vm = this;

    vm.models = {
      previousSearch: '',
      search: ''
    };

    vm.states = {
      dropdownVisible: false,
      searching: {
        artists: false,
        genres: false,
        tracks: false
      }
    };

    vm.considerShowingDropdown = considerShowingDropdown;
    vm.hideDropdown = hideDropdown;
    vm.showDropdown = showDropdown;

    function considerShowingDropdown() {
      if(!vm.models.search) {
        hideDropdown();
        return;
      }
      showDropdown();
      search();
    }

    function hideDropdown() {
      vm.states.dropdownVisible = false;
    }

    function showDropdown() {
      vm.states.dropdownVisible = true;
    }

    function search() {

      if(vm.models.search === vm.models.previousSearch) {
        vm.models.previousSearch = vm.models.search;
        return;
      }

      vm.models.previousSearch = vm.models.search;

      vm.states.searching.artists = true;
      vm.states.searching.tracks = true;

      $timeout(function() {
        vm.states.searching.artists = false;
      }, 500);

      $timeout(function() {
        vm.states.searching.tracks = false;
      }, 900);

    }

  }
})();
