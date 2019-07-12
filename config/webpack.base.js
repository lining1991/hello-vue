const path = require('path');
// const webpack
module.export = {
    mode: 'development',
    devServer: {
        port: 8084
    },
    entry: {
        app: './src/main.ts'
    }
}