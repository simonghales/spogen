
(function () {
  'use strict';

  angular
    .module('spogen.general.filters')
    .filter('artists', artists);

  /** @ngInject */
  function artists() {

    return function (artistsArray) {
      if(!artistsArray || artistsArray.length === 0) return '';

      var artistsString = '';

      var i = 0,
        len = artistsArray.length;
      for (; i < len; i++) {

        artistsString += artistsArray[i].name;

        if(i !== len - 1) {
          artistsString += ', ';
        }

      }

      return artistsString;

    };

  }

})();
