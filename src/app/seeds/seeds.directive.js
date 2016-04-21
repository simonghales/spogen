(function () {
  'use strict';

  angular
    .module('spogen.seeds.directives')
    .directive('seeds', seeds);

  function seeds($log) {

    var directive = {
      restrict: 'E',
      controller: 'SeedsController',
      controllerAs: 'seedsVM',
      templateUrl: 'app/seeds/_seeds.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
