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

  .pl0{
    padding-left: 0;
  }
  .pr0{
    padding-right: 0;
  }
  .text-center{
    text-align: center;
  }
  .text-left{
    text-align: left;
  }
  .text-right{
    text-align: right;
  }
  .pull-right{
    float: right !important;
  }
  .orange{
    color: #ff5722;
  }
  .svg{
    position: relative;
    top: -4px;
  }
  .gray{
    color: #999;
  }
  .pd0{
    padding: 0 !important;
  }
</style>
