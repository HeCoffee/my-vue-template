# my-vue-template

> A Vue.js project template

## 目录结构
```
├── build                 webpack 打包,预编译,热加载 配置文件
├── config                webpack 开发,测试,生产环境的配置文件
├── dist                  webpack 打包好的文件放在该目录下
├── index.html            vue 项目容器
├── package.json          npm 包 脚本 配置文件
├── README.md             说明文件
├── src                   vue项目资源 路由 状态管理 插件 组件 入口文件
├── static                静态资源
└── test                  e2e测试脚本 配置文件

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
# 这里使用的构建方式是： Runtime-only （只包含运行时）
# Runtime-only 打包方式并不支持vue实例中的template属性,如下代码：
new Vue({
  template: '<div>{{ hi }}</div>'
})
若是开发需求需要用到请使用 Runtime + Compiler（运行时+编译器） 的打包方式
只要将build/webpack.base.conf中的alias中的'vue$': 'vue/dist/vue.esm.js'注释拿掉即可
但是Runtime-only打包方式的项目大小比Runtime + Compiler打包方式的项目小30%的体积
通过vue-loader会将*.vue文件中的模板预编译成js 并不需要编译器
所以官方建议尽可能使用Runtime-only打包方式

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
### 代码风格

- [eslint](https://github.com/eslint/eslint);
- [standard](https://github.com/feross/standard)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
