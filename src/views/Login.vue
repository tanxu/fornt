<template>
  <div class="layui-container fly-marginTop login-container">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name: 'Reg'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <ValidationObserver ref="observer" v-slot="{validate}">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="L_username" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
<!--                      <ValidationProvider name="email111" rules="required|email" v-slot="v">-->
                      <ValidationProvider name="username" rules="required|email" v-slot="v">
                        <input type="text" v-model="username" placeholder="请输入用户名" id="L_username" name="username"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="password" rules="required|min:6" v-slot="v">
                        <input type="password" v-model="password" placeholder="请输入密码" id="L_pass" name="password"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="vercode" ref="vercode" rules="required|length:4" v-slot="v">
                        <input type="text" v-model="vercode" id="L_vercode" name="vercode" placeholder="请输入验证码"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <div>
                      <span class="svg" v-html="svg" @click="_getCaptcha"></span>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <button class="layui-btn" @click="validate().then(submit)" type="button">立即登录</button>
                    <span style="padding-left:20px;">
                      <router-link :to="{name: 'Forget'}">忘记密码？</router-link>
                  </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq"
                       title="QQ登入"></a>
                    <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                       class="iconfont icon-weibo" title="微博登入"></a>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCaptcha, login } from '@/api/login'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { v4 as uuid } from 'uuid'

export default {
  name: 'Login',
  components: { ValidationProvider, ValidationObserver },
  data () {
    return {
      svg: '',
      username: 'brian@qq.com',
      password: '112233',
      vercode: ''
    }
  },
  mounted () {
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this._getCaptcha()
  },
  methods: {
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }

      login({
        username: this.username,
        password: this.password,
        code: this.vercode,
        sid: this.$store.state.sid
      }).then(res => {
        if (res.code === 200) {
          this.$store.commit('setUserInfo', res.data)
          this.$store.commit('setIsLogin', true)
          this.$store.commit('setToken', res.token)
          this.username = ''
          this.password = ''
          this.vercode = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
          this.$router.push({
            name: 'Home'
          })
        } else if (res.code === 401) {
          this.$refs.vercode.setErrors([res.msg])
        } else {
          this.$alert(res.msg)
        }
      })
    },
    _getCaptcha () {
      const sid = this.$store.state.sid
      getCaptcha(sid).then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .layui-container {
    background-color: #fff;
  }

  input {
    width: 190px;
  }

  .imooc-link {
    margin-left: 20px;

    &:hover {
      color: #009688;
    }
  }

  .svg {
    position: relative;
    top: -4px;
  }
}
</style>
