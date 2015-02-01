/*!
 * angular-json-schema-form
 * https://github.com/mohsen1/angular-json-schema-form
 * Version: 0.0.7 - 2015-02-01T08:47:31.509Z
 * License: MIT
 */


'use strict';

angular.module('mohsen1.schema-form', []).directive('schemaForm', function() {
  var value = 0;

  return {
    restrict: 'AE',
    templateUrl: 'schema-form.html',
    replcae: true,
    link: function($scope) {

      $scope.getValue = function() {
        return value;
      };
      $scope.increment = function() {
        value++;
      };
    }
  };
});

angular.module("mohsen1.schema-form").run(["$templateCache", function($templateCache) {$templateCache.put("schema-form.html","<div class=\"schema-form\"><div>The value is {{getValue()}}</div><button ng-click=\"increment()\">+</button></div>");}]);