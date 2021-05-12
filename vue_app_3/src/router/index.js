import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'introduction',
    component: Introduction
  },
  {
    path: '/spec',
    name: 'spec',
    component: () => import(/* webpackChunkName: "spec" */ '../views/Spec.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/*',
    name: 'unknown',
    component: () => import(/* webpackChunkName: "unknown" */ '../views/unknown.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
