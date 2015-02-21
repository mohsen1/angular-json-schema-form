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
 * Main directive
*/
.directive('schemaForm', function(SchemaForm) {

  return {
    restrict: 'A',
    replcae: false,
    require: '?ngModel',
    scope: {
      'schema': '=schemaForm'
    },
    link: function(scope, element, attributes/*, ngModel*/) {
      var formEl = window.document.createElement('div');
      var options = angular.extend(SchemaForm.options, {schema: scope.schema});
      var jsonEditor = new JSONEditor(formEl, options);

      element.prepend(formEl);
      jsonEditor.on('change', function() {
        window.console.log('change:', arguments);
      });
      scope.$watch(attributes.schemaForm, function() {
        window.console.log(arguments);
      });
    }
  };
})

/*
 * Provides configurations for schema form
 *
 * Example:
 * MyApp.config(function(SchemaFormProvider) {
 *   SchemaFormProvider.setOptions(myOptions);
 * });
 *
 * See options here: https://github.com/jdorn/json-editor#options
 *
*/
.provider('SchemaForm', function() {
  var options = JSONEditor.defaults.options;

  this.$get = function() {
    return {
      options: options
    };
  };

  this.setOptions = function(newOptions) {
    if (!angular.isObject(newOptions)) {
      throw new Error('options should be an object.');
    }

    angular.extend(options, newOptions);
  };

  this.getOptions = function() {
    return options;
  };
});
