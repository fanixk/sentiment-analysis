'use strict';

function interceptor($q, $rootScope, $injector) {
  var _http = null;

  return {
    request: function(config) {

      // Show loader
      $rootScope.loader = true;
      return config || $q.when(config);
    },
    response: function(response) {
      _http = _http || $injector.get('$http');

      if (_http.pendingRequests.length < 1) {
        // Hide loader
        $rootScope.loader = false;

      }

      return response || $q.when(response);
    },
    responseError: function(response) {
      _http = _http || $injector.get('$http');

      if (_http.pendingRequests.length < 1) {
        // Hide loader
        $rootScope.loader = false;
      }

      return $q.reject(response);
    }
  };
}

angular.module('sentimentAnalysisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .factory('httpInterceptor', interceptor)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  });