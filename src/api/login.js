import axios from '../utils/request'

/**
 * 获取验证码接口
 * @param sid 唯一标识
 * @returns {AxiosPromise}
 */
const getCaptcha = (sid) => {
  return axios.get('/public/getCaptcha', {
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
  return axios.post('/login/login', { ...loginInfo })
}
/**
 * 注册接口
 * @param loginInfo 注册信息
 * @returns {AxiosPromise}
 */
const reg = (regInfo) => {
  return axios.post('/login/reg', { ...regInfo })
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
  login,
  reg
}
