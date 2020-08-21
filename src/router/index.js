import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '../views/Forget.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg,
    beforeEnter: (to, from, next) => {
      if (from.name === 'Login') {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
