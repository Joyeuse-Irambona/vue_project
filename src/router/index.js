import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '../views/product_list.vue'
import add from '../views/add.vue'
import show_product from '../views/show_product.vue'
import update from '../views/update.vue'
import sign_up from '../views/sign_up.vue'
import login from '../views/login.vue'
import product_list from '../views/product_list.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: sign_up
  },
  {
    path: '/list',
    name: 'list',
    component: product_list
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/product/:id',
    name: 'product',
    component: show_product
  },
  {
    path: '/update/:id',
    name: 'update',
    component: update
  }
]

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
