<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree layui-inline">
      <router-link tag="li" class="layui-nav-item" v-for="(item,index) in lists" :to="{name: item.name}" :key="'center'+index">
        <a href="javascript:;">
          <i class="layui-icon" v-html="item.icon"></i>
          {{ item.title }}
        </a>
      </router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      lists: [
        { name: 'User', path: '', title: '我的主页', icon: '&#xe612;' },
        { name: 'UserCenter', path: '', title: '用户中心', icon: '&#xe612;' },
        { name: 'UserSettings', path: '', title: '基本设置', icon: '&#xe620;' },
        { name: 'UserPosts', path: '', title: '基本帖子', icon: '&#xe620;' },
        { name: 'UserMessage', path: '', title: '我的消息', icon: '&#xe611;' },
        { name: 'UserOthers', path: '', title: '其他设置', icon: '&#xe620;' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
