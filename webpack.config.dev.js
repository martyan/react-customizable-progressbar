const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    target: 'web',
    context: SRC_PATH,
    devtool: 'inline-cheap-source-map',
    entry: [/*'@babel/polyfill', */'../examples/index.tsx'],
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    resolve: {
        alias: {
            'react-customizable-progressbar': SRC_PATH + '/ReactCustomizableProgressbar'
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fallback: {
            fs: false
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                    {loader: 'postcss-loader', options: {sourceMap: true}},
                    {loader: 'sass-loader', options: {sourceMap: true}}
                ]
            }
        ]
    },
    output: {
        path: SRC_PATH,
        filename: '[name].[fullHash:5].js',
        chunkFilename: '[name].[fullHash:5].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'examples/assets/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
