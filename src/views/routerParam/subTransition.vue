<template>
  <div class="sub-transition">
    <h3>過場參數</h3>
    你選擇的過場效果是「<span class="chosen-type">{{ transitionType }}</span>」

    <div v-if="transitionType" class="animation-area" :class="transitionTypeToChange">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    transitionType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      transitionTypeToChange: ''
    }
  },
  watch: {
    transitionType: {
      handler () {
        setTimeout(() => { this.transitionTypeToChange = this.transitionType }, 30)
      },
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.sub-transition
  position relative
  .chosen-type
    font-size 20px
    font-weight bold
  .animation-area
    position absolute
    top 90%
    left calc(50% - 60px)

    display inline-block
    background-color #77AAEE
    border 1px solid #444
    border-radius 16px
    width 120px
    height 120px
    transition transform
    transform-origin 0 0
    transition-duration 1s
    transition-delay 0.3s
    transition-timing-function ease-in;

.left-to-right
  transform translate(90%, 0)
.right-to-left
  transform translate(-90%, 0)
.top-to-bottom
  transform translate(0, 90%)
.bottom-to-top
  transform translate(0, -90%)

</style>
