import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Price from '../views/Price.vue'
import Map from '../views/Map.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router