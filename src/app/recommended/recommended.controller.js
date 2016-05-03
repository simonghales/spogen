(function() {
  'use strict';

  angular
    .module('spogen.recommended.controllers')
    .controller('RecommendedController', RecommendedController);

  /** @ngInject */
  function RecommendedController($log, $scope, DragService, RecommendedService) {
    var vm = this;

    vm.recommendations = RecommendedService.recommendations;

    vm.states = {
      updating: RecommendedService.updating
    };

    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;

    _activate();

    function startDrag(type) {
      if(!type) type = 'tracks';
      DragService.startDrag(type);
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function _activate() {

      $log.debug("recommendations", vm.recommendations);

      $scope.$watch(function() {
        return RecommendedService.recommendations;
      }, function(newVal, oldVal) {

        vm.recommendations = newVal;

        $log.debug("updated recommendations...", vm.recommendations);

      }, true);

      $scope.$watch(function() {
        return RecommendedService.updating;
      }, function(newVal, oldVal) {

        vm.states.updating = newVal;

      }, true);

      _loadInitialRecommendations();

    }

    function _loadInitialRecommendations() {
      RecommendedService.loadInitialRecommendations();
    }

  }
})();
