## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
# 建立项目步骤
```
cnpm install vue
cnpm install --global vue-cli
vue init webpack my-project
cd my-project
cnpm install
cnpm run dev
```
# 添加less
> 1. npm install less less-loader --save
> 2. 修改webpack.config.js文件，配置loader加载依赖，让其支持外部的less,在原来的代码上添加
```
{
    test: /\.less$/,
    loader: "style-loader!css-loader!less-loader",
},
在style标签里加上lang=”less”
```
# 局域网内无法访问
* config/index.js , 修改host:“localhost”为 host:"0.0.0.0"

# 代码分割
* 应用程序的代码分割或惰性加载，有助于减少浏览器在初始渲染中下载的资源体积，可以极大地改善大体积 bundle 的可交互时间(TTI - time-to-interactive)
https://ssr.vuejs.org/zh/guide/routing.html#代码分割
```
// 这里进行修改……
import Foo from './Foo.vue'

// 改为这样：
const Foo = () => import('./Foo.vue')
```
# 代码发布
* ssh root@xx.xx.xx.xx      gitbash可以连接到远程ip
* 域名与服务器的备案信息得一致

# v-model的意义
```
<input :value="content" />      //单向=>值由content决定
<input v-model="content" />     //双向数据绑定=>input可以改变content的值
。。。
data:{
    content:"xxxx"
}
```