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