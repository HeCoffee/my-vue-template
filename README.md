# my-vue-template

> A Vue.js project template

## 目录结构
```
├── build                 webpack 打包,预编译,热加载 配置文件
├── config                webpack 开发,测试,生产环境的配置文件
├── dist                  执行打包命令后,自动生成文件夹以及文件
├── index.html            vue 项目容器
├── package.json          npm 包 脚本 配置文件
├── README.md             说明文件
├── src                   vue项目资源 路由 状态管理 插件 组件 入口文件
├── static                静态资源
└── test                  e2e测试脚本 配置文件

```

### 安装依赖
```
# install dependencies
npm install
```

### 启动开发环境

``` 
# serve with hot reload at localhost:8080
# 启动开发环境 端口号为8080 
# 开发环境配置文件 config/index.js dev属性中  

npm run dev
```

### 打包构建
```
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
```
### 打包构建方式
- Runtime-only （只包含运行时）
- Runtime + Compiler（运行时+编译器）
```
# 这里使用的构建方式是： Runtime-only （只包含运行时）
# Runtime-only 打包方式并不支持vue实例中的template属性,如下代码：
new Vue({
  template: '<div>{{ hi }}</div>'
})
#若是开发需求需要用到请使用 Runtime + Compiler（运行时+编译器） 的打包方式
#只要将build/webpack.base.conf中的alias中的'vue$': 'vue/dist/vue.esm.js'注释拿掉即可
```

<p>但是Runtime-only打包方式的项目大小比Runtime + Compiler打包方式的项目<b>小30%</b>的体积</p>
<p>通过vue-loader会将*.vue文件中的模板预编译成js 并不需要编译器</p>
<p>所以官方建议<b>尽可能使用Runtime-only打包方式</b></p>

### 运行测试
```
# run e2e tests
npm run e2e

# run e2e tests no browser 不打开浏览器模式,方便在服务器上进行测试
npm run e2e-headless

# run all tests
npm test

# 个人认为前端只需要e2e测试,后端才需要单元测试 所以并未配置单元测试
```

### 代码风格

- [eslint](https://github.com/eslint/eslint);
- [standard](https://github.com/feross/standard)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
