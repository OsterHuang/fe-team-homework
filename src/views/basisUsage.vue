<template>
  <div class="basis-usage">
    <h3>Vue基礎使用</h3>
    <div class="stones-container">
      <div v-for="stone in displayingStones" :key="stone.seq" :class="stone.class">
        {{ stone.seq }}
      </div>
    </div>
    <div class="button-area">
      <button @click="filteredColor = 'b'" :class="{activated: filteredColor === 'b'}">只顯示黑</button>
      <button @click="filteredColor = 'w'" :class="{activated: filteredColor === 'w'}">只顯示白</button>
      <button @click="filteredColor = 'n'" :class="{activated: filteredColor === 'n'}">全都顯示</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basisUsage',
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // [n, b, w]
      filteredColor: 'n',
      stones: [
        { seq: 1, class: 'stone black' },
        { seq: 2, class: 'stone white' },
        { seq: 3, class: 'stone black' },
        { seq: 4, class: 'stone white' },
        { seq: 5, class: 'stone black' },
        { seq: 6, class: 'stone white' },
        { seq: 7, class: 'stone black' },
        { seq: 8, class: 'stone white' },
        { seq: 9, class: 'stone black' },
        { seq: 10, class: 'stone white' }
      ]
    }
  },
  computed: {
    displayingStones () {
      return this.stones.filter(stone => {
        console.log('stone:', stone, this.filteredColor === 'n')
        if (this.filteredColor === 'n') return stone
        else if (this.filteredColor === 'b' && stone.seq % 2 === 1) return stone
        else if (this.filteredColor === 'w' && stone.seq % 2 === 0) return stone
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.basis-usage
  padding 16px
  .stones-container
    display flex
    flex-wrap wrap
    justify-content space-between
    > .stone
      margin-top 6px
  .button-area
    margin-top 64px
    display flex
    justify-content space-around
    box-sizing border-box
    > button
      flex 1
      margin-left 8px
      height 32px
      font-size 18px
      box-sizing border-box
      border-radius 6px
      border-width 1px
      &.activated
        font-weight bold
        border-width 2px
        background-color transparent
      &:first-child
        margin-left 0
.stone
  height 36px
  width 36px
  font-size 20px
  font-weight bold
  display flex
  align-items center
  justify-content center
  border-radius 50%
  &.black
    border 1px solid #222
    background-color #444
    color white
  &.white
    border 1px solid #222
    background-color white
    color #222
</style>
