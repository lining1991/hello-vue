import Path from 'path';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import autoprefixer from 'autoprefixer';
// VueLoaderPlugin负责拷贝你已经定义的其他rules,然后应用到.vue的各个相关block 比方说<script>
// const webpack
module.exports = {
    mode: 'development',
    devServer: {
        port: 8084
    },
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash:7].js',
        path: Path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.tsx', '.json']
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
                // loader: 'awesome-typescript-loader',
                exclude: /node_modules/
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
    
}