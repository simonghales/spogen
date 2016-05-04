(function() {
  'use strict';

  angular
    .module('spogen.seeds.controllers')
    .controller('SeedsController', SeedsController);

  /** @ngInject */
  function SeedsController($log, $scope, DragService, RecommendedService, SeedsService) {
    var vm = this;

    vm.seeds = [];
    vm.trackArtists = [];

    vm.onDrop = onDrop;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;
    vm.seedMoved = seedMoved;
    vm.trackToArtistDrop = trackToArtistDrop;

    function onDrop(event, index, item, type) {

      $log.debug("dropped type", type);
      $log.debug("seeds dropped item", item);

      if (SeedsService.checkAddSeed(item)) {
        SeedsService.addSeedType(item, type);
        RecommendedService.updateRecommendations();
        return true;
      }

      return false;

    }

    function startDrag() {
      DragService.startDrag();
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function seedMoved() {
      SeedsService.removeSeedAtIndex(index);
      RecommendedService.updateRecommendations();
    }

    function trackToArtistDrop(event, index, item, type) {

      var artist = item.artists[0];

      if (SeedsService.checkAddSeed(artist)) {
        SeedsService.addSeedType(artist, "artist");
        RecommendedService.updateRecommendations();
        return true;
      }

      $log.debug("I want to add artist", item);
    }

    _activate();

    function _activate() {
      vm.seeds = SeedsService.getSeeds();

      $scope.$watch(function() {
        return SeedsService.getSeeds();
      }, function(newVal, oldVal) {
        vm.seeds = newVal;
      });

    }

  }
})();
