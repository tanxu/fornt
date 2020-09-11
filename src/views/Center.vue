<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree layui-inline">
      <li class="layui-nav-item" v-for="(item,index) in lists" :key="'center'+index">
        <router-link :to="{name: item.name}" :active-class="item.activeClass">
          <i class="layui-icon" :class="item.icon"></i>
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Center',
  data () {
    return {
      lists: [
        {
          name: 'User',
          path: '',
          title: '我的主页',
          icon: 'layui-icon-home'
        },
        {
          name: 'UserCenter',
          path: '',
          title: '用户中心',
          icon: 'layui-icon-friends'
        },
        {
          name: 'UserSettingsInfo',
          path: '',
          title: '基本设置',
          icon: 'layui-icon-set',
          activeClass: 'layui-this'
        },
        {
          name: 'UserPostsMyPost',
          path: '',
          title: '我的帖子',
          icon: 'layui-icon-form',
          activeClass: 'layui-this'
        },
        {
          name: 'UserMessage',
          path: '',
          title: '我的消息',
          icon: 'layui-icon-reply-fill'
        },
        {
          name: 'UserOthers',
          path: '',
          title: '其他设置',
          icon: 'layui-icon-component'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
