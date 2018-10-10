const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new UglifyJSPlugin(),
        new ManifestPlugin(),
        new CleanPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})