<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <top-comp />
        <list-comp />
      </div>
      <div class="layui-col-md4">

        <tips-comp />

        <sign-comp />

        <div class="fly-panel fly-rank fly-rank-reply" id="LAY_replyRank">
          <h3 class="fly-panel-title">回贴周榜</h3>
          <dl>
            <!--<i class="layui-icon fly-loading">&#xe63d;</i>-->
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
            <dd>
              <a href="user/home.html">
                <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
              </a>
            </dd>
          </dl>
        </div>

        <hot-list-comp />

        <ads-comp />

        <links-comp />

      </div>
    </div>
  </div>
</template>

<script>
import AdsComp from '@/components/sidebar/Ads'
import HotListComp from '@/components/sidebar/HotList'
import LinksComp from '@/components/sidebar/Links'
import SignComp from '@/components/sidebar/Sign'
import TipsComp from '@/components/sidebar/Tips'
import ListComp from '@/components/contents/List'
import TopComp from '@/components/contents/Top'
export default {
  name: 'Index',
  components: { AdsComp, HotListComp, LinksComp, SignComp, TipsComp, ListComp, TopComp }
}
</script>

<style scoped>

</style>
