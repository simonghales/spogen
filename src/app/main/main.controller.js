(function() {
  'use strict';

  angular
    .module('spogen')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.deletedSeeds = [];

    vm.deleteSeed = deleteSeed;

    function deleteSeed(event, index, item, type) {
      return true;
    }

  }
})();
