<template>
  <div class="fly-panel" v-show="lists.length>0">
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin" style="color: #FF5722;">去签到</a>
    </div>

    <list-item-comp :lists="lists" @nextPage="nextPageHandle" :is-show="false" />

  </div>
</template>

<script>
import ListItemComp from '@/components/contents/ListItem'
export default {
  name: 'Top',
  data () {
    return {
      status: '',
      tag: '',
      sort: 'created',

      // 分页
      page: 0,
      limit: 20,
      catalog: '',
      lists: [
        {
          user: {
            name: 'tttt',
            isVip: 2
          },
          title: 'dadasd',
          content: 'sflkjsklfjs',
          create_time: '2020-08-23 10:10:10',
          catalog: 'ask',
          fav: 40,
          isEnd: 0,
          reads: 10,
          answer: 44,
          status: 0,
          isTop: 1,
          tags: [{
            name: '精华',
            class: 'layui-bg-red'
          }, {
            name: '热门',
            class: 'layui-bg-blue'
          }]
        }
      ]
    }
  },
  components: { ListItemComp },
  methods: {
    // 加载更多
    nextPageHandle () {
      this.page++
      this._getList()
    }
  }
}
</script>

<style scoped>

</style>
