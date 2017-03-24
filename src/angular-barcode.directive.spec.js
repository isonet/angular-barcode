/* eslint-disable no-unused-expressions */
/* global inject */

import './index';

const bcOptions = {
    format: 'CODE128',
    lineColor: '#000000',
    width: 2,
    height: 100,
    displayValue: true,
    fontOptions: '',
    font: 'monospace',
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 2,
    fontSize: 20,
    background: '#ffffff',
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    valid: () => true
};

describe('angularBarcode', () => {
    let $rootScope;
    let $compile;
    let directive;

    beforeEach( () => {
        window.module('angular-barcode');

        inject((_$compile_, _$rootScope_, $injector) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            directive = $injector.get('angularBarcodeDirective');
        });
    });

    describe('Module', () => {
        it('directive should exist', () => {
            $rootScope.$digest();
            expect(directive).to.be.ok;
        });
    });

    describe('Barcode svg testing', () => {
        let scope;
        let element;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.bc = angular.copy(bcOptions);
            scope.txt = 'test';
            element = angular.element('<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="svg"></angular-barcode>');
            $compile(element)(scope);
            $rootScope.$digest();

        });

        it('Check if svg sub elements are created', () => {
            expect(element.find('svg').html()).to.contain('<rect');
        });

        it('Check if barcode text is correct', () => {
            expect(element.find('svg').html()).to.contain('test');
        });

        it('Check if barcode text is correct after modification', () => {
            expect(element.find('svg').html()).to.contain('test');
            scope.txt = 'afterModification';
            scope.$apply();
            expect(element.find('svg').html()).to.contain('afterModification');
        });

        it('Check if barcode has the correct class', () => {
            expect(element.find('svg').hasClass('barcode')).to.be.ok;
        });

    });

    describe('Barcode img testing', () => {
        let scope;
        let element;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.bc = angular.copy(bcOptions);
            scope.txt = 'test';
            element = angular.element('<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="img"></angular-barcode>');
            $compile(element)(scope);
            $rootScope.$digest();

        });

        it('Check if svg sub elements are created', () => {
            expect(element.find('img').parent().html()).to.contain('<img');
        });

        it('Check if barcode has the correct class', () => {
            expect(element.find('img').hasClass('barcode')).to.be.ok;
        });

    });

    describe('Barcode canvas testing', () => {
        // view layer specs.
        let scope;
        let element;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.bc = angular.copy(bcOptions);
            scope.txt = 'test';
            element = angular.element('<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="canvas"></angular-barcode>');
            $compile(element)(scope);
            $rootScope.$digest();

        });

        it('Check if canvas sub elements are created', () => {
            expect(element.find('canvas').parent().html()).to.contain('<canvas');
        });


        it('Check if barcode has the correct class', () => {
            expect(element.find('canvas').hasClass('barcode')).to.be.ok;
        });

    });

    describe('Barcode type default fallback', () => {
        let scope;
        let element;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.bc = angular.copy(bcOptions);
            scope.txt = 'test';
            element = angular.element('<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode"></angular-barcode>');
            $compile(element)(scope);
            $rootScope.$digest();

        });
        it('Check if canvas sub elements are created', () => {
            expect(element.find('img').parent().html()).to.contain('<img');
        });
    });

    describe('Barcode without options', () => {
        let scope;
        let element;

        beforeEach(() => {
            scope = $rootScope.$new();
            scope.txt = 'test';
            element = angular.element('<angular-barcode ng-model="txt" bc-class="barcode" bc-type="svg"></angular-barcode>');
            $compile(element)(scope);
            $rootScope.$digest();
        });
        it('Check if svg sub elements are created', () => {
            expect(element.find('svg').html()).to.contain('<rect');
        });

        it('Check if barcode text is correct', () => {
            expect(element.find('svg').html()).to.contain('test');
        });

        it('Check if barcode text is correct after modification', () => {
            expect(element.find('svg').html()).to.contain('test');
            scope.txt = 'afterModification';
            scope.$apply();
            expect(element.find('svg').html()).to.contain('afterModification');
        });

        it('Check if barcode has the correct class', () => {
            expect(element.find('svg').hasClass('barcode')).to.be.ok;
        });
    });
});
