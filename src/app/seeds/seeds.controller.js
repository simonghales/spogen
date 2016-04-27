(function() {
  'use strict';

  angular
    .module('spogen.seeds.controllers')
    .controller('SeedsController', SeedsController);

  /** @ngInject */
  function SeedsController($log, $scope, SeedsService) {
    var vm = this;

    vm.drop = {
      onDrop: "seedsVM.onDrop",
      multiple: true
    };

    vm.dropOptions = {
      accept: ".draggable--seed",
      activeClass: "state--receivable",
      hoverClass: "state--hovering"
    };

    vm.seeds = [];

    vm.onDrop = onDrop;

    function onDrop() {
      $log.debug("seed dropped");
    }

    _activate();

    function _activate() {
      vm.seeds = SeedsService.getSeeds();

      $scope.$watch(function() {
        return SeedsService.getSeeds();
      }, function(newVal, oldVal) {
        vm.seeds = newVal;
        $log.debug("updated seeds", vm.seeds);
      });

    }

  }
})();
