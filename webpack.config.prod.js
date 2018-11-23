const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const SRC_PATH = path.resolve(__dirname, 'src');
const EXAMPLES_PATH = path.resolve(__dirname, 'examples');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = [
    {
        mode: 'production',
        target: 'web',
        context: SRC_PATH,
        devtool: false,
        entry: [/*'@babel/polyfill', */'./ReactCustomizableProgressbar'],
        output: {
            path: DIST_PATH,
            filename: 'ReactCustomizableProgressbar.js',
            library: 'ReactCustomizableProgressbar',
            libraryTarget: 'var'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }
            ]
        },
        externals: {
            react: 'react'
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production'
            }),
            new CleanWebpackPlugin(DIST_PATH),
            new webpack.optimize.OccurrenceOrderPlugin()
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        mangle: false,
                        sourcemap: false,
                        compress: {
                            warnings: false,
                        },
                        output: {
                            comments: false,
                            beautify: false
                        }
                    }
                }),
            ]
        }
    },
    {
        mode: 'production',
        target: 'web',
        context: EXAMPLES_PATH,
        devtool: false,
        entry: {
            Examples: './examples',
            Generator: './generator'
        },
        output: {
            path: DIST_PATH,
            filename: '[name].js',
            library: '[name]',
            libraryTarget: 'var',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }, {
                    test: /\.(scss|css)$/,
                    loaders: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production'
            }),
            new CleanWebpackPlugin(DIST_PATH),
            new webpack.optimize.OccurrenceOrderPlugin()
        ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        mangle: false,
                        sourcemap: false,
                        compress: {
                            warnings: false,
                        },
                        output: {
                            comments: false,
                            beautify: false
                        }
                    }
                }),
            ]
        }
    }
];