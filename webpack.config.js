var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/style/index.scss'
    ],
    output: {
        filename: './public/bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                use:  ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options: { importLoaders: 1 },
                    }]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
                })

                // [
                //   'style-loader',
                //   'css-loader',
                //   'sass-loader'
                // ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new ExtractTextPlugin({
            filename: 'public/[name].bundle.css',
            allChunks: true
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './public/',
        port:3000
    }
};
