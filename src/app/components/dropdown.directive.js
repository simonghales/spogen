(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('dropdown', dropdown);

  function dropdown($log) {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/_dropdown.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
