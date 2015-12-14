'use strict';

angular.module('testFngApp')
  .controller('FormsCtrl', function ($scope, $http, socket, Auth) {
    $scope.paperForms = [];

    $scope.isLoggedIn = Auth.isLoggedIn;

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
