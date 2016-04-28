(function () {
  'use strict';

  angular
    .module('spogen.recommended.directives')
    .directive('recommended', recommended);

  function recommended($log) {

    var directive = {
      restrict: 'E',
      controller: 'RecommendedController',
      controllerAs: 'recommendedVM',
      templateUrl: 'app/recommended/_recommended.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
