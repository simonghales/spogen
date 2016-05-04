(function() {
  'use strict';

  angular
    .module('spogen.suggestions.controllers')
    .controller('SuggestionsController', SuggestionsController);

  /** @ngInject */
  function SuggestionsController($log, DragService, SuggestionsService) {
    var vm = this;

    vm.data = {
      suggestions: []
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

    _activate();

    function seedMoved(index) {
      vm.suggestions.splice(index, 1);
    }

    function startDrag(type) {
      DragService.startDrag(type);
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function _activate() {
      _getInitialSuggestions();
    }


    function _getInitialSuggestions() {
      vm.data.suggestions = SuggestionsService.getInitialSuggestions();
      $log.debug("suggestions", vm.data.suggestions);
    }

  }
})();
