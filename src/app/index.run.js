(function() {
  'use strict';

  angular
    .module('spogen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, AuthenticationService) {

    $rootScope.states = {
      authenticated: false
    };

    //_checkAuth();

    function _checkAuth() {

      if(AuthenticationService.isAuth()) {
        var token = AuthenticationService.getAuth();
        AuthenticationService.setAuth(token);
      }

    }

  }

})();
