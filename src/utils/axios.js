import axios from 'axios'
import errorHandle from './errorHandle'
const CancelToken = axios.CancelToken

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.pedding = {}
  }

  // 获取axios的配置
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
    return config
  }

  removePending (key, isRequest = false) {
    if (this.pedding[key] && isRequest) {
      this.pedding[key]('取消重复的请求')
    }
    delete this.pedding[key]
  }

  // 设定拦截器
  interceptors (instance) {
    // 封装 axios 请求，返回重新封装的数据格式
    instance.interceptors.request.use((config) => {
      const key = config.url + '&' + config.method
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) => {
        this.pedding[key] = c
      })
      return config
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })

    instance.interceptors.response.use((res) => {
      const key = res.config.url + '&' + res.config.method
      this.removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })
  }

  // 创建实例
  request (options) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance((newOptions))
  }

  get (url, config) {
    const options = Object.assign({
      method: 'get',
      url: url
    }, config)
    return this.request(options)
  }

  post (url, data) {
    return this.request({
      method: 'post',
      url: url,
      data: data
    })
  }
}

export default HttpRequest
