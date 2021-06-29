<template>
  <div class="area-input">
    <div class="title">輸入區塊</div>
    <div class="flex">
      <input v-model="txtInput" class="flex-1">
      <button @click="addTodoItem">新增</button>
      <button @click="reset">清空</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaInput',
  props: {
    seq: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      txtInput: '您的待辦 ' + this.seq
    }
  },
  methods: {
    addTodoItem () {
      this.$emit('add', this.txtInput)
    },
    reset () {
      this.txtInput = '您的待辦 ' + this.seq
    }
  }
}
</script>

<style lang="stylus" scoped>
.area-input
  position relative
  width 600px
  padding 0px 32px 32px 32px
  border 1px solid #bbb
  border-radius 12px
  .title
    display inline-block
    position relative
    top -16px
    padding 0 16px
    font-size 22px
    color #444
    background-color #fff

.flex
  display flex
  .flex-1
    flex 1
</style>
