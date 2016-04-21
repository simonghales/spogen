(function() {
  'use strict';

  angular
    .module('spogen')
    .controller('CallbackController', CallbackController);

  /** @ngInject */
  function CallbackController($cookies) {
    var vm = this;

    _activate();

    function _activate() {

      var hash = window.location.hash;
      if (window.location.search.substring(1).indexOf("error") !== -1) {
        window.close();
      } else if (hash) {
        var token = window.location.hash.split('&')[0].split('=')[1];
        var expire_time = 3600;
        var currentTime = new Date();
        var expirationTime = new Date(currentTime.getTime() + expire_time * 1000);
        localStorage.setItem('spotify-token', token);
        $cookies.put("spotify-token", token, {'expires' : expirationTime});
      }
    }

  }

})();
