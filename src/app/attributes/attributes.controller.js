(function() {
  'use strict';

  angular
    .module('spogen.attributes.controllers')
    .controller('AttributesController', AttributesController);

  /** @ngInject */
  function AttributesController($log, $scope, AttributesService) {
    var vm = this;

    vm.models = AttributesService.getAttributes();

    vm.updateAttribute = updateAttribute;

    _activate();

    function updateAttribute(term, value) {

      AttributesService.updateAttribute(term, value);

    }

    function _activate() {

      $scope.$watch('vm.models', function(newVal, oldVal) {

        $log.debug("a change"); // not sure why this isn't firing...

        if(newVal) {

          for (var key in newVal) {

            vm.models[key] = newVal[key];

          }

        }

      }, true);

    }

  }
})();
