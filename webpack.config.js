const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const configObject = {
    entry: resolve(__dirname, 'src', 'main.ts'),
    output: {
        filename: 'payrollapp.bundle.js',
        path: resolve(__dirname, 'dist')
        

    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
            //         {
            //             loader:'style-loader',
            // },
                'css-loader',
                {
                    loader: "sass-loader",
                    options: {
                      implementation: require("sass")
                    }
                }
                ]
            },
            {
                test: /\.(htm|html)$/,
                use: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options:{
                    outputPath:'images',
                    name:'[name].[ext]'
                }
               
            }
            
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 4000,
        contentBase: resolve(__dirname, 'dist')
    }
}
module.exports = configObject