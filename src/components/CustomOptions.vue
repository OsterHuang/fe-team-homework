<template>
  <div class="custom-options">
    <div v-for="(opt, idx) in options" :key="idx" class="custom-options_option" :class="{checked: selectedOptions[opt]}" @click="onClickOption(opt)">
      <div v-show="selectedOptions[opt]" class="checked-icon">
        <svg version="1.1" id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
          <path d="M74.439,157.519c-1.59,1.848-4.34,1.989-6.111,0.313L1.38,94.468c-1.771-1.676-1.848-4.496-0.173-6.267l21.33-22.539
          c1.676-1.771,4.496-1.848,6.267-0.173l36.571,34.611c1.771,1.676,4.521,1.535,6.111-0.313l71.447-83.015
          c1.59-1.848,4.404-2.059,6.251-0.468l23.518,20.242c1.848,1.59,2.059,4.404,0.468,6.252L74.439,157.519z"/>
        </svg>
      </div>
      {{ opt }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomOptions',
  props: {
    /**
     * 可使用的選項
     */
    options: {
      type: Array,
      default: () => []
    },
    /**
     * 被勾選的選項
     */
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    const selectedOptions = {}
    this.options.forEach(opt => { selectedOptions[opt] = false })
    this.value.forEach(opt => { selectedOptions[opt] = true })

    return {
      selectedOptions
    }
  },
  methods: {
    onClickOption (opt) {
      console.log(opt)
      const value = opt
      if (this.selectedOptions[value]) {
        this.selectedOptions[value] = false
      } else {
        this.selectedOptions[value] = true
      }

      this.$emit('input', Object.keys(this.selectedOptions)
        .map(k => {
          if (this.selectedOptions[k]) return k
        })
        .filter(v => v)
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
$checked-color=#78DDA8

.custom-options
  display flex
  flex-wrap wrap
  padding 24px 12px 12px 12px
  background-color #ddd
  border-radius 24px
  &::before
    content '灰色區塊這是客製的多選元件-支援雙向綁定'
    position absolute
    top 36px
    color #46a
    font-size 8px
  &_option
    position relative
    margin-top 4px
    margin-left 6px
    padding 4px 16px
    border 1px solid #444
    border-radius 16px
    background-color #fff
    cursor pointer
    &.checked
      border-color $checked-color
      color $checked-color

    .checked-icon
      position absolute
      top -2px
      left 4px
      width 12px
      height 12px
      > svg
        fill $checked-color

</style>
