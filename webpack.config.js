// webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.tsx',
        vendor: [
            'react',
            'react-dom',
        ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[hash].js'
    },

    devServer: {
        contentBase: './build',
        hot: true,
        inline: true,
    },

    module: {
        rules: [
            {
                test: [/\.ts?$/, /\.tsx?$/],
                exclude: /node_modules/,
                use: 'awesome-typescript-loader',
            },
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.resolve(__dirname, './src/scss/_variables.scss')
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?.*)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                  'file-loader?limit=1000&name=images/[hash].webp',
                  'webp-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
                use: 'file-loader?name=fonts/[hash].[ext]'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin('build', {}),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            title: 'Kodi',
            template: './src/index.html',
            filename: 'index.html',
            themeColor: '#1f747d',
        }),
        new WebpackMd5Hash(),
        new webpack.HotModuleReplacementPlugin()
    ]
};