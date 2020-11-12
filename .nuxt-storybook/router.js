import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _673c31b2 = () => interopDefault(import('../pages/index.stories.js' /* webpackChunkName: "pages/index.stories" */))
const _24e0339a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _44b027a0 = () => interopDefault(import('../pages/login.stories.js' /* webpackChunkName: "pages/login.stories" */))
const _5b389083 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/index.stories",
    component: _673c31b2,
    name: "index.stories"
  }, {
    path: "/login",
    component: _24e0339a,
    name: "login"
  }, {
    path: "/login.stories",
    component: _44b027a0,
    name: "login.stories"
  }, {
    path: "/",
    component: _5b389083,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
