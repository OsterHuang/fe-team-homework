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
          <input id="rdoLeftToRight" type="radio" v-model="transitionType" value="left-to-right" /><label for="rdoLeftToRight">由左至右</label>
          <br />
          <input id="rdoRightToLeft" type="radio" v-model="transitionType" value="right-to-left" /><label for="rdoRigthToLeft">由右至左</label>
          <br />
          <input id="rdoTopToBottom" type="radio" v-model="transitionType" value="top-to-bottom" /><label for="rdoTopToBottom">由上至下</label>
          <br />
          <input id="rdoBottomToTop" type="radio" v-model="transitionType" value="bottom-to-top" /><label for="rdoBottomToTop">由下至上</label>
          <br />
        </td>
        <td><button @click="goTransitionPage">去子頁</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loopCount: 8,
      orderNo: 'SO701471311',
      transitionType: 'top-to-bottom'
    }
  },
  methods: {
    goLoopCountPage () {
      console.log('去迴圈次數子頁')
      this.$router.push({ path: '/routerParam/loopCount', query: { loopCount: this.loopCount } })
    },
    goOrderDetail () {
      console.log('去訂單詳情子頁')
      this.$router.push({ path: `/routerParam/orderDetail/${this.orderNo}` })
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
  color #444

  > table
    border-collapse collapse
    border 1px solid #eeeef2
    td
      padding 6px
      border 1px solid #eeeef2
    input[type="text"]
      width 95%
</style>
