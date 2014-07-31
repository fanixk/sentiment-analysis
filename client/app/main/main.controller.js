'use strict';

angular.module('sentimentAnalysisApp')
  .controller('MainCtrl', function ($scope, $http) {
    
    $http.post('/api/twitter', { search: 'test' }).success(function(tweets) {
      $scope.tweets = tweets;
      console.log(tweets);
    });
  });