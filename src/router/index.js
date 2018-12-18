import Vue from 'vue'
import VueRouter from 'vue-router'
const HomeIndex = () => import('../page/home/index.vue')
const Product = () => import('../page/product/index.vue')
const ArticleList = () => import('../page/blog/ArticleList.vue')
const Article = () => import('../page/blog/Article.vue')
const About = () => import('../page/about/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: __dirname,
  routes: [{
    path: '/',
    component: ArticleList
  }, {
    path: '/blog',
    component: ArticleList
  }, {
    path: '/product',
    component: Product
  },
  {
    path: '/article/:id?',
    name: 'HelloWorld',
    component: Article
  }]
})

export default router
