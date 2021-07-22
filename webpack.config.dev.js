const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
    mode: 'development',
    target: 'web',
    context: SRC_PATH,
    devtool: 'inline-cheap-source-map',
    entry: [/*'@babel/polyfill', */ 'react-hot-loader/patch', '../examples/index.tsx'],
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
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useCache: true,
                        useBabel: true,
                        babelCore: '@babel/core',
                        reportFiles: [
                            '**/*.{ts,tsx}',
                        ],
                    },
                }
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
                    'css-loader?sourceMap',
                    'postcss-loader?sourceMap',
                    {loader: 'sass-loader', options: {sourceMap: true}}
                ]
            }
        ]
    },
    output: {
        path: SRC_PATH,
        filename: '[name].[hash:5].js',
        chunkFilename: '[name].[hash:5].js',
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
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
