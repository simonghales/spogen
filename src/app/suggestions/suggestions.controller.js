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
        id: "rock",
        name: "rock"
      },
      {
        type: "genre",
        id: "alt-rock",
        name: "alt-rock"
      },
      {
        type: "genre",
        id: "j-rock",
        name: "j-rock"
      },
      {
        type: "genre",
        id: "hard-rock",
        name: "hard-rock"
      },
      {
        type: "genre",
        id: "indie",
        name: "indie"
      },
      {
        type: "genre",
        id: "country",
        name: "country"
      }
    ];

    vm.seedMoved = seedMoved;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;

    function seedMoved(index) {
      vm.suggestions.splice(index, 1);
    }

    function startDrag() {
      DragService.startDrag('suggestion');
    }

    function stopDrag() {
      DragService.stopDrag();
    }

  }
})();
