(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('seed', seed);

  function seed($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/_seed.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
