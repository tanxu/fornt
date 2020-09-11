<template>
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'UserPostsMyPost'}">我的发帖</router-link>
        </li>
        <li>
          <router-link :to="{name: 'UserPostsMyCollection'}">我收藏的贴</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPosts'
}
</script>

<style scoped>

</style>
