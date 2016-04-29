(function () {
  'use strict';

  angular
    .module('spogen.general.filters')
    .filter('msToTime', msToTime);

  /** @ngInject */
  function msToTime($sce, UtilityService) {

    return function (val) {
      if(!val) return;
      return UtilityService.msToTime(val);
    };

  }

})();


