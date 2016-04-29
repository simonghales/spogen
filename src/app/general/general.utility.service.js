(function () {
  'use strict';

  angular
    .module('spogen.general.services')
    .factory('UtilityService', UtilityService);

  /** @ngInject */
  function UtilityService($log) {

    var service = {
      msToTime: msToTime
    };

    return service;

    function msToTime(s, readable) {

      function addZ(n) {
        return (n<10? '0':'') + n;
      }

      var ms = s % 1000;
      s = (s - ms) / 1000;
      var secs = s % 60;
      s = (s - secs) / 60;
      var mins = s % 60;
      var hrs = (s - mins) / 60;

      if(readable) {
        return (hrs > 0 ? hrs + ' hr ' : '') + mins + ' min';
      }

      return (hrs > 0 ? hrs + ':' : '')  + mins + ':' + addZ(secs); //  + '.' + ms
    }

  }

})();
