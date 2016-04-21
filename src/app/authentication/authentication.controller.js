(function() {
  'use strict';

  angular
    .module('spogen.authentication.controllers')
    .controller('AuthenticationController', AuthenticationController);

  /** @ngInject */
  function AuthenticationController($log, AuthenticationService, Spotify) {
    var vm = this;

    vm.states = {
      busy: false
    };

    vm.authenticate = authenticate;

    function authenticate() {
      vm.states.busy = true;
      Spotify.login().then(function(data) {
        $log.debug("Spotify: Signed into Spotify", data);
        AuthenticationService.setAuth(data);
        vm.states.busy = false;
      }, function(error) {
        $log.warn("Something went wrong", error);
        $log.warn("cookie?", $cookies.get("spotify-token"));
      });
    }

  }
})();
