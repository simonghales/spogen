
(function () {
  'use strict';

  angular
    .module('spogen.spotify.services')
    .factory('SpotifyService', SpotifyService);

  /** @ngInject */
  function SpotifyService($log, $q, Spotify) {

    var service = {
    };

    return service;

  }

})();
