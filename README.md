# my-vue-template

> A Vue.js project template

### 目录结构
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

### 关于程序（src）

- 程序入口(`src/main.js`)
- 路由配置(`src/router`)
- 状态管理(`src/store`)
- 组件与视图(`src/components`)
- 插件(`src/plugins`)
- 公共函数,过滤器函数(`src/utils`)
- 样式(`src/styles`)


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

<p>Runtime-only打包方式的项目大小比Runtime + Compiler打包方式的项目<b>小30%</b>的体积</p>
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


### 过滤器
<p>vue官方不提供过滤器,需要自定义,可参考src/utils/filter.js进行编写</p>

```
# main.js
import * as filters from './utils/filter' 
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
```

### 插件
<p>很多需求并不需要自己重新编写,引入相对应的库即可</p>
<p>常用的引入工具库的方式有两种</p>

- *.vue当中import进去
```
# MyComponent.vue 文件
import _ from 'lodash';
export default {
  created() {
    console.log(_.isEmpty() ? 'Lodash已经引入' : '引入失败');
  }
}
```
- 将工具库代理为 Vue 原型对象的属性

```
# plugins/axios_plugin.js
# 官方推荐的 http请求库
import axios from 'axios'
export default {
  // 默认别名是 $axios
  install: function (Vue, name = '$axios') {
    Object.defineProperty(Vue.prototype, name, { value: axios })
  }
}
# main.js
import AxiosPlugin from './plugins/axios_plugin' // 引入http库插件
Vue.use(AxiosPlugin, '$http') // 覆盖默认别名
```
<p>这里推荐用第二种,在plugins/中已编写了几个常用库的插件例子</p>

### 数据请求(http)
- 在状态管理中进行数据请求
```
# 在store/action中进行数据请求,建议使用utils中的http公共函数
import {getMethod} from '../../../utils/http'
const prefix = '/api/v1'
export default {
  // default action
  async getTemplateValueAction ({ commit }, params) {
    let url = `${prefix}/test`
    let result = await getMethod({ url, params })
    commit('setTemplateValue', result)
  }
}
```
- 不使用状态管理,在*.vue组件进行数据请求
```
# 建议使用插件形式引入 引入方式请看插件部分
# Hello.vue
export default {
  name: 'hello',
  mounted () {
    let url = 'api/v1/test'
    let params = {}
    this
      .$http({ url, params })
      .then((result) => {
        console.log(result)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
```

-------
未完待续...
