const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx']},
    output: {
        path: path.resolve(__dirname, 'build/'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: path.resolve('public/index.html')})
    ]
};