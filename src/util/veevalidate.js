import { extend, localize } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN.json'
import { required, email, min, length, confirmed } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    username: '账号',
    email111: '邮箱',
    password: '密码',
    vercode: '验证码'
  },
  fields: {
    email111: {
      email: '请输入正确的{_field_}',
      required: '请输入{_field_}!!!'
    }
  }
})
