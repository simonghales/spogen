(function() {
  'use strict';

  angular
    .module('spogen')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('auth', {
        url: '/',
        templateUrl: 'app/authentication/_authentication.html',
        controller: 'AuthenticationController',
        controllerAs: 'authVM'
      })
      .state('create', {
        url: '/create',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVM',
        data: {
          authRequired: true
        }
      })
      .state('callback', {
        url: '/callback',
        templateUrl: 'app/callback/callback.html',
        controller: 'CallbackController',
        controllerAs: 'callbackVM'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }

})();
