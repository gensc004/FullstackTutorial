'use strict';

angular.module('photographyApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('albums', {
        url: '/albums',
        templateUrl: 'app/albums/albums.html',
        controller: 'AlbumsCtrl'
      });
  });