<template>
  <div class="area-list">
    <div v-for="item in unfinishedItems" :key="item.seq" class="area-list-item mt-8">
      <span class="label">序號 {{item.seq}}</span>
      <div class="description">
        <input v-model="item.description" >
      </div>
      <div class="actions">
        <button @click="tickIt(item)">完成</button>
        <button @click="deleteIt(item)">刪除</button>
      </div>
    </div>

    <div class="mt-8" />

    <div v-for="item in finishedItems" :key="item.seq" class="area-list-item finished mt-8">
      <div class="label">
        序號 {{item.seq}}
        <div class="checked">
          <svg version="1.1" id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 174.239 174.239" style="enable-background:new 0 0 174.239 174.239;" xml:space="preserve">
            <path d="M74.439,157.519c-1.59,1.848-4.34,1.989-6.111,0.313L1.38,94.468c-1.771-1.676-1.848-4.496-0.173-6.267l21.33-22.539
            c1.676-1.771,4.496-1.848,6.267-0.173l36.571,34.611c1.771,1.676,4.521,1.535,6.111-0.313l71.447-83.015
            c1.59-1.848,4.404-2.059,6.251-0.468l23.518,20.242c1.848,1.59,2.059,4.404,0.468,6.252L74.439,157.519z"/>
          </svg>
        </div>
      </div>
      <div class="description">
        <input v-model="item.description" :disabled="item.finished">
      </div>
      <div class="actions">
        <button @click="redoIt(item)">復原</button>
        <button @click="deleteIt(item)">刪除</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AreaList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    unfinishedItems () {
      return this.items.filter(item => !item.finished)
    },
    finishedItems () {
      return this.items.filter(item => item.finished)
    }
  },
  methods: {
    tickIt (item) {
      this.$emit('finish', item)
    },
    redoIt (item) {
      this.$emit('redo', item)
    },
    deleteIt (item) {
      this.$emit('delete', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
$finished-color=#7799ee

.area-list
  display flex
  flex-direction column
  width 100%
.area-list-item
  display flex
  align-items center
  .label
    width 120px
  .description
    flex 1
    >input
      width 95%
      font-size 14px
      padding 4px
  .actions
    width 90px

  &.finished
    .label
      position relative
      color $finished-color
      .checked
        position absolute
        fill $finished-color
        width 14px
        height 14px
        top 0px
        right 0px
    .description
      input
        border none
        border-color $finished-color
        color $finished-color

.mt-8
  margin-top 8px
</style>
