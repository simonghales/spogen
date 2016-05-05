(function() {
  'use strict';

  angular
    .module('spogen.suggestions.controllers')
    .controller('SuggestionsController', SuggestionsController);

  /** @ngInject */
  function SuggestionsController($log, DragService, SuggestionsService) {
    var vm = this;

    vm.data = {
      currentSuggestion: null,
      currentSuggestionIndex: 0,
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

    vm.canGoNext = canGoNext;
    vm.canGoPrevious = canGoPrevious;
    vm.nextSuggestion = nextSuggestion;
    vm.previousSuggestion = previousSuggestion;
    vm.seedMoved = seedMoved;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;

    _activate();

    function canGoNext() {
      return (vm.data.currentSuggestionIndex !== (vm.data.suggestions.length - 1));
    }

    function canGoPrevious() {
      return (vm.data.currentSuggestionIndex !== 0);
    }

    function nextSuggestion() {
      if(!canGoNext()) return;
      vm.data.currentSuggestionIndex++;
      _updateCurrentSuggestion();
    }

    function previousSuggestion() {
      if(!canGoPrevious()) return;
      vm.data.currentSuggestionIndex--;
      _updateCurrentSuggestion();
    }

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
      vm.data.currentSuggestion = vm.data.suggestions[0];
      $log.debug("suggestions", vm.data.suggestions);
    }

    function _updateCurrentSuggestion() {
      var index = vm.data.currentSuggestionIndex;
      vm.data.currentSuggestion = vm.data.suggestions[index];
    }

  }
})();
