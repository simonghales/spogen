(function () {
  'use strict';

  angular
    .module('spogen')
    .directive('seed', seed);

  function seed($log) {

    var directive = {
      restrict: 'E',
      template: '<ng-include src="getTemplateUrl()"/>',
      //templateUrl: 'app/components/_seed.html',
      replace: true,
      scope: {
        seed: '=data'
      },
      controller: function($scope) {
        //function used on the ng-include to resolve the template
        $scope.getTemplateUrl = function() {
          //basic handling
          if ($scope.seed.type == "artist")
            return "app/components/_seed-artist.html";
          if ($scope.seed.type == "track")
            return "app/components/_seed-track.html";
          if ($scope.seed.type == "genre")
            return "app/components/_seed-genre.html";
        }
      }
    };

    return directive;

  }

})();
