

(function () {
  'use strict';

  angular
    .module('spogen.general.services')
    .factory('DragService', DragService);

  /** @ngInject */
  function DragService($log, $rootScope) {

    var _states = {
      dragging: false
    };

    var service = {
      isDragging: isDragging,
      startDrag: startDrag,
      stopDrag: stopDrag
    };

    return service;

    function isDragging() {
      return _states.dragging;
    }

    function startDrag(type) {
      _states.dragging = true;
      $rootScope.$broadcast("dragging.event", {
        dragging: true,
        type: type
      });
      $log.debug("dragging");
    }

    function stopDrag(type) {
      _states.dragging = false;
      $rootScope.$broadcast("dragging.event", {
        dragging: false
      });
      $log.debug("stopping");
    }

  }

})();

