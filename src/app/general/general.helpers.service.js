

(function () {
  'use strict';

  angular
    .module('spogen.general.services')
    .factory('HelpersService', HelpersService);

  /** @ngInject */
  function HelpersService($log) {

    var service = {
      getParameterByName: getParameterByName,
      encodeURIComponentPlus: encodeURIComponentPlus
    };

    return service;

    function encodeURIComponentPlus(s) {
      return encodeURIComponent(s).replace(/%20/g, '+');
    }

    //http://stackoverflow.com/a/901144/2247841
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

  }

})();

