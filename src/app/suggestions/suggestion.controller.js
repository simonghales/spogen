(function() {
  'use strict';

  angular
    .module('spogen.suggestions.controllers')
    .controller('SuggestionController', SuggestionController);

  /** @ngInject */
  function SuggestionController($log, $scope) {
    var vm = this;

    //function used on the ng-include to resolve the template
    $scope.getTemplateUrl = function() {
      //basic handling
      if ($scope.seed.type == "artist")
        return "app/suggestions/_suggestion.artist.html";
      if ($scope.seed.type == "track")
        return "app/suggestions/_suggestion.track.html";
      if ($scope.seed.type == "genre")
        return "app/suggestions/_suggestion.genre.html";
    }

  }
})();
