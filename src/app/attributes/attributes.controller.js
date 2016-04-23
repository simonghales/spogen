(function() {
  'use strict';

  angular
    .module('spogen.attributes.controllers')
    .controller('AttributesController', AttributesController);

  /** @ngInject */
  function AttributesController($log) {
    var vm = this;

    vm.models = {
      energy: 'high',
      popularity: 'mid',
      danceability: '',
      valence: 'mid'
    };

    vm.updateAttribute = updateAttribute;

    function updateAttribute(term, value) {

      if(vm.models[term] === value) {
        vm.models[term] = '';
      } else {
        vm.models[term] = value;
      }

    }

  }
})();
