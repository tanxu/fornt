<template>
  <div class="fly-panel fly-panel-user" pad20>
    <div class="layui-tab layui-tab-brief" lay-filter="user">
      <ul class="layui-tab-title" id="LAY_mine">
        <router-link tag="li" :to="{name:'UserSettingsInfo'}">我的资料</router-link>
        <router-link tag="li" :to="{name:'UserSettingsPicUpload'}">头像</router-link>
        <router-link tag="li" :to="{name:'UserSettingsPassword'}">密码</router-link>
        <router-link tag="li" :to="{name:'UserSettingsAccounts'}">帐号绑定</router-link>
      </ul>
      <div class="layui-tab-content" style="padding: 20px 0;">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSettings'
}
</script>

<style scoped>

</style>
