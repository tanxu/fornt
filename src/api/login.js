import axios from '../utils/request'

/**
 * 获取验证码接口
 * @param sid 唯一标识
 * @returns {AxiosPromise}
 */
const getCaptcha = (sid) => {
  return axios.get('/getCaptcha', {
    params: {
      sid: sid
    }
  })
}
/**
 * 登录接口
 * @param loginInfo 登录信息
 * @returns {AxiosPromise}
 */
const login = (loginInfo) => {
  return axios.post('/login', { ...loginInfo })
}

/**
 * 找回密码接口
 * @param option 用户信息
 * @returns {AxiosPromise}
 */
const forget = (option) => {
  return axios.post('/forget', { ...option })
}

export {
  getCaptcha,
  forget,
  login
}
