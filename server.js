const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const resolve = file => path.resolve(__dirname, file)
const proxyMiddleware = require('http-proxy-middleware')

const config = require('./config')
const isProd = process.env.NODE_ENV === 'production'

const app = express()

let renderer
if (isProd) {
  const bundle = require('./output/vue-ssr-bundle.json')
  const template = fs.readFileSync(resolve('./output/index.html'), 'utf-8')
  renderer = createRenderer(bundle, template)
} else {
  require('./build/dev-server')(app, (bundle, template) => {
    renderer = createRenderer(bundle, template)
  })
}

function createRenderer(bundle, template) {
  return require('vue-server-renderer').createBundleRenderer(bundle, {
    template,
    cache: require('lru-cache')({
      max: 1000,
      maxAge: 1000 * 60 * 15
    })
  })
}

const serve = (path, cache) => express.static(resolve(path), {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

const proxyTable = {
  '/v1': {
    target: config.baseUrl,
    changeOrigin: true
    // pathRewrite: {
    //   '^/api': '/api'
    // }
  }
}

Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

const v = Date.now()

app.use(require('cookie-parser')())
app.use('/output', serve('./output', true))
app.use('/service-worker.js', serve('./output/service-worker.js'))
app.use(favicon(path.resolve(__dirname, 'public/images/favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))

app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }

  const s = Date.now()

  res.setHeader('Content-Type', 'text/html')

  const errorHandler = err => {
    if (err && err.code === 404) {
      res.status(404).sendfile('public/404.html')
    } else {
      res.status(500).end('500 - Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err)
    }
  }

  const context = {
    title: '成功没有奇迹，只有积累',
    keywords: 'shudong博客, stark博客',
    description: '记录stark的生活',
    version: v,
    url: req.url,
    cookies: req.cookies
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      return errorHandler(err)
    }
    res.end(html)
    console.log(`whole request: ${Date.now() - s}ms`)
  })
})

const port = process.env.PORT || 3005
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
