const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin(
            {
                hash: false,
                cache: true,
                title: 'My Awesome application',
                template: './public/index.html',
                filename: 'index.html',
            }

        )
    ],

})