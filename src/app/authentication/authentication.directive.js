(function () {
  'use strict';

  angular
    .module('spogen.authentication.directives')
    .directive('authentication', authentication);

  function authentication($log, AuthenticationService) {

    var directive = {
      restrict: 'E',
      controller: 'AuthenticationController',
      controllerAs: 'authVM',
      templateUrl: 'app/authentication/_authentication.html',
      replace: true,
      link: link
    };

    return directive;

    function link(scope, element) {

      scope.authenticated = false;

      activate();

      function activate() {

        scope.$watch(function() {
          return AuthenticationService.isAuth();
        }, function(newVal, oldVal) {
          $log.debug("auth result", newVal);
          scope.authenticated = newVal;
        });

      }

    }

  }

})();
