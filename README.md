## 博客：
 [博客](https://shudong.wang)
## 特性
 * vuex
 * router
 * proxy
 * vuex
 * axios
 * ssr
 * stylus
 * bootstarp
## demo blog
已经完善的blog 
## 安装

```
npm i
```

## 开发模式
```
npm run dev
```

## 打包项目

```
npm run build
```

## 打包后运行
```
npm start
```

## 项目部署 
```
npm run pm2
```
## Nginx 反向代理

## 跨域代理
```
const proxyTable = {
  '/v1': {
    target: config.baseUrl,
    changeOrigin: true
    // pathRewrite: {
    //   '^/api': '/api'
    // }
  }
}
```

界面：
https://cdn.nlark.com/yuque/0/2018/png/188623/1545145800681-c869add7-fa75-47aa-a955-6bbcf7c7db67.png