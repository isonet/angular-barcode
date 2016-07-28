# angular-barcode

An angular directive for [Lindell's JsBarcode](https://github.com/lindell/JsBarcode)

## Installation

#### Install with NPM

```npm install --save angular-barcode```

#### Install with JSPM

```jspm install npm:angular-barcode```

#### Import (if using JSPM)

```javascript
import barcode from 'angular-barcode';
```

#### Or include the script in your code

```html
<script src="node_modules/angular-barcode/dist/barcode.es5.js"></script>
```

#### Add it as a module to angular

```javascript
angular.module('MyExampleApp', ['barcode']);
```

## Usage

Default values:

```html
<barcode bc-text="Hello World!" bc-type="svg" bc-format="CODE128" bc-line-color="#000000"
         bc-width="2" bc-height="100" bc-display-value="true" bc-font-options=""
         bc-font="monospace" bc-text-align="center" bc-text-position="bottom"
         bc-text-margin="2" bc-font-size="20" bc-background="#ffffff" bc-margin="0" bc-marginTop="undefined"
         bc-marginBottom="undefined" bc-marginLeft="undefined" bc-marginRight="undefined">
</barcode>
```

Do not forget the closing tag `</barcode>` if you intend to generate SVGs.

Take a look at the example/index.html file.

For more details you should definitely check out [JSBarcode's Wiki!](https://github.com/lindell/JsBarcode/wiki/Options) 

# Dev / Other

This package is written in ES2015 and uses browserify and babelify.

For versions older than 1.2.5:

You will need to setup the canvas package manually: https://www.npmjs.com/package/canvas
