'use strict';

import JsBarcode from 'jsbarcode';

export default class BarcodeDirective {

    static resolveTemplate(element, attrs) {
        let cssClass = attrs.class || 'barcode';
        switch(attrs.type) {
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
            type: '@',
            text: '@',
            class: '@?',
            // https://github.com/lindell/JsBarcode/wiki/Options#format
            format: '@?',
            lineColor: '@?',
            width: '@?',
            height: '@?',
            displayValue: '@?',
            fontOptions: '@?',
            font: '@?',
            textAlign: '@?',
            textPosition: '@?',
            textMargin: '@?',
            fontSize: '@?',
            background: '@?',
            margin: '@?',
            marginTop: '@?',
            marginBottom: '@?',
            marginLeft: '@?',
            marginRight: '@?',
            valid: '=?'
        };
        this.template = BarcodeDirective.resolveTemplate;
    }

    link(scope, element, attributes) {
        console.log(element);
        JsBarcode(element[0], scope.text, {
            format: scope.format || 'CODE128',
            lineColor: scope.lineColor || '#000000',
            width: parseInt(scope.width, 10) || 2,
            height: parseInt(scope.height, 10) || 100,
            displayValue: (scope.displayValue === 'true') || true,
            fontOptions: scope.fontOptions || '',
            font: scope.font || 'monospace',
            textAlign: scope.textAlign || 'center',
            textPosition: scope.textPosition || 'bottom',
            textMargin: parseInt(scope.textMargin, 10) || 2,
            fontSize: parseInt(scope.fontSize, 10) || 20,
            background: scope.background || '#ffffff',
            margin: parseInt(scope.margin, 10) || 10,
            marginTop: parseInt(scope.marginTop, 10) || undefined,
            marginBottom: parseInt(scope.marginBottom, 10) || undefined,
            marginLeft: parseInt(scope.marginLeft, 10) || undefined,
            marginRight: parseInt(scope.marginRight, 10) || undefined,
            valid: scope.valid || function(valid){}
        })
    }

    static directiveFactory(){
        BarcodeDirective.instance = new BarcodeDirective();
        return BarcodeDirective.instance;
    }
}

BarcodeDirective.directiveFactory.$inject = [];