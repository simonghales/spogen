
(function () {
  'use strict';

  angular
    .module('spogen.spotify.services')
    .factory('SpotifyService', SpotifyService);

  /** @ngInject */
  function SpotifyService($log, $q, Spotify) {

    var _data = {
      seedGenres: [],
      topArtists: {
        long: null,
        short: null
      },
      topTracks: {
        long: null,
        short: null
      }
    }

    var service = {
      getData: getData,
      loadGenres: loadGenres,
      loadUserData: loadUserData,
      loadUserTopArtists: loadUserTopArtists,
      loadUserTopTracks: loadUserTopTracks
    };

    return service;

    function getData() {
      return _data;
    }

    function loadGenres() {

      var deferred = $q.defer();

      Spotify.getAvailableGenreSeeds()
        .then(function(data) {
          _data.seedGenres = data.genres;
          deferred.resolve(data.genres);
        }, function(error) {
          $log.warn("failed tor retrieve genres", error);
          deferred.reject(error);
        });

      return deferred.promise;

    }

    function loadUserData() {

      var deferred = $q.defer();

      var promises = {
        artists: loadUserTopArtists(),
        genres: loadGenres(),
        tracks: loadUserTopTracks()
      }

      $q.all(promises).then(function () {
        deferred.resolve();
      });

      return deferred.promise;

    }

    function loadUserTopArtists() {

      var deferred = $q.defer();

      var promises = {
        short: Spotify.getUserTopArtists({
          limit: 50,
          time_range: 'short_term'
        }),
        long: Spotify.getUserTopArtists({
          limit: 50,
          time_range: 'long_term'
        })
      }

      $q.all(promises).then(function (values) {
        $log.debug("loaded data", values);
        _data.topArtists.short = values.short;
        _data.topArtists.long = values.long;
        deferred.resolve();
      }, function () {
        $log.warn("something went wrong when loading user top artists");
        deferred.reject();
      });

      return deferred.promise;

    }

    function loadUserTopTracks() {

      var deferred = $q.defer();

      var promises = {
        short: Spotify.getUserTopTracks({
          limit: 50,
          time_range: 'short_term'
        }),
        long: Spotify.getUserTopTracks({
          limit: 50,
          time_range: 'long_term'
        })
      }

      $q.all(promises).then(function (values) {
        $log.debug("loaded data", values);
        _data.topTracks.short = values.short;
        _data.topTracks.long = values.long;
        deferred.resolve();
      }, function () {
        $log.warn("something went wrong when loading user top artists");
        deferred.reject();
      });

      return deferred.promise;

    }

  }

})();
