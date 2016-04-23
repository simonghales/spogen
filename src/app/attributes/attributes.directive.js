(function () {
  'use strict';

  angular
    .module('spogen.attributes.directives')
    .directive('attributes', attributes);

  function attributes($log) {

    var directive = {
      restrict: 'E',
      controller: 'AttributesController',
      controllerAs: 'attributesVM',
      templateUrl: 'app/attributes/_attributes.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
