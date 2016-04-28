(function() {
  'use strict';

  angular
    .module('spogen.seeds.controllers')
    .controller('SeedController', SeedController);

  /** @ngInject */
  function SeedController($log, $scope, DragService, SeedsService) {
    var vm = this;

    vm.removeSeed = removeSeed;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;
    vm.seedMoved = seedMoved;

    //function used on the ng-include to resolve the template
    $scope.getTemplateUrl = function() {
      //basic handling
      if ($scope.seed.type == "artist")
        return "app/seeds/_seed-artist.html";
      if ($scope.seed.type == "track")
        return "app/seeds/_seed-track.html";
      if ($scope.seed.type == "genre")
        return "app/seeds/_seed-genre.html";
    }

    function startDrag() {
      DragService.startDrag('seed');
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function seedMoved() {
      removeSeed();
    }

    function removeSeed() {

      var id = $scope.seed.id;

      SeedsService.removeSeed(id);

    }

  }
})();
