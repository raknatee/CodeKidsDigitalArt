import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import Unit1 from "@/views/units/Unit1.vue"

const vuePages = [Unit1]

import {units} from './constant'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

for(let i=0;i<vuePages.length;i++){
  routes.push({
    path: `/unit-${units[i].unitId}`,
    component: vuePages[i]
  })
}


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
