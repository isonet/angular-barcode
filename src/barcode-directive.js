'use strict';

let JsBarcode = require('jsbarcode');

class BarcodeDirective {

    static resolveTemplate(element, attrs) {
        let cssClass = attrs.bcClass || 'barcode';
        switch(attrs.bcType) {
            case 'svg':
                return `<svg class="${cssClass}"></svg>`;
                break;
            case 'img':
                return `<img class="${cssClass}">`;
                break;
            case 'canvas':
                return `<canvas class="${cssClass}"></canvas>`;
                break;
        }
    }

    constructor() {

        // Directive config
        this.replace = true;
        this.restrict = 'E';
        this.scope = {
            bcType: '@',
            bcText: '@',
            bcClass: '@?',
            // https://github.com/lindell/JsBarcode/wiki/Options#format
            bcFormat: '@?',
            bcLineColor: '@?',
            bcWidth: '@?',
            bcHeight: '@?',
            bcDisplayValue: '@?',
            bcFontOptions: '@?',
            bcFont: '@?',
            bcTextAlign: '@?',
            bcTextPosition: '@?',
            bcTextMargin: '@?',
            bcFontSize: '@?',
            bcBackground: '@?',
            bcMargin: '@?',
            bcMarginTop: '@?',
            bcMarginBottom: '@?',
            bcMarginLeft: '@?',
            bcMarginRight: '@?',
            bcValid: '=?'
        };
        this.template = BarcodeDirective.resolveTemplate;
    }

    link(scope, element, attributes) {

		let defaults = {
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
            margin: 10,
            marginTop: undefined,
            marginBottom: undefined,
            marginLeft: undefined,
            marginRight: undefined,
            valid: function(valid){}
        };
	
        scope.$watch(() => {
            if(scope.bcText !== undefined && scope.bcText.length > 0) {
                JsBarcode(element[0], scope.bcText, {
                    format: scope.bcFormat || defaults.format,
                    lineColor: scope.bcLineColor || defaults.lineColor,
                    width: parseInt(scope.bcWidth, 10) || defaults.width,
                    height: parseInt(scope.bcHeight, 10) || defaults.height,
                    displayValue: (scope.bcDisplayValue === 'true') || defaults.displayValue,
                    fontOptions: scope.bcFontOptions || defaults.fontOptions,
                    font: scope.bcFont || defaults.font,
                    textAlign: scope.bcTextAlign || defaults.textAlign,
                    textPosition: scope.bcTextPosition || defaults.textPosition,
                    textMargin: parseInt(scope.bcTextMargin, 10) || defaults.textMargin,
                    fontSize: parseInt(scope.bcFontSize, 10) || defaults.fontSize,
                    background: scope.bcBackground || defaults.background,
                    margin: parseInt(scope.bcMargin, 10) || defaults.margin,
                    marginTop: parseInt(scope.bcMarginTop, 10) || defaults.marginTop,
                    marginBottom: parseInt(scope.bcMarginBottom, 10) || defaults.marginBottom,
                    marginLeft: parseInt(scope.bcMarginLeft, 10) || defaults.marginLeft,
                    marginRight: parseInt(scope.bcMarginRight, 10) || defaults.marginRight,
                    valid: scope.bcValid || defaults.valid
                })
            }

        });

    }

    static directiveFactory(){
        BarcodeDirective.instance = new BarcodeDirective();
        return BarcodeDirective.instance;
    }
}

BarcodeDirective.directiveFactory.$inject = [];

module.exports = BarcodeDirective;