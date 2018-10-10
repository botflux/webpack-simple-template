const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist') + '/'
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        })
    ]
})