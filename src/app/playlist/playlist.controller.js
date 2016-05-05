(function() {
  'use strict';

  angular
    .module('spogen.playlist.controllers')
    .controller('PlaylistController', PlaylistController);

  /** @ngInject */
  function PlaylistController($log, $scope, DragService, PlaylistService) {
    var vm = this;

    vm.tracks = PlaylistService.tracks;

    vm.models = {
      title: ''
    };

    vm.isPlaylistValid = isPlaylistValid;
    vm.onDrop = onDrop;
    vm.removeAll = removeAll;
    vm.removeTrack = removeTrack;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;
    vm.trackMoved = trackMoved;

    _activate();

    function isPlaylistValid() {
      return (vm.models.title && vm.tracks.length > 0);
    }

    function onDrop(event, index, item, type) {

      if(type === 'track') {
        if(!PlaylistService.checkIfInTracks(item)) {
          $log.debug("add track at this index", index);
          PlaylistService.addTrack(item, index);
          return true;
        }
      } else if (type === 'multitracks') {
        $log.debug("dropping this data", item);
        PlaylistService.addMultipleTrack(item, index);
        return true;
      } else if (type === 'playlisttrack') {
        PlaylistService.moveTrack(item, index);
        $log.debug("dropping this playlist track", item, index);
        return true;
      } else if (type === 'seed-track') {
        $log.debug("seed to add", item);
        var track = item.info;
        if(!PlaylistService.checkIfInTracks(track)) {
          $log.debug("add track at this index", index);
          PlaylistService.addTrack(track, index);
          return true;
        }
      }


      return false;

    }

    function removeAll() {
      PlaylistService.removeAll();
    }

    function removeTrack(track, index) {
      PlaylistService.removeTrack(track, index);
      $log.debug("remove at index", index);
    }

    function startDrag(type) {
      if(!type) type = 'tracks';
      DragService.startDrag(type);
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function trackMoved(index) {
      $log.debug("moved track from this index", index);
    }

    function _activate() {

      $scope.$watch(function() {
        return PlaylistService.tracks;
      }, function(newVal, oldVal) {

        vm.tracks = newVal;

        $log.debug("updated tracks", vm.tracks);

      }, true);

    }

  }
})();
