const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        hotOnly: true,
        contentBase: path.join(__dirname, 'dist')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
})