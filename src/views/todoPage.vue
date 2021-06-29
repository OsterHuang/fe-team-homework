<template>
  <div class="todo-page">
    <h3>Todo 列表</h3>
    <AreaInput ref="areaInput" class="mt-32" :seq="seq" @add="addTodoItem" />
    <AreaList class="mt-32" :items="todoItemList"
      @finish="finishTodoItem" @redo="redoTodoItem" @delete="deleteTodoItem"
    />
  </div>
</template>

<script>
import AreaInput from '@/components/todo/AreaInput'
import AreaList from '@/components/todo/AreaList'

export default {
  name: 'todoPage',
  components: {
    AreaInput,
    AreaList
  },
  data () {
    return {
      seq: 1,
      todoItemList: []
    }
  },
  methods: {
    addTodoItem (description) {
      this.todoItemList.push({
        seq: this.seq,
        description
      })
      this.seq = this.seq + 1
      this.$nextTick(() => { this.$refs.areaInput.reset() })
    },
    finishTodoItem (item) {
      this.$set(item, 'finished', true)
      // item.fininshed = true
      // this.$set(this.todoItemList, this.indexOf(item), item)
    },
    redoTodoItem (item) {
      this.$set(item, 'finished', false)
      // item.fininshed = false
      // this.$set(this.todoItemList, this.indexOf(item), item)
    },
    deleteTodoItem (item) {
      this.todoItemList.splice(this.indexOf(item), 1)
    },
    // ---
    // Util method
    // ---
    indexOf (item) {
      return this.todoItemList.findIndex(it => it.seq === item.seq)
    }
  }
}
</script>

<style lang="stylus" scoped>
.todo-page
  background transparent
  display flex
  flex-direction column
  align-items center

.mt-32
  margin-top 32px

</style>
