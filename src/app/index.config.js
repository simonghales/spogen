(function() {
  'use strict';

  angular
    .module('spogen')
    .config(config);

  /** @ngInject */
  function config($animateProvider, $logProvider, toastrConfig, SpotifyProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Let ngAnimate know which elements to not handle
    //$animateProvider.classNameFilter(/^((?!(repeat-modify)).)*$/)

    SpotifyProvider.setClientId('e66300ea87bd46379954e38696836855'); //new api testing
    SpotifyProvider.setRedirectUri(window.location.origin + "/callback");
    SpotifyProvider.setScope('user-library-read playlist-read-private user-top-read');

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
