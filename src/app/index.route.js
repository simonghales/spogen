(function() {
  'use strict';

  angular
    .module('spogen')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVM'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
