
(function () {
  'use strict';

  angular
    .module('spogen.authentication.services')
    .factory('AuthenticationService', AuthenticationService);

  /** @ngInject */
  function AuthenticationService($log, $rootScope, $cookies, Spotify) {

    var _authenticated = false;

    var service = {
      clearAuth: clearAuth,
      getAuth: getAuth,
      isAuth: isAuth,
      setAuth: setAuth
    };

    return service;

    function clearAuth() {
      $cookies.remove('spotify-token');
      _authenticated = false;
    }

    function getAuth() {
      if(!$cookies.get('spotify-token')) return null;
      return $cookies.get('spotify-token');
    }

    function isAuth() {
      return _authenticated;
      //if(_authenticated) return true;
      //return !!$cookies.get('spotify-token');
    }

    function setAuth(token) {
      //Spotify.setAuthToken(token);
      _authenticated = true;
      $rootScope.$broadcast('authenticated');
    }

  }

})();
