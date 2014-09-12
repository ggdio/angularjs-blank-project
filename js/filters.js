'use strict';
var appFilters = angular.module('appFilters', []);

appFilters.filter('interpolate', ['version', function(version) {

    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }

}]);
