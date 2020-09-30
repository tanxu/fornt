<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinHelp" @click="showInfo">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" id="LAY_signinTop" @click="showTop">活跃榜<span class="layui-badge-dot"></span></a>
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

    <sign-info :is-show="isShow" @closeModal="close"/>
    <sign-list :is-show="showList" @closeModal="close"/>
  </div>
</template>

<script>
import SignInfo from '@/components/sidebar/SignInfo'
import SignList from '@/components/sidebar/SignList'
export default {
  name: 'Sign',
  components: { SignInfo, SignList },
  data () {
    return {
      isShow: false,
      showList: false,
      current: 0
    }
  },
  methods: {
    showTop () {
      this.showList = true
    },
    choose (index) {
      this.current = index
    },
    showInfo () {
      this.isShow = true
    },
    close () {
      this.isShow = false
      this.showList = false
    }
  }
}
</script>

<style lang="less">
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
.layui-tab-content{
  padding: 0 10px;
}
.layui-tab-item{
  line-height: 45px;
  li{
    border-bottom: 1px dotted #dcdcdc;
    &:last-child{
      border-bottom: none;
    }
  }
  img{
    width: 30px;
    height: 30px;
    border-radius: 2px;
    margin-right: 10px;
  }
}
</style>
