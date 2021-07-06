<template>
  <div class="sub-transition">
    <h3>過場參數</h3>
    你選擇的過場效果是「<span class="chosen-type">{{ $route.params.transitionType }}</span>」

    <div class="animation-area" :class="$route.params.transitionType">

    </div>
  </div>
</template>

<style lang="stylus" scoped>
.sub-transition
  .chosen-type
    font-size 20px
    font-weight bold
  .animation-area
    position absolute
    top calc(50% - 60px)
    left calc(50% - 60px)

    display inline-block
    background-color #77AAEE
    border 1px solid #444
    border-radius 16px
    width 120px
    height 120px
    transition transform
    transition-duration 1s
    transition-delay 0.3s
    transition-timing-function ease-in;

.left-to-right
  transform translateX(200%)
.right-to-left
  transform translateX(-200%)
.top-to-bottom
  transform translateY(200%)
.bottom-to-top
  transform translateY(-200%)

</style>
