'use strict';

angular.module('photographyApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [];
    $scope.things = [{image: "test", desc: "blah"}, {image: "cranberry", desc: "blah"}, {image: "bannana", desc: "blah"}, {image: "newImage", desc: "blah"}];
    $scope.newProperty = "lol";



    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.goTo = function(thing) {
      // for(var i = 0; i < 10; i++) {
      //   console.log(i);
      // }
      $location.path("/" + thing);
    }
  });
