import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobsDetails.vue'
import PageNotFound from '../views/PageNotFound.vue'
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'about',
    component:About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component:Jobs
  },
  {
    path: '/signup',
    name: 'SignUp',
    component:SignUp
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetails',
    component:JobsDetails,
    props:true,
  },
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  {
    path:'/:catchAll(.*)',
    name:'PageNotFound',
    component:PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
