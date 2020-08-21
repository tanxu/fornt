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
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
  }
  Vue.prototype.$confirm = function (msg, success, cancel) {
    // 逻辑...
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true
    if (typeof success !== 'undefined') {
      instance.success = success
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel
    }
  }
}

export default Alert
