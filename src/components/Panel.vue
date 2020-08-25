<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <li class="layui-hide-xs layui-this"><a href="/">首页</a></li>
        <li><a href="javascript:;">提问</a></li>
        <li><a href="javascript:;">分享<span class="layui-badge-dot"></span></a></li>
        <li><a href="javascript:;">讨论</a></li>
        <li><a href="javascript:;">建议</a></li>
        <li><a href="javascript:;">公告</a></li>
        <li><a href="javascript:;">动态</a></li>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="fly-mid"></span></li>

        <!-- 用户登入后显示 -->
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="javascript:;">我发表的贴</a></li>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="javascript:;">我收藏的贴</a></li>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search"><i class="layui-icon"></i></span>
        <a href="javascript:;" class="layui-btn">发表新帖</a>
      </div>
      <div class="layui-hide-sm layui-show-xs-block" style="margin-top: -10px; padding-bottom: 10px; text-align: center;">
        <a href="javascript:;" class="layui-btn">发表新帖</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel'
}
</script>

<style scoped>

</style>
