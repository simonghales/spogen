(function () {
  'use strict';

  angular
    .module('spogen.general.filters')
    .filter('msToTimeTotal', msToTimeTotal);

  /** @ngInject */
  function msToTimeTotal($sce, UtilityService) {

    return function (val) {
      if(!val) return;

      var totalDuration = 0;

      for (var i = 0, len = val.length; i < len; i++) {
        totalDuration += val[i].duration_ms;
      }

      return UtilityService.msToTime(totalDuration, true);
    };

  }

})();


