const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            filename: 'modern-browsers-bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                      presets: [
                        ["@babel/preset-env", {
                            targets: {
                                esmodules: true
                            }
                        }]
                      ]
                    }
                  },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
        mode: 'production'
    },
    {
        entry: path.resolve(__dirname, 'src/index.js'),
        output: {
            filename: 'old-browsers-bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: "html-loader",
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                    },
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                      presets: [
                        ["@babel/preset-env"]
                      ]
                    }
                  },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ],
        mode: 'production'
    }
];
