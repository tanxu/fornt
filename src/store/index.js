import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: '',
    // 是否登录
    isLogin: false,
    // 用户唯一标识
    token: '',
    // 用户信息
    userInfo: {}
  },
  mutations: {
    setSid (state, value) {
      state.sid = value
    },
    setToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    setUserInfo (state, value) {
      state.userInfo = value
      localStorage.setItem('userInfo', JSON.stringify(value))
    },
    setIsLogin (state, value) {
      state.isLogin = value
    }
  },
  actions: {
  },
  modules: {
  }
})
