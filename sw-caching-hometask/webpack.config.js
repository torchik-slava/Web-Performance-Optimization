const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: {
          import: './src/index.js',
          dependOn: 'service-worker',
        },
        'service-worker': './src/service-worker.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(scss)$/,
                use: [
                    miniCss.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new miniCss({
            filename: 'style.css',
        }),
        // this plugin generate own SW and ignore service-worker.js
        // it's suitable only for 1st task
        //new WorkboxPlugin.GenerateSW(),
    ],
};
