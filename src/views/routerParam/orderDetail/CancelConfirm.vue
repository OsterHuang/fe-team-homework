<template>
  <div class="cancel-confirm-wrap" @click.stop="$router.back()">
    <div class="cancel-confirm-dialog">
      <div class="header">測試</div>
      <div class="content">
        是否確定要取消訂單？
      </div>
      <div class="footer">
        <button>確認</button>
        <button>先不要</button>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.cancel-confirm-wrap
  display flex
  align-items center
  justify-content center
  position fixed
  top 0px
  bottom 0px
  left 0px
  right 0px
  background-color #44444444

  .cancel-confirm-dialog
    display flex
    flex-direction column
    height 240px
    width 360px
    background-color #fff
    border-radius 16px
    .header
      border-radius 16px 16px 0px 0px
      font-size 20px
      color #fff
      padding 12px
      background-color #456
    .content
      display flex
      flex 1
      align-items center
      justify-content center
    .footer
      display flex
      justify-content space-around
      padding 12px
      border-top 1px solid #456
      border-radius 0px 0px 16px 16px
</style>
