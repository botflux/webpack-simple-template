const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist') + '/'
    },
    plugins: [
        new UglifyJSPlugin(),
        new ManifestPlugin(),
        new CleanPlugin(['dist'], {
            root: path.resolve('./'),
            verbose: true,
            dry: false
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[chunkhash].css'
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
})