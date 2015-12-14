'use strict';

angular.module('testFngApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.paperForms = [];

    $http.get('/api/papers').success(function(paperForms) {
      $scope.paperForms = paperForms;
      socket.syncUpdates('thing', $scope.paperForms);
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

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
