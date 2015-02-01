'use strict';

describe('schema-form', function() {
  var scope;
  var $compile;
  var $rootScope;
  var element;

  function createDirective(template) {
    var elm;

    elm = angular.element(template);
    angular.element(window.document.body).prepend(elm);
    $compile(elm)(scope);
    scope.$digest();

    return elm;
  }

  beforeEach(module('ngSanitize', 'mohsen1.schema-form'));
  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  afterEach(function() {
    if (element) {
      element.remove();
    }
  });

  describe('as an element', function() {
    runTestsWithTemplate('<schema-form></schema-form>');
  });

  describe('as an attribute', function() {
    runTestsWithTemplate('<div schema-form></div>');
  });

  function runTestsWithTemplate(template) {
    describe('when created', function() {

      it('should initial the value to 0', function() {
        element = createDirective(template);

        expect(element.text()).toContain('0');
      });
    });
  }

});
