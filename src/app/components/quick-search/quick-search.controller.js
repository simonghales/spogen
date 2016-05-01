(function() {
  'use strict';

  angular
    .module('spogen')
    .controller('QuickSearchController', QuickSearchController);

  /** @ngInject */
  function QuickSearchController($log, $scope, AuthenticationService, DragService, HelpersService, RecommendedService, SeedsService, Spotify) {
    var vm = this;

    vm.data = {
      artists: {},
      genres: [],
      tracks: {}
    };

    vm.models = {
      previousSearch: '',
      search: ''
    };

    vm.states = {
      dropdownVisible: false,
      searching: {
        artists: false,
        genres: false,
        tracks: false
      }
    };

    vm.addArtistSeed = addArtistSeed;
    vm.addGenreSeed = addGenreSeed;
    vm.addTrackSeed = addTrackSeed;
    vm.considerShowingDropdown = considerShowingDropdown;
    vm.hideDropdown = hideDropdown;
    vm.seedMoved = seedMoved;
    vm.showDropdown = showDropdown;
    vm.startDrag = startDrag;
    vm.stopDrag = stopDrag;

    _activate();

    function addArtistSeed(artist) {
      SeedsService.addArtistSeed(artist);
      RecommendedService.updateRecommendations();
      hideDropdown();
    }

    function addGenreSeed(genre) {
      SeedsService.addGenreSeed(genre);
      RecommendedService.updateRecommendations();
      hideDropdown();
    }

    function addTrackSeed(track) {
      SeedsService.addTrackSeed(track);
      RecommendedService.updateRecommendations();
      hideDropdown();
    }

    function considerShowingDropdown() {
      if(!vm.models.search) {
        //hideDropdown();
        return;
      }
      showDropdown();
      search();
    }

    function hideDropdown() {
      vm.states.dropdownVisible = false;
    }

    function showDropdown() {
      vm.states.dropdownVisible = true;
    }

    function search() {

      if(vm.models.search === vm.models.previousSearch) {
        vm.models.previousSearch = vm.models.search;
        return;
      }

      vm.states.searching.artists = true;
      vm.states.searching.tracks = true;
      vm.models.previousSearch = vm.models.search;

      Spotify.search(vm.models.search, 'artist,track')
        .then(function(data) {
          _updateResults(data);
          vm.states.searching.artists = false;
          vm.states.searching.tracks = false;
        }, function(error) {
          $log.warn("Something went wrong with the search", error);
        });

      $log.debug("search param will be for", HelpersService.encodeURIComponentPlus(vm.models.search));

    }

    function seedMoved() {
      hideDropdown();
      $log.warn("hide the dropdown");
    }

    function startDrag(type) {
      if(!type) type = 'tracks';
      DragService.startDrag(type);
    }

    function stopDrag() {
      DragService.stopDrag();
    }

    function _activate() {

      if(AuthenticationService.isAuth()) {
        _loadGenres();
      } else {
        $scope.$on('authenticated', function() {
          _loadGenres();
        });
      }

    }

    function _loadGenres() {

      Spotify.getAvailableGenreSeeds()
        .then(function(data) {
          vm.data.genres = data.genres;
          $log.debug("available genre seeds", data);
        }, function(error) {
          $log.warn("failed tor retrieve genres", error);
        });

    }

    function _updateResults(data) {
      $log.debug("search results", data);

      var url = data.artists.href;
      var query = HelpersService.getParameterByName('query', url);

      if(query !== vm.models.search) return;

      vm.data.artists = data.artists;
      vm.data.tracks = data.tracks;

    }

  }
})();
