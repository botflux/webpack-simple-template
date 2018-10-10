const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin')

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