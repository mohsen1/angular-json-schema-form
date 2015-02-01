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
