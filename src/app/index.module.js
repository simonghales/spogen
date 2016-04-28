(function() {
  'use strict';

  angular
    .module('spogen', [

      'spogen.authentication',
      'spogen.general',
      'spogen.seeds',
      'spogen.attributes',
      'spogen.recommended',
      'spogen.suggestions',
      'spogen.spotify',

      'offClick',
      'spotify',
      'ngDragDrop',
      'dndLists',

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

  angular.module('spogen.attributes', [
    'spogen.attributes.controllers',
    'spogen.attributes.directives',
    'spogen.attributes.services'
  ]);

  angular.module('spogen.attributes.controllers', []);

  angular.module('spogen.attributes.directives', []);

  angular.module('spogen.attributes.services', []);

  //

  angular.module('spogen.recommended', [
    'spogen.recommended.controllers',
    'spogen.recommended.directives',
    'spogen.recommended.services'
  ]);

  angular.module('spogen.recommended.controllers', []);

  angular.module('spogen.recommended.directives', []);

  angular.module('spogen.recommended.services', []);

  //

  angular.module('spogen.suggestions', [
    'spogen.suggestions.controllers',
    'spogen.suggestions.directives',
    'spogen.suggestions.services'
  ]);

  angular.module('spogen.suggestions.controllers', []);

  angular.module('spogen.suggestions.directives', []);

  angular.module('spogen.suggestions.services', []);

  //

  angular.module('spogen.spotify', [
    'spogen.spotify.services'
  ]);

  angular.module('spogen.spotify.services', []);

  //


})();
