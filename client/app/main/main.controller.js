'use strict';

angular.module('sentimentAnalysisApp')
  .controller('MainCtrl', function($scope, $http) {

    $scope.doSearch = function() {
      $http.post('/api/twitter', {
        search: $scope.searchTerm
      }).success(function(tweets) {
        console.log(tweets);
        $scope.tweets = tweets;
      });
    };
  });