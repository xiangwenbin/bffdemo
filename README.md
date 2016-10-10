## 开发环境启动
## babel-node index.js 或node index.js 或 nodedev index.js
## 
## 生成环境 不需要打包
##babel app --out-dir dist 
## 依赖包说明
- transform-strict-mode （由于很多 ES 特性需要 严格模式才能打开， 添加这个插件就会自动在所有文件上添加 'use strict';）
- transform-es2015-modules-commonjs （将 ES6 模块标准 转换成 Node.js 用的 CMD 模块标准）
transform-es2015-spread （支持 ES6 的 spread 操作符）
- transform-es2015-destructuring （支持 赋值解构）
- transform-es2015-parameters （支持默认参数， 参数解构， 以及其他参数）

## 目录结构说明
app  js 根目录
  -const 常量 目录
  -filter 过滤器 koa中间件存放目录
  -model graphql schema 模型存放目录
  -router 路由 异步接口目录
  -service 微服务数据接口
  -view 前端模板文件目录
