import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import * as uiv from 'uiv'
import titleMixin from './util/title'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
Vue.mixin(titleMixin)
if (process.browser) {
  // const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
  // Vue.use(VueAwesomeSwiper)
  const window = window;
}
Vue.use(uiv)
// import Highlight from 'vue-markdown-highlight'
// Vue.use(Highlight)
export function createApp () {
  // 同步路由状态(route state)到 store
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  // 暴露 app, router 和 store。
  return {app, router, store}
}
