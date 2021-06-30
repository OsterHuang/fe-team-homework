<template>
  <div class="modal-simulation">
    <div class="header">
      <slot name="header" />
      <span class="icon-close">&#x2612;</span>
    </div>
    <div class="body">
      <slot name="default" />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSimulation'
}
</script>

<style lang="stylus" scoped>
.modal-simulation
  display flex
  flex-direction column

  background-color #EEE
  border 1px solid #eee
  border-radius 16px
  .header
    position relative
    padding 8px
    font-size 18px
    font-weight bold
    color #4499E9
    .icon-close
      cursor pointer
      font-size 24px
      position absolute
      right 12px
      top 4px
  .body
    padding 24px
    background-color #FFF
    min-height 200px
    max-height 400px
    overflow-y scroll
  .footer
    padding 8px
    color #666
</style>
