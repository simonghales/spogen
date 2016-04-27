(function () {
  'use strict';

  angular
    .module('spogen.suggestions.directives')
    .directive('suggestions', suggestions);

  function suggestions($log) {

    var directive = {
      restrict: 'E',
      controller: 'SuggestionsController',
      controllerAs: 'suggestionsVM',
      templateUrl: 'app/suggestions/_suggestions.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
