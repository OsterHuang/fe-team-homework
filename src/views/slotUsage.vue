<template>
  <div class="slot-usage">
    <h3>最簡單的使用範例</h3>
    <ModalSimulation>
      <template v-slot:header>
        模擬彈窗的頭部
      </template>
      <template>
        模擬彈窗的身體
      </template>
      <template v-slot:footer>
        模擬彈窗的底部
      </template>
    </ModalSimulation>

    <br>
    <h3>想要加入複雜的內容</h3>
    <ModalSimulation>
      <template v-slot:header>
        你的進貨資訊如下
        <select>
          <option>所有</option>
          <option>這個月</option>
          <option>上個月</option>
        </select>
      </template>
      <template>
        <table width="100%" class="receipt-list">
          <tr>
            <td width="50%">品名</td><td>價格</td><td>數量</td><td>進貨日</td>
          </tr>
          <tr v-for="(itemProps, idx) in receiptList" :key="'row_'+idx">
            <td v-for="(prop, colIdx) in itemProps" :key="'col_'+colIdx">{{ prop }}</td>
          </tr>
        </table>
      </template>
      <template v-slot:footer>
        This is footer
      </template>
    </ModalSimulation>
  </div>
</template>

<script>
import ModalSimulation from '@/components/ModalSimulation'

export default {
  name: 'slotUsage',
  components: {
    ModalSimulation
  },
  props: {
    isLogin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      receiptList: [
        ['洗面乳－正品一極', '98', '4', '2018-06-13'],
        ['抱枕36x36', '218', '6', '2020-06-13'],
        ['盤子', '150', '21', '2021-06-13'],
        ['椅子', '650', '10', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16'],
        ['盤子', '150', '21', '2021-06-13'],
        ['椅子', '650', '10', '2021-06-16'],
        ['桌子', '1200', '5', '2021-06-16']
      ]
    }
  },
  created () {
    console.log('this.$route.meta: ', this.$route.meta.loginRequired)
    if (this.$route.meta.loginRequired && !this.isLogin) {
      alert('此頁需要登入')
      this.$router.back()
    }
  },
  activated () {
    console.log('this.$route.meta: ', this.$route.meta.loginRequired)
    if (this.$route.meta.loginRequired && !this.isLogin) {
      alert('此頁需要登入')
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
.slotUsage
  color #444

.receipt-list
  border-collapse collapse
  border 1px solid #6699EE
  th, td
    border 1px solid #D1DDEE
    padding 6px
</style>
