
(function () {
  'use strict';

  angular
    .module('spogen.seeds.services')
    .factory('RecommendedService', RecommendedService);

  /** @ngInject */
  function RecommendedService($log, $q, Spotify, AttributesService, SeedsService) {

    var service = {
      getRecommendations: getRecommendations,
      prepAttributes: prepAttributes,
      prepQueryParams: prepQueryParams,
      recommendations: {},
      updateRecommendations: updateRecommendations,
      updating: false
    };

    return service;

    function getRecommendations() {
      return service.recommendations;
    }

    function prepAttributes(attributes, params) {

      if(!params) {
        params = {};
      }

      if(attributes.danceability) {
        _setDanceAttributeData(params, attributes.danceability);
      }
      if(attributes.energy) {
        _setEnergyAttributeData(params, attributes.energy);
      }
      if(attributes.popularity) {
        _setPopularityAttributeData(params, attributes.popularity);
      }
      if(attributes.valence) {
        _setValenceAttributeData(params, attributes.valence);
      }

      return params;
    }

    function prepQueryParams(seeds, attributes) {

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

      params = prepAttributes(attributes, params);

      params.limit = 30;

      return params;

    }

    function updateRecommendations() {

      var seeds = SeedsService.getSeeds();
      var attributes = AttributesService.getAttributes();

      $log.debug("attributes to use", attributes);

      if(seeds.length === 0) return;

      service.updating = true;

      var params = prepQueryParams(seeds, attributes);

      Spotify.getRecommendations(params)
        .then(function(data) {
          service.recommendations = data;
          service.updating = false;
          $log.debug("recommendations results", data);
        }, function(error) {
          service.updating = false;
        });

      $log.debug("update using these params", params);

    }

    // Private functions

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

    function _setDanceAttributeData(params, danceability) {
      if (danceability === 'high') {
        params['min_danceability'] = 0.66;
      } else if (danceability === 'mid') {
        params['max_danceability'] = 0.66;
        params['min_danceability'] = 0.33;
      } else {
        params['max_danceability'] = 0.33;
      }
    }

    function _setEnergyAttributeData(params, energy) {
      if (energy === 'high') {
        params['min_energy'] = 0.66;
      } else if (energy === 'mid') {
        params['max_energy'] = 0.66;
        params['min_energy'] = 0.33;
      } else {
        params['max_energy'] = 0.33;
      }
    }

    function _setPopularityAttributeData(params, popularity) {
      if (popularity === 'high') {
        params['min_popularity'] = 66;
      } else if (popularity === 'mid') {
        params['max_popularity'] = 66;
        params['min_popularity'] = 33;
      } else {
        params['max_popularity'] = 33;
      }
    }

    function _setValenceAttributeData(params, valence) {
      if (valence === 'high') {
        params['min_valence'] = 0.66;
      } else if (valence === 'mid') {
        params['max_valence'] = 0.66;
        params['min_valence'] = 0.33;
      } else {
        params['max_valence'] = 0.33;
      }
    }

  }

})();
