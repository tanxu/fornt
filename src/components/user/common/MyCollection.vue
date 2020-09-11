<template>
  <div>
    <table class="layui-table">
      <thead>
      <tr>
        <th class="title">
          <div class="layui-table-cell pl0"><span>帖子标题</span></div>
        </th>
        <th>
          <div class="layui-table-cell pr0 text-right"><span>收藏时间</span></div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>收藏的帖子标题</td>
        <td class="text-right">2019-10-01</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MyCollection'
}
</script>

<style lang="less" scoped>
.title{
  width: 80%;
}
</style>
