'use strict';
var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('example', function() {
    return {
      template: 'Name: {{person.name}} Address: {{person.address}}'
    };
});