const path = require('path');
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
    }
    
}