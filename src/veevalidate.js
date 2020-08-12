import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '是必填选项！'
})
extend('email', {
  ...email,
  message: '格式有误！'
})
extend('password', {
  validate: (value) => {
    return value.length >= 6 && value.length <= 20
  },
  message: '长度位6-20位！'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
