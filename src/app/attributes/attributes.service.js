
(function () {
  'use strict';

  angular
    .module('spogen.attributes.services')
    .factory('AttributesService', AttributesService);

  /** @ngInject */
  function AttributesService($log, $q, Spotify) {

    var _attributes = {
      energy: '',
      popularity: '',
      danceability: '',
      valence: ''
    };

    var service = {
      getAttributes: getAttributes,
      updateAttribute: updateAttribute
    };

    return service;

    function getAttributes() {
      return _attributes;
    }

    function updateAttribute(term, value) {

      if(_attributes[term] === value) {
        _attributes[term] = '';
      } else {
        _attributes[term] = value;
      }

      //SeedsService.updateRecommendations();

      // todo work out how to overcome circular dependency issue
      // make a parent service, that sends commands to the children dependencies

      $log.debug("updated");

    }

  }

})();
