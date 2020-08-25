// 内容相关
import axios from '@/utils/request'
import qs from 'qs'

/**
 * 读取文章列表
 * @param options 读取文章列表接口参数
 * @returns {AxiosPromise}
 */
const getList = (options) => {
  return axios.get(`/public/list?${qs.stringify(options)}`)
}
/**
 * 获取温馨提醒
 * @returns {AxiosPromise}
 */
const getTips = () => {
  return axios.get('/public/tips')
}
/**
 * 获取友情链接
 * @returns {AxiosPromise}
 */
const getLinks = () => {
  return axios.get('/public/links')
}
/**
 * 获取本周热议
 * @returns {AxiosPromise}
 */
const getTops = () => {
  return axios.get('/public/topWeek')
}

export {
  getList,
  getTips,
  getLinks,
  getTops
}
