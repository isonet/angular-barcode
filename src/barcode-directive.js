'use strict';

import JsBarcode from 'jsbarcode';

export default class BarcodeDirective {

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

        this.defaults = {
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

        scope.$watch(() => {
            if(scope.bcText !== undefined && scope.bcText.length > 0) {
                JsBarcode(element[0], scope.bcText, {
                    format: scope.bcFormat || this.defaults.format,
                    lineColor: scope.bcLineColor || this.defaults.lineColor,
                    width: parseInt(scope.bcWidth, 10) || this.defaults.width,
                    height: parseInt(scope.bcHeight, 10) || this.defaults.height,
                    displayValue: (scope.bcDisplayValue === 'true') || this.defaults.displayValue,
                    fontOptions: scope.bcFontOptions || this.defaults.fontOptions,
                    font: scope.bcFont || this.defaults.font,
                    textAlign: scope.bcTextAlign || this.defaults.textAlign,
                    textPosition: scope.bcTextPosition || this.defaults.textPosition,
                    textMargin: parseInt(scope.bcTextMargin, 10) || this.defaults.textMargin,
                    fontSize: parseInt(scope.bcFontSize, 10) || this.defaults.fontSize,
                    background: scope.bcBackground || this.defaults.background,
                    margin: parseInt(scope.bcMargin, 10) || this.defaults.margin,
                    marginTop: parseInt(scope.bcMarginTop, 10) || this.defaults.marginTop,
                    marginBottom: parseInt(scope.bcMarginBottom, 10) || this.defaults.marginBottom,
                    marginLeft: parseInt(scope.bcMarginLeft, 10) || this.defaults.marginLeft,
                    marginRight: parseInt(scope.bcMarginRight, 10) || this.defaults.marginRight,
                    valid: scope.bcValid || this.defaults.valid
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