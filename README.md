# my-vue-template

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
这里使用的构建方式是： Runtime-only （只包含运行时）
Runtime-only 打包方式并不支持vue实例中的template属性,如下代码：
`new Vue({
  template: '<div>{{ hi }}</div>'
})`
若是开发需求需要用到请使用 Runtime + Compiler（运行时+编译器） 的打包方式
只要将build/webpack.base.conf中的alias中的'vue$': 'vue/dist/vue.esm.js'注释拿掉即可

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
