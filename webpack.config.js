const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader']
            },
            {
                test: /\.plain\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /^(?!.*?\.plain).*\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[local]__[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    mode: 'development'
}