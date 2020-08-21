import AlertComp from './Alert'

const Alert = {}
Alert.install = function (Vue, options) {
  const AlertConstructor = Vue.extend(AlertComp)
  const instance = new AlertConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  // 4. 添加实例方法
  Vue.prototype.$alert = function (msg) {
    // 逻辑...
    instance.msg = msg
    instance.isShow = true
  }
}

export default Alert
