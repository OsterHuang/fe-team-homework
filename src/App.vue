<template>
  <div id="app">
    <div class="test-pre-processor">
      <div class="app-head">
        這邊是標題
      </div>
      <div class="app-content">
        這邊是內容
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  .app-content
    flex 1
    margin-top 8px
    border 1px #ccc solid
    padding 30px
</style>
