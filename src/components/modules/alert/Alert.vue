<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type==='alert'">
        <div class="btnCommon success" @click="close">确定</div>
      </div>
      <div v-else class="space-round">
        <div class="btnCommon cancel" @click="cancelEvent">取消</div>
        <div class="btnCommon success" @click="successEvent">确认</div>
      </div>
    </div>
    <div class="mask" @click="closeMask"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => { console.log('点击的success') }
    },
    cancel: {
      type: Function,
      default: () => { console.log('点击的cancel') }
    }
  },
  methods: {
    close () {
      this.isShow = false
    },
    closeMask () {
      if (this.type === 'alert') {
        this.close()
      }
    },
    cancelEvent () {
      this.cancel()
      this.close()
    },
    successEvent () {
      this.success()
      this.close()
    }
  }
}
</script>

<style lang="less" scoped>
@btn-main:#009688;
@btn-dark:darken(@btn-main,5%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background: #ffffff;
  border-radius: 6px;
  left: 50%;
  top: 50%;
  margin-top: -75px;
  margin-left: -150px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  z-index: 3000;
}

.flex {
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
}

.space-round{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  z-index: 2000;
}

.btnCommon {
  width: 105px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  cursor: pointer;
  &.success {
    background-color: @btn-main;
    color: #ffffff;
    &:hover{
      background-color: @btn-dark;
    }
  }
  &.cancel{
    background-color: #ededed;
    color: #333;
  }
}
</style>
