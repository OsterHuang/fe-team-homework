<template>
  <div class="router-param">
    <h3>router參遞參數</h3>

    <table width="600">
      <tr>
        <td width="200">url查詢字串參數-子頁迴圈次數</td>
        <td><input type="text" v-model.number="loopCount"></td>
        <td><button @click="goLoopCountPage">去子頁</button></td>
      </tr>

      <tr>
        <td>url路徑參數-訂單編號</td>
        <td><input type="text" v-model="orderNo"></td>
        <td><button @click="goOrderDetail">去子頁</button></td>
      </tr>

      <tr>
        <td>$router param方式-動畫效果</td>
        <td>
          <label><input id="rdoLeftToRight" type="radio" v-model="transitionType" value="left-to-right" />由左至右</label>
          <br />
          <label><input id="rdoRightToLeft" type="radio" v-model="transitionType" value="right-to-left" />由右至左</label>
          <br />
          <label><input id="rdoTopToBottom" type="radio" v-model="transitionType" value="top-to-bottom" />由上至下</label>
          <br />
          <label><input id="rdoBottomToTop" type="radio" v-model="transitionType" value="bottom-to-top" />由下至上</label>
          <br />
        </td>
        <td><button @click="goTransitionPage">去子頁</button></td>
      </tr>
    </table>

    <div class="sub-page-container">
      <h4>以下為第一階子路由頁面</h4>
      <div class="sub-page-level-1">
        <router-view :transitionType="transitionType" />
        <router-view name="confirm" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loopCount: 8,
      orderNo: 'SO701471311',
      transitionType: ''
    }
  },
  methods: {
    goLoopCountPage () {
      console.log('去迴圈次數子頁')
      this.$router.push({ path: '/routerParam/loopCount', query: { loopCount: this.loopCount } })
    },
    goOrderDetail () {
      console.log('去訂單詳情子頁')
      this.$router.push({ path: `/routerParam/orderDetail/${this.orderNo}/index` })
    },
    goTransitionPage () {
      console.log('去過場效果子頁')
      this.$router.push({ name: 'subTransition', params: { transitionType: this.transitionType } })
    }
  }
}
</script>

<style lang="stylus" scoped>
.router-param
  display flex
  flex-direction column
  align-items center
  height 100%
  color #444

  > table
    border-collapse collapse
    border 1px solid #eeeef2
    td
      padding 6px
      border 1px solid #eeeef2
    input[type="text"]
      width 95%
  .sub-page-container
    height 100%
    width 100%
    .sub-page-level-1
      height 100%
      width 100%
      background-color #EEE
</style>
