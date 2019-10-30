// import Path from 'path';
// import VueLoaderPlugin from 'vue-loader/lib/plugin';
// import autoprefixer from 'autoprefixer';
const Path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const autoprefixer = require('autoprefixer');
const htmlWebpackPlugin = require('html-webpack-plugin');
// VueLoaderPlugin负责拷贝你已经定义的其他rules,然后应用到.vue的各个相关block 比方说<script>
// const webpack
module.exports = {
    mode: 'development',
    devServer: {
        host:'0.0.0.0',
        // contentBase: Path.resolve(__dirname, './dist'),
        // hot: true,
        port: 8084,
        after: function(app, server) {
            console.log(`运行在哪个port*******`)
        },
        // https: true,
        // disableHostCheck: true,  //绕过主机检查不建议这样做,
        // index: 'index.html',
        // publicPath: '/assets/'
    },
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].[hash:7].js',
        path: Path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.vue', '.json'],
        alias: {
            'src': Path.resolve(__dirname, './src'),
            'views': Path.resolve(__dirname, './views')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
                // options: {
                //     appendTsSuffixTo: [/\.vue$/]
                // }
            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ autoprefixer({
                                remove: false,
                                browsers: ['last 10 versions']
                            }) ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ autoprefixer({
                                remove: false,
                                browsers: ['last 10 versions']
                            }) ]
                        }
                    },
                    'sass-loader'
                ]
            },
            // 这个同webpack的source-map选项区别呢
            {
                enforce: 'pre',
                test: /\.js$/, 
                loader: 'source-map-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|woff2?|eot)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        })
    ]
    
}