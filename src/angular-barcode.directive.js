import jsbarcode from 'jsbarcode';

export default () => {
    'ngInject';

    return {
        replace: true,
        restrict: 'E',
        require: 'ngModel',
        scope: {
            bcType: '@',
            bcClass: '@?',
            // https://github.com/lindell/JsBarcode/wiki/Options#format
            bcOptions: '='
        },
        template: '',
        link: ($scope, element, attributes, ngModel) => {
            const getTemplate = () => {
                const cssClass = $scope.bcClass || 'barcode';
                let template = '';
                switch ($scope.bcType) {
                    case 'svg':
                        template = `<svg class="${cssClass}"></svg>`;
                        break;
                    case 'img':
                        template = `<img class="${cssClass}">`;
                        break;
                    case 'canvas':
                        template = `<canvas class="${cssClass}"></canvas>`;
                        break;
                    default:
                        template = `<img class="${cssClass}">`;
                        break;
                }
                return template;
            };
            const defaults = {
                format: 'CODE128',
                lineColor: '#000000',
                width: 2,
                height: 100,
                displayValue: false,
                fontOptions: '',
                font: 'monospace',
                textAlign: 'center',
                textPosition: 'bottom',
                textMargin: 2,
                fontSize: 20,
                background: '#ffffff',
                margin: 10,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10,
                valid: () => true
            };

            const validateOptions = (options) => {

                Object.keys(defaults).forEach((key) => {
                    if (options.hasOwnProperty(key)) {
                        options[key] = options[key] || defaults[key];
                    } else {
                        options[key] = defaults[key];
                    }
                });
                return options;
            };

            const createBarcode = (options) => {
                const newElement = angular.element(getTemplate());
                const text = ngModel.$viewValue || '';
                const bc = jsbarcode(newElement[0], text, options);
                angular.forEach(element.children(), (c) => angular.element(c).remove());
                element.append(newElement);
                return bc;
            };

            if ($scope.hasOwnProperty('bcOptions') && typeof $scope.bcOptions !== 'undefined') {
                createBarcode(validateOptions($scope.bcOptions));
            } else {
                createBarcode(validateOptions(defaults));
            }


            $scope.$watch('bcOptions', (newValue) => {
                createBarcode(newValue);
            }, true);

            ngModel.$render = () => {
                createBarcode($scope.bcOptions);
            }
        }
    }
}
