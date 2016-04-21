(function() {
  'use strict';

  angular
    .module('spogen', [

      'spogen.authentication',
      'spogen.general',
      'spogen.seeds',
      'spogen.spotify',

      'offClick',
      'spotify',

      'ngAnimate',
      'ngCookies',
      'ui.router',
      'toastr'
    ]);

  //

  angular.module('spogen.authentication', [
    'spogen.authentication.controllers',
    'spogen.authentication.directives',
    'spogen.authentication.services'
  ]);

  angular.module('spogen.authentication.controllers', []);

  angular.module('spogen.authentication.directives', []);

  angular.module('spogen.authentication.services', []);

  //

  angular.module('spogen.general', [
    'spogen.general.directives',
    'spogen.general.filters',
    'spogen.general.services'
  ]);

  angular.module('spogen.general.directives', []);

  angular.module('spogen.general.filters', []);

  angular.module('spogen.general.services', []);

  //

  angular.module('spogen.seeds', [
    'spogen.seeds.controllers',
    'spogen.seeds.directives',
    'spogen.seeds.services'
  ]);

  angular.module('spogen.seeds.controllers', []);

  angular.module('spogen.seeds.directives', []);

  angular.module('spogen.seeds.services', []);

  //

  angular.module('spogen.spotify', [
    'spogen.spotify.services'
  ]);

  angular.module('spogen.spotify.services', []);

  //


})();
