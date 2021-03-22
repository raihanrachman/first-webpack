const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin(
            {
                hash: true,
                cache: true,
                title: 'My Awesome application',
                template: './public/index.html',
                filename: 'index.html',
            }

        )
    ],

})