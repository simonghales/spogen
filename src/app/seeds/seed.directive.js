(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('seed', seed);

  function seed($log) {

    var directive = {
      restrict: 'E',
      template: '<ng-include src="getTemplateUrl()"/>',
      replace: true,
      scope: {
        seed: '=data'
      },
      controller: 'SeedController',
      controllerAs: 'seedVM'
    }

    return directive;

  }

})();
