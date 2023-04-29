const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        shared: path.resolve(__dirname, 'src/js/index.js'),
        page1: path.resolve(__dirname, 'src/js/page1.js'),
        page2: path.resolve(__dirname, 'src/js/page2.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/page1.html",
            filename: `page1.html`,
            chunks: ['shared', 'page1']
        }),
        new HtmlWebpackPlugin({
            template: "./src/page2.html",
            filename: `page2.html`,
            chunks: ['shared', 'page2']
        }),
    ],
};
