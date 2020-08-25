<template>
  <div class="fly-panel" style="margin-bottom: 0;">

    <div class="fly-panel-title fly-filter">
      <a :class="{'layui-this': status ==='' && tag === ''}" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '0'}" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '1'}" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{'layui-this': status === '' && tag === '精华'}" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{'layui-this': sort === 'created'}" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{'layui-this': sort === 'answer'}" @click.prevent="search(4)">按热议</a>
      </span>
    </div>

    <list-item-comp :lists="lists" @nextPage="nextPageHandle" />

  </div>
</template>

<script>
import ListItemComp from '@/components/contents/ListItem'
import { getList } from '@/api/content'

export default {
  name: 'List',
  components: { ListItemComp },
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
          isTop: 0,
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
  mounted () {
    this._getList()
  },
  methods: {
    // 加载更多
    nextPageHandle () {
      this.page++
      this._getList()
    },
    _getList () {
      const options = {
        catalog: this.catalog,
        isTop: 0,
        page: this.page,
        limit: this.limit,
        sort: this.sort,
        tag: this.tag,
        status: this.status
      }
      getList(options).then(res => {
        console.log(res)
      })
    },
    search (val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
      switch (val) {
        // 未结贴
        case 0:
          this.status = '0'
          this.tag = ''
          break
        // 已结贴
        case 1:
          this.status = '1'
          this.tag = ''
          break
        // 查询"精华"标签
        case 2:
          this.status = ''
          this.tag = '精华'
          break
        // 按照时间去查询
        case 3:
          this.sort = 'created'
          break
        // 按照评论数去查询
        case 4:
          this.sort = 'answer'
          break
        // 综合查询
        default:
          this.status = ''
          this.tag = ''
          this.current = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
