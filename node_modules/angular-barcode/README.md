# angular-barcode

[NPM registry](https://www.npmjs.com/package/angular-barcode)

An angular directive for [Lindell's JsBarcode](https://github.com/lindell/JsBarcode)

## Installation

#### Install with NPM

```npm install --save angular-barcode```

#### Import

```javascript
import 'angular-barcode';
```

#### Or include the script in your code

```html
<script src="node_modules/angular-barcode/dist/angular-barcode.js"></script>
```

#### Add it as a module to angular

```javascript
angular.module('MyExampleApp', ['angular-barcode']);
```

## Usage

Default values:

```html
<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="svg"></angular-barcode>
```

or

```html
<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="img"></angular-barcode>
```

or

```html
<angular-barcode ng-model="txt" bc-options="bc" bc-class="barcode" bc-type="canvas"></angular-barcode>
```
with $scope.bc: 
```javascript
$scope.bc = {
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
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    valid: function (valid) {
    }
}
```


-Take a look at the example/index.html file.

For more details you should definitely check out [JSBarcode's Wiki!](https://github.com/lindell/JsBarcode/wiki/Options) 

# Dev / Other

This package is written in ES2015 and uses webpack for bundling.
