
(function () {
  'use strict';

  angular
    .module('spogen.suggestions.services')
    .factory('SuggestionsService', SuggestionsService);

  /** @ngInject */
  function SuggestionsService($log, HelpersService, SpotifyService) {

    var service = {
      createSuggestionObject: createSuggestionObject,
      getInitialSuggestions: getInitialSuggestions
    };

    return service;

    function createSuggestionObject(data, type) {

      var suggestion = {};

      if (type === 'artist') {
        suggestion = {
          id: data.id,
          type: 'artist',
          name: data.name,
          info: data
        };
      } else if (type === 'genre') {
        suggestion = {
          id: data,
          type: 'genre',
          name: data,
          info: data
        };
      } else if (type === 'track') {
        suggestion = {
          id: data.id,
          type: 'track',
          name: data.name,
          info: data
        };
      }

      return suggestion;

    }

    function getInitialSuggestions() {

      var data = SpotifyService.getData();

      $log.debug("data to use", data);

      var suggestions = [];

      for (var i = 0, len = data.topArtists.long.items.length; i < len; i++) {
        var artist = data.topArtists.long.items[i];
        suggestions.push(createSuggestionObject(artist, 'artist'));
      }

      for (var i = 0, len = data.topArtists.short.items.length; i < len; i++) {
        var artist = data.topArtists.short.items[i];
        suggestions.push(createSuggestionObject(artist, 'artist'));
      }

      for (var i = 0, len = data.topTracks.long.items.length; i < len; i++) {
        var track = data.topTracks.long.items[i];
        suggestions.push(createSuggestionObject(track, 'track'));
      }

      for (var i = 0, len = data.topTracks.short.items.length; i < len; i++) {
        var track = data.topTracks.short.items[i];
        suggestions.push(createSuggestionObject(track, 'track'));
      }

      // get 5 genres

      HelpersService.shuffle(suggestions);

      return suggestions;

    }

  }

})();
