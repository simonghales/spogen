(function() {
  'use strict';

  angular
    .module('spogen.recommended.controllers')
    .controller('RecommendedController', RecommendedController);

  /** @ngInject */
  function RecommendedController($log, $scope, RecommendedService) {
    var vm = this;

    vm.recommendations = RecommendedService.recommendations;

    _activate();

    function _activate() {

      $log.debug("recommendations", vm.recommendations);

      $scope.$watch(function() {
        return RecommendedService.recommendations;
      }, function(newVal, oldVal) {

        vm.recommendations = newVal;

        $log.debug("updated recommendations", vm.recommendations);

      }, true);

    }

  }
})();
