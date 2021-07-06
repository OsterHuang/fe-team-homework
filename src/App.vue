<template>
  <div id="app">
    <div class="test-pre-processor">
      <div class="app-head">
        <router-link to="/basisUsage" class="nav-link">基礎使用</router-link> |
        <router-link to="/basisForm" class="nav-link">基礎表單</router-link> |
        <router-link to="/basisTwoWayBinding" class="nav-link">雙向綁定</router-link> |
        <router-link to="/customTwoWayBinding" class="nav-link">客製雙向綁定</router-link> |
        <router-link to="/todoPage" class="nav-link">Todo列表</router-link> |
        <router-link to="/slotUsage" class="nav-link">Slot使用</router-link> |
        <router-link to="/routerParam" class="nav-link">router參數</router-link> |
      </div>
      <div class="app-content">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
