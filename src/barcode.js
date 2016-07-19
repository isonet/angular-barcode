'use strict';

let BarcodeDirective = require('./barcode-directive');

let barcode = angular.module('barcode', []);

barcode.directive('barcode', BarcodeDirective.directiveFactory);



module.exports = barcode;