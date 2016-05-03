(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('suggestion', suggestion);

  function suggestion($log) {

    var directive = {
      restrict: 'E',
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      scope: {
        seed: '=data'
      },
      controller: 'SuggestionController',
      controllerAs: 'suggestionVM'
    }

    return directive;

  }

})();
