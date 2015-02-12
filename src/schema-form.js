'use strict';

/*
 * schema-form directive
 *
 * Usage:
 *
 * Pass `schema-form` attribute to a <form> element with your JSON Schema object
 * as value to it.
 *
 * Example:
 * ```
 * <form schema-form="mySchema">
 *    <button type="submit">Submit</button>
 * </form>
 * ```
*/
angular.module('mohsen1.schema-form', [])

/*
 * Define templates constant
*/
.constant('templates', {
  string: '<input type="string" ng-model="ngModel"/>'
  // string: 'templates/string.html'
})

/*
 * Main directive
*/
.directive('schemaForm', function($compile, templates) {

  return {
    restrict: 'A',
    replcae: false,
    require: '?ngModel',
    scope: {
      'schema': '=schemaForm'
    },
    link: function(scope, element, attributes, ngModel) {

      if (!ngModel) {
        return;
      }
      var schema = scope.schema;

      if (!angular.isObject(schema)) {
        throw new Error('schema-form expects a schema object.');
      }

      var type = getSchemaType(schema);

      // JSON Schema §3.5
      var validTypes = ['array', 'boolean', 'integer', 'number', 'null',
        'object', 'string'];

      if (validTypes.indexOf(type) === -1) {
        throw new Error('Unknown JSON Schema type: ' + type);
      }

      ngModel.$render = function() {
        element.prepend(templates[type]);
        // $compile($element.contents())(scope);
      };

    }
  };

  /*
   * Gets type of a schema object
   * @param {object} - JSON Schema object
   * @returns {string} - Type of JSON Schema
  */
  function getSchemaType(schema) {

    if (!angular.isObject(schema)) {
      throw new Error('getSchemaType expects a schema object.');
    }

    // only return schema.type if it's a string
    if (angular.isString(schema.type)) {
      return schema.type;
    }

    // default to object type
    return 'object';
  }
})


.directive('schemaFormString', function ($compile, templates) {
    return {
        restrict: 'E',
        replcae: true,
        require: '?ngModel',
        scope: {},
        link: function (){

        }
    }
});
