
(function () {
  'use strict';

  angular
    .module('spogen.playlist.services')
    .factory('PlaylistService', PlaylistService);

  /** @ngInject */
  function PlaylistService($log) {

    var service = {
      addTrack: addTrack,
      checkIfInTracks: checkIfInTracks,
      tracks: []
    };

    return service;

    function addTrack(track) {
      service.tracks.push(track);
    }

    function checkIfInTracks(track) {
      var tracks = service.tracks;
      for (var i = 0, len = tracks.length; i < len; i++) {
        if (track.id === tracks[i].id) return true;
      }
      return false;
    }

  }

})();
