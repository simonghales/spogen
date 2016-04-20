(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('quickSearch', quickSearch);

  function quickSearch($log) {

    var directive = {
      restrict: 'E',
      controller: 'QuickSearchController',
      controllerAs: 'quickSearchVM',
      templateUrl: 'app/components/quick-search/_quick-search.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
