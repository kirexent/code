const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        'js/bundle': './src/js/index.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/bundle.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/html/views/index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: 'onpug.html',
            template: './src/pug/pages/onpug.pug',
            inject: true
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader?pretty=true'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ],
    },
};