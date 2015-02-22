'use strict';

angular.module('demo', ['ngSanitize', 'mohsen1.schema-form']);

angular.module('demo')

.controller('TestCtrl', function ($scope) {
  $scope.simpleString = 'Hello world';

  $scope.complexSchema = {
    type: 'object',
    title: 'Person',
    properties: {
        name: {
            type: 'string'
        },
        age: {
            type: 'integer'
        }
    }
  };

  $scope.complexModel = {
    name: 'Mohsen',
    age: 28
  };

  $scope.$watch('complexModel', function(){
    $scope.complexModelString = JSON.stringify($scope.complexModel, null, 2);
  });

  $scope.$watch('complexSchema', function(){
    $scope.complexSchemaString = JSON.stringify($scope.complexSchema, null, 2);
  });

  $scope.commit = function(){
    try {
      $scope.complexSchema = JSON.parse($scope.complexSchemaString);
      $scope.complexModel = JSON.parse($scope.complexModelString);
    } catch(e){
      window.console.warn(e.toString());
    }
  };
})

.config(function(SchemaFormProvider) {
  SchemaFormProvider.setOptions({
    theme: 'bootstrap3'
  });
});
