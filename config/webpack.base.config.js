const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// VueLoaderPlugin负责拷贝你已经定义的其他rules,然后应用到.vue的各个相关block 比方说<script>
// const webpack
module.exports = {
    mode: 'development',
    devServer: {
        port: 8084
    },
    entry: {
        app: './src/main.ts'
    },
    output: {
        filename: '[name].[hash:7].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader'
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