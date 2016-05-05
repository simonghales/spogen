
(function () {
  'use strict';

  angular
    .module('spogen.playlist.services')
    .factory('PlaylistService', PlaylistService);

  /** @ngInject */
  function PlaylistService($log) {

    var service = {
      addMultipleTrack: addMultipleTrack,
      addTrack: addTrack,
      checkIfInTracks: checkIfInTracks,
      getTrackIndex: getTrackIndex,
      moveTrack: moveTrack,
      removeAll: removeAll,
      removeTrack: removeTrack,
      tracks: []
    };

    return service;

    function addMultipleTrack(tracks, index) {

      if(index !== undefined) {
        for (var i = 0, len = tracks.length; i < len; i++) {
          var track = tracks[i];
          if(!checkIfInTracks(track)) {
            addTrack(track, index);
            index++;
          }
        }
      } else {
        for (var i = 0, len = tracks.length; i < len; i++) {
          var track = tracks[i];
          if(!checkIfInTracks(track)) {
            addTrack(track);
          }
        }
      }

    }

    function addTrack(track, index) {
      $log.info("Adding track at this index", index);
      if(index !== undefined) {
        service.tracks.splice(index, 0, track);
      } else {
        service.tracks.push(track);
      }
    }

    function checkIfInTracks(track) {
      var tracks = service.tracks;
      for (var i = 0, len = tracks.length; i < len; i++) {
        if (track.id === tracks[i].id) return true;
      }
      return false;
    }

    function getTrackIndex(track) {
      var tracks = service.tracks;
      for (var i = 0, len = tracks.length; i < len; i++) {
        if (track.id === tracks[i].id) {
          return i;
        }
      }
      return null;
    }

    function moveTrack(track, index) {
      var removeIndex = getTrackIndex(track);
      removeTrack(track, removeIndex);

      if (removeIndex < index && index > 0) {
        index--;
      }

      $log.debug("move track to this index", index);

      addTrack(track, index);

    }

    function removeAll() {
      service.tracks = [];
    }

    function removeTrack(track, index) {
      service.tracks.splice(index, 1);
    }

  }

})();
