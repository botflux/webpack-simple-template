const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')
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
            }
        ]
    },
    plugins: [
        new MediaQueryPlugin({
            include: true,
            queries: {
                'screen and (min-width: 768px)': 'desktop'
            }
        })
    ]
}