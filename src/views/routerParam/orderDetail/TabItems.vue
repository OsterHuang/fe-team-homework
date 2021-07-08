<template>
  <div class="order-detail-tab-items">
    <table>
      <tr>
        <th>品項</th><th>數量</th><th>單價</th>
      </tr>
      <tr>
        <td>牙刷</td><td>6</td><td>$70</td>
      </tr>
      <tr>
        <td>碗</td><td>4</td><td>$40</td>
      </tr>
      <tr>
        <td>牛奶</td><td>2</td><td>$200</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.order-detail-tab-items
  > table
    border-collapse collapse
    border-bottom 1px solid #eeeef2
    td
      padding 6px
      border 1px solid #eeeef2
</style>
