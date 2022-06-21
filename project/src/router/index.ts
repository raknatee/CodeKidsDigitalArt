import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

import Unit1 from "@/views/units/Unit1.vue"
import Unit2 from "@/views/units/Unit2.vue"
import Unit3 from "@/views/units/Unit3.vue"
import Unit4 from "@/views/units/Unit4.vue"
import Unit5 from "@/views/units/Unit5.vue"

const vuePages = [Unit1,Unit2,Unit3,Unit4,Unit5]

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
