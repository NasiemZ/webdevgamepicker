import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from  '../views/FAQ.vue'
import Viewgame from "@/views/Viewgame";
import Impressum from "@/views/Impressum";
import Random from "@/views/Random";



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/viewgame',
    name: 'Viewgame',
    component: Viewgame
  }
]

const router = new VueRouter({
  routes
})

export default router
