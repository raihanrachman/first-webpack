const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                hash: true,
                title: 'My Awesome application',
                // myPageHeader: 'Hello World',
                template: './public/index.html',
                // chunks: ['vendor', 'shared', 'app'],
                // path: path.join(__dirname, "../dist/"),
                filename: 'index.html'
            }
            // {
            //     path: path.join(__dirname, "../dist/"),
            //     filename: 'index.html'
            // }
        )
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",

                ],
            },
        ],
    },
    // watch: true,
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9220
    },
}