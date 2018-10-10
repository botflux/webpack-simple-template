const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin()
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})