const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app:'./src/scripts/index.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },{
            test: /\.scss$/,
            use:[
            //    ' style-loader',
                MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {sourceMap: true}
            },
            {
                loader: 'postcss-loader',
                options: {sourceMap: true, config: {
                    path: 'src/scripts/config/postcss.config.js'
                }}
            },
            {
                loader: 'sass-loader',
                options: {sourceMap: true}
            },
        ]}
    ],
    },
    devServer: {
        overlay: true,
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "style.css"}),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}