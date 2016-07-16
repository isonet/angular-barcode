'use strict';

import BarcodeDirective from './barcode-directive';

let barcode = angular.module('barcode', []);

barcode.directive('barcode', BarcodeDirective.directiveFactory);



export default barcode;