(function() {
  'use strict';

  angular
    .module('spogen')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
