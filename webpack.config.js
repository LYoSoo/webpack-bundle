const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    mode: "production",
    devtool: 'cheap-module-inline-source-map',
    // mode = devpeloment 推荐  cheap-module-eval-source-map
    //inline map转为行内
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        open: true,
        port: 7777,
        hot: true,
        hotOnly: true,
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    // {
                    //     loader: "file-loader",
                    //     options: {
                    //         name: '[name].[ext]',
                    //         outputPath : './imgage/',
                    //     },
                    // }
                    //使用file-loader 可以处理图片文件
                    {
                        loader: "url-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath : './imgage/',
                            limit: 2048
                        },
                    },
                    //使用url-loader 小的图片直接变成base64 超出限制的 变成文件   减少请求    
                    // 缺点  图片文件过多  js文件变大  加载速度变慢
                ]

            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ]
            }

        ]
    },
    plugins: [
        //删除之前打包的目录  在打包开始之前就运行
        new CleanWebpackPlugin(),
        //创建html模版  自动引入打包后的文件
        new HtmlWebpackPlugin(
            {
                title: "webpack-index",
                filename: "webpack-index.html",
                template: "./index.html",
            }
        )

    ]
}