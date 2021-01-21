import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/blog/glosario',
    name: 'glosario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Glosario.vue')
  },
  {
    path: '/blog/teoria_aprendizaje',
    name: 'teoria_aprendizaje',
    component: () => import(/* webpackChunkName: "about" */ '../views/TeoriaAprendizaje.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
