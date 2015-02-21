/*!
 * angular-json-schema-form
 * https://github.com/mohsen1/angular-json-schema-form
 * Version: 0.0.7 - 2015-02-21T21:14:17.900Z
 * License: MIT
 */


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
    link: function(scope, element, attributes, ngModel) {
      var formEl = window.document.createElement('div');
      var options = angular.extend(SchemaForm.options, {schema: scope.schema});
      var jsonEditor = null;

      element.prepend(formEl);

      ngModel.$render = render;

      function render() {
        if (jsonEditor) {
          angular.element(formEl).html('');
          jsonEditor.destroy();
        }
        jsonEditor = new JSONEditor(formEl, options);
        jsonEditor.setValue(ngModel.$modelValue);
        jsonEditor.on('change', setViewValue);
      }

      function setViewValue() {
        scope.$evalAsync(function() {
          ngModel.$setViewValue(jsonEditor.getValue());
        });
      }

      scope.$watch(attributes.schemaForm, render);
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
