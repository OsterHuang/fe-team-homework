<template>
  <div class="loop-count">
    <h3>迴圈次數參數</h3>

    <div v-for="item in loopItems" :key="item.no" class="loop-item">
      {{ item.no }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'loopCount',
  data () {
    return {
      loopItems: this.initData()
    }
  },
  computed: {
    loopCount () { return +this.$route.query.loopCount }
  },
  watch: {
    loopCount: {
      handler: function (newVal) {
        console.log(newVal)
        this.loopItems = this.initData()
      },
      immediate: true
    }
  },
  methods: {
    initData () {
      return new Array(this.loopCount || 0).fill(undefined).map((v, idx) => ({ no: idx + 1 }))
    }
  }
}
</script>

<style lang="stylus" scoped>
.loop-count
  .loop-item
    padding 16px
    margin-top 12px
    border-top 1px solid #aaa
    font-size 32px
    color #888
</style>
