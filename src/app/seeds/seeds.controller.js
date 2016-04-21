(function() {
  'use strict';

  angular
    .module('spogen.seeds.controllers')
    .controller('SeedsController', SeedsController);

  /** @ngInject */
  function SeedsController($log, $scope, SeedsService) {
    var vm = this;

    vm.seeds = [];

    _activate();

    function _activate() {
      vm.seeds = SeedsService.getSeeds();

      $scope.$watch(function() {
        return SeedsService.getSeeds();
      }, function(newVal, oldVal) {
        vm.seeds = newVal;
      });

    }

  }
})();
