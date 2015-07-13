'use strict';

describe('schema-form', function() {
  var scope;
  var $compile;
  var $rootScope;
  var element;

  beforeEach(module('mohsen1.schema-form'));
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

  describe('simple string schema', function() {

    it('should have the title and initial value', function() {
      var template = '<div schema-form="schema" ng-model="simpleString"></div>';
      element = angular.element(template);

      scope.schema = {type: 'string', title: 'First Name'};
      scope.simpleString = 'Hello world';

      angular.element(window.document.body).prepend(element);
      $compile(element)(scope);
      scope.$digest();

      expect(element.text()).toContain('First Name');
      expect(element.find('input').val()).toContain('Hello world');
    });
  });
});
