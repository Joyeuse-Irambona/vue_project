import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/book_list.vue'
import add from '../views/add.vue'
import show_book from '../views/show_book.vue'
import update from '../views/update.vue'
import sign_up from '../views/sign_up.vue'
import login from '../views/login.vue'
import book_list from '../views/book_list.vue'
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
    component: book_list
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/book/:id',
    name: 'book',
    component: show_book
  },
  {
    path: '/update/:id',
    name: 'update',
    component: update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
