### npm的默认查找是js文件，现在用的ts文件 会报错找不到文件
配置resolve.extensions字段，然后还需要load来解析ts文件不然还是会有问题
### 还要安装vue-loader,这样webpack就能解析单文件组件了.这个组件做了那些事情呢
1. 允许其他webpack loaders在.vue文件中寻找各自的部分
2. Allows custom blocks in a .vue file that can have custom loader chains applied to them;
3. Treat static assets referenced in <style> and <template> as module dependencies and handle them with webpack loaders;
4. Simulate scoped CSS for each component;
5. State-preserving hot-reloading during development.
### 装完了vue-loader vue-template-compiler 提示You may need an additional loader to handle the result of these loaders.
所以呢还需要安装各处处理css js的loader
### 这中间踩了个大坑，已经爬出来了但还没太想明白
最开始的想法是用es6来写webpack配置文件，后来选用了一种方案就是直接把配置文件命名问webpack.config.xxx.js(eg:webpack.config.babel.js)，这样webpack-dev-server会自动选用合适的loader来编译配置文件再输出给node去执行。但是运行后报错，提示只能输出Plugin/Preset files are not allowed to export objects, only functions. 所以按照网上的提示把配置给升级到了babel7,结果有提示需要7的版本，但是我的是6的版本。可是我的babel配置明明是7啊。不过我查看我的配置版本确实是6.我也不知道这是为啥，然后我就不用webpack.config.babel.js，正常写一个webpack.config.js,运行起来就没有问题。