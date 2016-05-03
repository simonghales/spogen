(function() {
  'use strict';

  angular
    .module('spogen.authentication.controllers')
    .controller('AuthenticationController', AuthenticationController);

  /** @ngInject */
  function AuthenticationController($log, $state, $timeout, AuthenticationService, SpotifyService, Spotify) {
    var vm = this;

    vm.states = {
      busy: false,
      loading: false
    };

    vm.authenticate = authenticate;

    function authenticate() {
      if(vm.states.busy) return;
      vm.states.busy = true;
      Spotify.login().then(function(data) {
        $log.debug("Spotify: Signed into Spotify", data);
        AuthenticationService.setAuth(data);
        //vm.states.busy = false;
        _loadUserData();
      }, function(error) {
        $log.warn("Something went wrong", error);
        $log.warn("cookie?", $cookies.get("spotify-token"));
      });
    }

    function _loadUserData() {

      vm.states.loading = true;

      SpotifyService.loadUserData()
        .then(function() {
          $state.transitionTo('create');
          vm.states.busy = false;
        }, function(error) {
          vm.states.busy = false;
          $log.warn("failed to load user data", error);
        });

    }

  }
})();
