
(function () {
  'use strict';

  angular
    .module('spogen.seeds.services')
    .factory('SeedsService', SeedsService);

  /** @ngInject */
  function SeedsService($log, $q, Spotify) {

    var _seeds = [];

    var service = {
      addArtistSeed: addArtistSeed,
      addGenreSeed: addGenreSeed,
      addSeed: addSeed,
      addTrackSeed: addTrackSeed,
      getSeeds: getSeeds,
      removeSeed: removeSeed
    };

    return service;

    function addArtistSeed(artist) {
      var seed = {
        id: artist.id,
        type: 'artist',
        name: artist.name,
        info: artist
      };

      addSeed(seed);
    }

    function addGenreSeed(genre) {
      var seed = {
        id: genre,
        type: 'genre',
        name: genre,
        info: genre
      };

      addSeed(seed);
    }

    function addSeed(seed) {

      for(var i = 0; i < _seeds.length; i++) {
        if(seed.id === _seeds[i].id) return;
      }

      _seeds.unshift(seed);
      _seeds = _seeds.slice(0, 5);
    }

    function addTrackSeed(track) {
      var seed = {
        id: track.id,
        type: 'track',
        name: track.name,
        info: track
      };

      addSeed(seed);
    }

    function getSeeds() {
      return _seeds;
    }

    function removeSeed(id) {

      for (var i = 0; i < _seeds.length; i++) {
        if(_seeds[i].id === id) {
          _seeds.splice(i, 1);
          break;
        }
      }

    }

  }

})();
