(function() {
  'use strict';

  angular
    .module('spogen.seeds.controllers')
    .controller('SeedsController', SeedsController);

  /** @ngInject */
  function SeedsController($log, $scope, DragService, RecommendedService, SeedsService) {
    var vm = this;

    vm.seeds = [];

    vm.onDrop = onDrop;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;
    vm.seedMoved = seedMoved;

    function onDrop(event, index, item, type) {

      $log.debug("dropped type", type);
      $log.debug("seeds dropped item", item);

      if (SeedsService.checkAddSeed(item)) {
        SeedsService.addSeedType(item, type);
        RecommendedService.updateRecommendations();
        return true;
      }

      return false;

    }

    function startDrag() {
      DragService.startDrag();
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function seedMoved() {
      SeedsService.removeSeedAtIndex(index);
      RecommendedService.updateRecommendations();
    }

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
