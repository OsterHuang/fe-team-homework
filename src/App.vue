<template>
  <div id="app">
    <div class="test-pre-processor">
      <div class="app-head">
        <a href="#" @click.stop="switchPage('BasisUsage')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'BasisUsage' }">基礎使用</a> |
        <a href="#" @click.stop="switchPage('BasisForm')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'BasisForm' }">基礎表單</a> |
        <a href="#" @click.stop="switchPage('BasisTwoWayBinding')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'BasisTwoWayBinding' }">雙向綁定</a> |
        <a href="#" @click.stop="switchPage('CustomTwoWayBinding')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'CustomTwoWayBinding' }">客製雙向綁定</a> |
        <a href="#" @click.stop="switchPage('TodoPage')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'TodoPage' }">Todo列表</a> |
        <a href="#" @click.stop="switchPage('SlotUsage')" class="nav-link" :class="{ 'nav-link-selected': viewChecked === 'SlotUsage' }">Slot使用</a>
      </div>
      <div class="app-content">
        <component :is="viewChecked" />
        <!-- <BasisUsage v-if="viewChecked === 'BasisUsage'" />
        <BasisForm v-if="viewChecked === 'BasisForm'" />
        <BasisTwoWayBinding v-if="viewChecked === 'BasisTwoWayBinding'" />
        <CustomTwoWayBinding v-if="viewChecked === 'CustomTwoWayBinding'" />
        <TodoPage v-if="viewChecked === 'TodoPage'" />
        <SlotUsage v-if="viewChecked === 'SlotUsage'" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import BasisUsage from '@/views/basisUsage'
import BasisForm from '@/views/basisForm'
import BasisTwoWayBinding from '@/views/basisTwoWayBinding'
import CustomTwoWayBinding from '@/views/customTwoWayBinding'
import TodoPage from '@/views/todoPage'
import SlotUsage from '@/views/slotUsage'

export default {
  name: 'App',
  components: {
    BasisUsage,
    BasisForm,
    BasisTwoWayBinding,
    CustomTwoWayBinding,
    TodoPage,
    SlotUsage
  },
  data () {
    return {
      viewChecked: ''
    }
  },
  methods: {
    switchPage (name) {
      this.viewChecked = name
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}

html, body, div {
  border: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>

<style lang="stylus" scoped>
.test-pre-processor
  display flex
  height 100%
  flex-direction column
  .app-head
    border 1px #ccc solid
    padding 30px
    .nav-link
      box-sizing border-box
      margin-left 0px 8px
      padding 2px 8px
      text-decoration none
      color #224499
    .nav-link-selected
      text-decoration underline
      font-weight bold
  .app-content
    flex 1
    margin-top 8px
    border 1px #ccc solid
    padding 30px
</style>
