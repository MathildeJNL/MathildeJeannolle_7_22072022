import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/poste',
    name: 'poste',
    component: () => import(/* webpackChunkName: "about" */ '../views/Poste.vue')
  },
  {
    path: '/newpost',
    name: 'newpost',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPost.vue')
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path: "/modification",
    name: "modification",
    component: () => import(/* webpackChunkName: "about" */ '../views/ModificationProfil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
