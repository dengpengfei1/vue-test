import Vue from 'vue'
import Router from 'vue-router'

let home = resolve => require(['../pages/home/index.vue'], resolve)
let item = resolve => require(['../pages/item/index.vue'], resolve)
let score = resolve => require(['../pages/score/index.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/score',
      name: 'score',
      component: score
    }
  ]
})
