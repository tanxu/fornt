import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from 'vee-validate/dist/locale/zh_CN.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: {
      fields: {
        username: '账号',
        email111: '邮箱',
        password: '密码',
        vercode: '验证码'
      },
      // validation: zh.messages
      validation: {
        ...zh.messages,
        required: '请输入{_field_}',
        email: '请输入正确的{_field_}!!!'
      }
    }
  }
})

export { i18n }
