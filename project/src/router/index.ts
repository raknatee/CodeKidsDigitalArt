import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import Unit from "@/views/units/Unit.vue"

import {units} from './constant'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

for(let i=1;i<=12;i++){
  routes.push({
    path: `/unit${i}`,
    component: Unit
  })
}


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
