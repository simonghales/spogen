(function() {
  'use strict';

  angular
    .module('spogen.playlist.controllers')
    .controller('PlaylistController', PlaylistController);

  /** @ngInject */
  function PlaylistController($log, $scope, PlaylistService) {
    var vm = this;

    vm.tracks = PlaylistService.tracks;

    vm.onDrop = onDrop;

    _activate();

    function onDrop(event, index, item, type) {

      if(!PlaylistService.checkIfInTracks(item)) {
        PlaylistService.addTrack(item);
        return true;
      }

      return false;

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
