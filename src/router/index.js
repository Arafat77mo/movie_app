import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginview from '../views/login'
import SignUpView from '../views/SignUpView'

import dasgoboardView from  '../views/DashboardView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginview
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component:dasgoboardView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
