(function () {
  'use strict';

  angular.module('spogen.general.directives')
    .directive('dragClasses', dragClasses);

  function dragClasses($log, $timeout) {

    var directive = {
      restrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {

      _activate();

      function _activate() {

        scope.draggingType = '';

        scope.states = {
          dragging: false
        };

        scope.$on("dragging.event", function(event, data) {
          $timeout(function() {
            scope.states.dragging = data.dragging;
            if(data.hasOwnProperty('type')) {
              scope.draggingType = data.type;
            }
          });
        });

      }

    }

  };

})();

