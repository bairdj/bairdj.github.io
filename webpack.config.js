const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                type: "asset/resource",
                generator: {
                    filename: "bundle.css"
                },
                use: ["sass-loader"]
            },
            {
                test: /\.svg$/,
                type: "asset/resource"
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    entry: './src/index.js'
}