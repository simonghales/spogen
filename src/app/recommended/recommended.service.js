
(function () {
  'use strict';

  angular
    .module('spogen.seeds.services')
    .factory('RecommendedService', RecommendedService);

  /** @ngInject */
  function RecommendedService($log, $q, Spotify, AttributesService) {

    var service = {
      getRecommendations: getRecommendations,
      prepQueryParams: prepQueryParams,
      recommendations: {},
      updateRecommendations: updateRecommendations
    };

    return service;

    function getRecommendations() {
      return service.recommendations;
    }

    function prepQueryParams(seeds) {

      var params = {};

      for (var i = 0; i < seeds.length; i++) {

        var seed = seeds[i];

        if(seed.type === 'artist') {
          if(params.hasOwnProperty('seed_artists')) {
            params['seed_artists'].push(seed.id);
          } else {
            params['seed_artists'] = [seed.id];
          }
        }

        else if(seed.type === 'genre') {
          if(params.hasOwnProperty('seed_genres')) {
            params['seed_genres'].push(seed.id);
          } else {
            params['seed_genres'] = [seed.id];
          }
        }

        else if(seed.type === 'track') {
          if(params.hasOwnProperty('seed_tracks')) {
            params['seed_tracks'].push(seed.id);
          } else {
            params['seed_tracks'] = [seed.id];
          }
        }

      }

      for (var key in params) {
        params[key] = _getIds(params[key]);
      }

      params.limit = 100;

      return params;

    }

    function updateRecommendations(seeds) {

      if(seeds.length === 0) return;

      var params = prepQueryParams(seeds);

      Spotify.getRecommendations(params)
        .then(function(data) {
          service.recommendations = data;
          $log.debug("recommendations results", data);
        });

      $log.debug("update using these params", params, AttributesService.getAttributes());

    }

    function _getIds(values) {

      var ids = '';

      for (var i = 0, len = values.length; i < len; i++) {
        ids += values[i];
        if(i !== len - 1) {
          ids += ',';
        }
      }

      return ids;

    }

  }

})();
