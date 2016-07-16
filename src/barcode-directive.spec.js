'use strict';

import chai, { expect } from 'chai';


import barcode from './barcode';
import angular from 'node_modules/angular/angular';


describe('Unit testing barcode generator directive', function() {
    var injector;
    var element;
    var scope;

    beforeEach(function() {
        // Create a new dependency injector using the 'myApp' module
        injector = angular.injector(['barcode']);

        injector.invoke(function($rootScope, $compile) {
            // Get a new scope
            scope = $rootScope.$new();

            // Compile some HTML that uses the directive
            element = $compile('<barcode text="test" type="svg"></barcode>')(scope);
            scope.$apply();
        });
    });

    it('increments counter when you click', function() {
        console.log(element);
        assert.equal(element.text(), 'You\'ve clicked this div 0 times');
        element.find('div').click();
        assert.equal(element.text(), 'You\'ve clicked this div 1 times');
    });
});