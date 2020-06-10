import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/Home.vue'
import TableView  from '../views/Table.vue'
import CanvasView  from '../views/Canvas.vue'


Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView 
  },
  {
    path: '/table',
    name: 'Table',
    component: TableView 
  },
  {
    path: '/canvas',
    name: 'Canvas',
    component: CanvasView 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
