(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("barcode", [], factory);
	else if(typeof exports === 'object')
		exports["barcode"] = factory();
	else
		root["barcode"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _barcodeDirective = __webpack_require__(1);
	
	var _barcodeDirective2 = _interopRequireDefault(_barcodeDirective);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var barcode = angular.module('barcode', []);
	
	barcode.directive('barcode', _barcodeDirective2.default.directiveFactory);
	
	exports.default = barcode;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _jsbarcode = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jsbarcode\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _jsbarcode2 = _interopRequireDefault(_jsbarcode);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BarcodeDirective = function () {
	    _createClass(BarcodeDirective, null, [{
	        key: 'resolveTemplate',
	        value: function resolveTemplate(element, attrs) {
	            var cssClass = attrs.bcClass || 'barcode';
	            switch (attrs.bcType) {
	                case 'svg':
	                    return '<svg class="' + cssClass + '"></svg>';
	                    break;
	                case 'img':
	                    return '<img class="' + cssClass + '">';
	                    break;
	                case 'canvas':
	                    return '<canvas class="' + cssClass + '"></canvas>';
	                    break;
	            }
	        }
	    }]);
	
	    function BarcodeDirective() {
	        _classCallCheck(this, BarcodeDirective);
	
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
	
	    _createClass(BarcodeDirective, [{
	        key: 'link',
	        value: function link(scope, element, attributes) {
	
	            var defaults = {
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
	                valid: function valid(_valid) {}
	            };
	
	            scope.$watch(function () {
	                if (scope.bcText !== undefined && scope.bcText.length > 0) {
	                    (0, _jsbarcode2.default)(element[0], scope.bcText, {
	                        format: scope.bcFormat || defaults.format,
	                        lineColor: scope.bcLineColor || defaults.lineColor,
	                        width: parseInt(scope.bcWidth, 10) || defaults.width,
	                        height: parseInt(scope.bcHeight, 10) || defaults.height,
	                        displayValue: scope.bcDisplayValue === 'true' || defaults.displayValue,
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
	                    });
	                }
	            });
	        }
	    }], [{
	        key: 'directiveFactory',
	        value: function directiveFactory() {
	            BarcodeDirective.instance = new BarcodeDirective();
	            return BarcodeDirective.instance;
	        }
	    }]);
	
	    return BarcodeDirective;
	}();
	
	exports.default = BarcodeDirective;
	
	
	BarcodeDirective.directiveFactory.$inject = [];
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=barcode.js.map