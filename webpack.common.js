const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/"),
        assetModuleFilename: 'images/[hash][ext][query]'
    },
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
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource'
            }


        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9220
    },
}