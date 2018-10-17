const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWepbackHardDiskPlugin = require('html-webpack-harddisk-plugin')
const path = require('path')

module.exports = {
    entry: {
        app: ['./assets/js/app.js', './assets/css/app.css']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    MediaQueryPlugin.loader
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            }
        ]
    },
    plugins: [
        new MediaQueryPlugin({
            include: true,
            queries: {
                'screen and (min-width: 768px)': 'desktop'
            }
        }),
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: 'assets/index.html',
            alwaysWriteToDisk: true
        }),
        new HtmlWepbackHardDiskPlugin()
    ]
}