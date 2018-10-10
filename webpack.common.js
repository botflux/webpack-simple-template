const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')

module.exports = {
    entry: './assets/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist') + '/'
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
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
        new MediaQueryPlugin({
            include: [
                'app'
            ],
            queries: {
                'screen and (min-width: 768px)': 'desktop'
            }
        })
    ]
}