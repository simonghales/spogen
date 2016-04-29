(function () {
  'use strict';

  angular
    .module('spogen.playlist.directives')
    .directive('playlist', playlist);

  function playlist($log) {

    var directive = {
      restrict: 'E',
      controller: 'PlaylistController',
      controllerAs: 'playlistVM',
      templateUrl: 'app/playlist/_playlist.html',
      replace: true,
      scope: false
    };

    return directive;

  }

})();
