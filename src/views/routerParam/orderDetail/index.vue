<template>
  <div class="order-detail">
    <h3>訂單詳情頁</h3>
    您的訂單編號是： {{ $route.params.orderNo }}
    <div class="order-detail-tab">
      <router-link class="tab-item" :to="`${myPath}/TabAttr`">主資料</router-link>
      <router-link class="tab-item" :to="`${myPath}/TabItems`">項目</router-link>
    </div>

    <div class="order-detail-tab-content">
      <router-view />
    </div>

    <router-view name="confirm" />

    <button @click="toggleCancelConfirm"> 取消訂單 </button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      myPath: this.$route.path
    }
  },
  methods: {
    toggleCancelConfirm () {
      this.$router.push({ name: 'cancelOrderConfirmation' })
    }
  }
}
</script>

<style lang="stylus" scoped>
.order-detail
  .order-detail-tab
    display flex
    margin-top 16px
    align-items center
    justify-content center
    .tab-item
      box-sizing border-box
      height 44px
      padding 8px
      font-size 18px
      color #77AAEE
      text-decoration none
      border-bottom 3px solid #77AAEE
      &.active, &.router-link-exact-active
        background-color #fff
        border 1px solid #77AAEE
        border-bottom 3px solid #77AAEE
  .order-detail-tab-content
    padding 24px
    display flex
    justify-content center
</style>
