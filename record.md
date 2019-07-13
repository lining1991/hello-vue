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