

(function () {
  'use strict';

  angular
    .module('spogen.general.services')
    .factory('HelpersService', HelpersService);

  /** @ngInject */
  function HelpersService($log) {

    var service = {
      getParameterByName: getParameterByName,
      encodeURIComponentPlus: encodeURIComponentPlus,
      shuffle: shuffle
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

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

  }

})();

