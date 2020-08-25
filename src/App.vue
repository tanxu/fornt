<template>
  <div id="app">
    <imooc-header />
    <router-view />
    <imooc-footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    'imooc-header': Header,
    'imooc-footer': Footer
  }
}
</script>

<style lang="less">
  @import "assets/layui/css/layui.css";
  @import "assets/layui/css/modules/layer/default/layer.css";
  @import "assets/css/global.css";

  .svg{
    position: relative;
    top: -4px;
  }
  .gray{
    color: #999;
  }
</style>
