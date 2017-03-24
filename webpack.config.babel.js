import webpack from 'webpack';
import path from 'path';
const libraryName = 'angular-barcode';
const outputFile = 'angular-barcode.js';

export default {
    eslint: {
        configFile: '.eslintrc.json',
        fix: false
    },
    entry: path.resolve('./src/index.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve('./dist'),
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['ng-annotate', 'babel-loader']
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
