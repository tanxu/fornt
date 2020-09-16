import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Home from '@/views/Home.vue'

const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const Reg = () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '../views/Forget.vue')
const Index = () => import(/* webpackChunkName: "index" */ '../views/channels/Index.vue')
const Center = () => import(/* webpackChunkName: "center" */ '../views/Center.vue')
const UserCenter = () => import(/* webpackChunkName: "user-center" */ '../components/user/Center.vue')
const UserSettings = () => import(/* webpackChunkName: "user-center" */ '../components/user/Settings.vue')
const UserOthers = () => import(/* webpackChunkName: "user-center" */ '../components/user/Others.vue')
const UserMessage = () => import(/* webpackChunkName: "user-center" */ '../components/user/Message.vue')
const UserPosts = () => import(/* webpackChunkName: "user-center" */ '../components/user/Posts.vue')
const User = () => import(/* webpackChunkName: "user-center" */ '../views/User.vue')
const MyInfo = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/MyInfo.vue')
const PicUpload = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/PicUpload.vue')
const Password = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/Password.vue')
const Accounts = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/Accounts.vue')
const MyPost = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/MyPost.vue')
const MyCollection = () => import(/* webpackChunkName: "user-center" */ '../components/user/common/MyCollection.vue')
const Template1 = () => import(/* webpackChunkName: "template1" */ '../views/channels/Template1.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: Index
      },
      {
        path: '/index/:catalog',
        name: 'catalog',
        component: Template1
      }
    ]
  },
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
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/center',
    component: Center,
    meta: { requireAuth: true },
    children: [
      {
        path: '',
        name: 'UserCenter',
        component: UserCenter
      },
      {
        path: 'settings',
        name: 'UserSettings',
        component: UserSettings,
        children: [
          {
            path: 'info',
            name: 'UserSettingsInfo',
            component: MyInfo
          },
          {
            path: 'pic',
            name: 'UserSettingsPicUpload',
            component: PicUpload
          },
          {
            path: 'passwd',
            name: 'UserSettingsPassword',
            component: Password
          },
          {
            path: 'accounts',
            name: 'UserSettingsAccounts',
            component: Accounts
          }
        ]
      },
      {
        path: 'others',
        name: 'UserOthers',
        component: UserOthers
      },
      {
        path: 'message',
        name: 'UserMessage',
        component: UserMessage
      },
      {
        path: 'posts',
        name: 'UserPosts',
        component: UserPosts,
        children: [
          {
            path: 'mypost',
            name: 'UserPostsMyPost',
            component: MyPost
          },
          {
            path: 'mycollection',
            name: 'UserPostsMyCollection',
            component: MyCollection
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})
router.beforeEach((to, from, next) => {
  // 取缓存中的token和用户信息
  const token = localStorage.getItem('token')
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== '' && token !== null) {
    store.commit('setToken', token)
    store.commit('setUserInfo', userInfo)
    store.commit('setIsLogin', true)
  }

  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogin = store.state.isLogin
    if (isLogin) {
      // 已经登录
      next()
    } else {
      // 未登录
      next('/login')
    }
  } else {
    next()
  }
})

export default router
