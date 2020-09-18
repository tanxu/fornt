<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinHelp" @click="showInfo">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinTop">活跃榜<span class="layui-badge-dot"></span></a>
      <span class="fly-signin-days">已连续签到<cite>16</cite>天</span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <button class="layui-btn layui-btn-danger" id="LAY_signin">今日签到</button>
      <span>可获得<cite>5</cite>飞吻</span>

      <!-- 已签到状态 -->
      <!--
      <button class="layui-btn layui-btn-disabled">今日已签到</button>
      <span>获得了<cite>20</cite>飞吻</span>
      -->
    </div>
    <div class="modal" v-show="isShow">
      <div class="mask" @click="close"></div>
      <div class="layui-layer layui-layer-page" :class="{active: isShow}">
        <div class="layui-layer-title">签到说明 <i @click="close" class="layui-icon layui-icon-close pull-right"></i></div>
        <div class="layui-layer-content">
          <div class="layui-text">
            <blockquote class="layui-elem-quote">“签到”可获得的社区积分,规则如下</blockquote>
            <table class="layui-table">
              <thead>
              <tr>
                <td>连续签到天数</td>
                <td>每天可获积分</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>&lt;5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>&ge;5</td>
                <td>10</td>
              </tr>
              <tr>
                <td>&ge;15</td>
                <td>15</td>
              </tr>
              <tr>
                <td>&ge;30</td>
                <td>20</td>
              </tr>
              <tr>
                <td>&ge;100</td>
                <td>30</td>
              </tr>
              <tr>
                <td>&ge;365</td>
                <td>50</td>
              </tr>
              </tbody>
            </table>
            <div>
              <p>中间若有间隙,则连续天数重新计算</p>
              <p class="orange">不可利用程序自动签到,否则积分清零</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    showInfo () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes bounceIn {
  0%{opacity: 0;transform: scale(0.5)}
  100%{opacity: 1;transform: scale(1)}
}
.mask {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.layui-layer{
  position: fixed;
  width: 300px;
  height: 480px;
  top:50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  background-color: #fff;
  z-index: 20001;
  &.active{
    animation-fill-mode: both;
    animation-duration: 0.2s;
    animation-name: bounceIn;
  }
}
.layui-layer-title{
  padding-right: 20px;
}
.layui-layer-content{
  padding: 20px;
}
</style>
