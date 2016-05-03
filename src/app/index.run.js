(function() {
  'use strict';

  angular
    .module('spogen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $state, AuthenticationService) {

    $rootScope.states = {
      authenticated: false
    };

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

      $rootScope.currentStateName = toState.name;

      if(
          toState.hasOwnProperty('data')
          && toState.data.hasOwnProperty('authRequired')
          && toState.data.authRequired === true
          && !AuthenticationService.isAuth()
        ) {
        $log.warn("user is not authenticated");
        event.preventDefault();
        $state.transitionTo('auth');

      }

    });

    //_checkAuth();

    function _checkAuth() {

      if(AuthenticationService.isAuth()) {
        var token = AuthenticationService.getAuth();
        AuthenticationService.setAuth(token);
      }

    }

  }

})();
