(function() {
  'use strict';

  angular
    .module('spogen.suggestions.controllers')
    .controller('SuggestionsController', SuggestionsController);

  /** @ngInject */
  function SuggestionsController($log, DragService) {
    var vm = this;

    vm.drag = {
      onStart: 'suggestionsVM.startDrag',
      onStop: 'suggestionsVM.stopDrag'
    };

    vm.dragOptions = {
      addClasses: false,
      containment: "window",
      revert: "invalid",
      revertDuration: 300
    };

    vm.suggestions = [
      {
        type: "genre",
        id: "Boop",
        name: "Boop"
      },
      {
        type: "genre",
        id: "Woop",
        name: "Woop"
      },
      {
        type: "genre",
        id: "Shoop",
        name: "Shoop"
      }
    ];

    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;

    function startDrag() {
      DragService.startDrag();
    }

    function stopDrag() {
      DragService.stopDrag();
    }

  }
})();
