<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'Login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <ValidationObserver ref="observer" v-slot="{validate}">
                <form method="post">
                  <div class="layui-form-item">
                    <label for="L_username" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="username" rules="required|email" v-slot="v">
                        <input type="text" id="L_username" v-model="username" placeholder="请输入用户名" name="username"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_nickname" class="layui-form-label">昵称</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="nickname" rules="required|max:10" v-slot="v">
                        <input type="text" id="L_nickname" v-model="nickname" placeholder="请输入昵称" name="nickname"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <ValidationProvider vid="password" rules="required|min:6|max:16" v-slot="v">
                        <input type="password" id="L_pass" v-model="password" placeholder="请输入密码" name="pass"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                    <div class="layui-form-mid layui-word-aux">6到20个字符</div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_repass" class="layui-form-label">确认密码</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="repass" rules="required|confirmed:password" v-slot="v">
                        <input type="password" id="L_repass" v-model="repass" name="repass" placeholder="请再次输入密码"
                               autocomplete="off" class="layui-input">
                        <div class="err-tips" v-if="v.errors[0]">{{ v.errors[0] }}</div>
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <ValidationProvider name="vercode" rules="required|length:4" v-slot="v">
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
                    <button class="layui-btn" type="button" @click="validate().then(submit)">立即注册</button>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者直接使用社交账号快捷注册</span>
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
import { getCaptcha, reg } from '@/api/login'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { v4 as uuid } from 'uuid'

export default {
  name: 'Reg',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      svg: '',
      username: '',
      nickname: '',
      password: '',
      repass: '',
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
    _getCaptcha () {
      const sid = this.$store.state.sid
      getCaptcha(sid).then(res => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    },
    async submit () {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      reg({
        username: this.username,
        password: this.password,
        code: this.vercode,
        nickname: this.nickname,
        sid: this.$store.state.sid
      }).then(res => {
        if (res.code === 200) {
          this.username = ''
          this.password = ''
          this.vercode = ''
          this.nickname = ''
          this.repass = ''
          requestAnimationFrame(() => {
            this.$refs.observer.reset()
          })
          this.$alert('注册成功')
          // TODO 让用户登录
          setTimeout(() => {
            this.$router.push({
              name: 'Login'
            })
          }, 1000)
        } else {
          this.$refs.observer.setErrors(res.msg)
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
