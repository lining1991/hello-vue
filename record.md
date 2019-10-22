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
### 报错vue-warn-cannot-find-element
new htmlWebpackPlugin({inject: ''}) 配错了 配置成head改为body
### 入口文件ts格式的引入scss又报错无法识别了
我原本以为是因为ts的问题，其实是我还没处理图片字体图标的laoder问题
### vue单文件组件中使用ts
我把这个awesome-typescript-loader换成ts-loader 并追加配置
另一种css的解决方案：[css-modules](https://juejin.im/post/59c62f8e6fb9a00a51439ad5)
https://juejin.im/post/5a7803335188257a5d2b0fed

- [] script支持ts
- [] css-modules

1. 点击箭头需要把写的信息添加到列表里边
2. 需要研究下vuex相关的列一下
### 有个很奇怪的事情，就是@babel-polyfill时，useage:entry 但是入口文件处并没有引入，也没有报错

最小化可执行方案，先把整体框架大概搞出来再完善具体细节
配置快捷路径：resolve:{ alias: {'src', Path.resolve(__dirname, './src')}};
下一步改做的是从列表页到详情页面的时候数据的传递，
需要给数据新增ID，可以用mock进行uuid
1023，
进入详情页的时候，做一个loading转场
详情页的解构赋值没有用上，感觉赋值地方写的有些啰嗦
以及列表页面点勾，需要删除选项的逻辑
还需要弄如果在详情页进行编辑，再回退的时候需要怎么处理
以及需要找一个日期插件

