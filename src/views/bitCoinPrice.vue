<template>
  <div class="bit-coin-price">
    <h1>比特幣匯率</h1>

    <table width="600">
      <tr>
        <td width="100">更新時間</td><td class="ta-l">{{ new Date(bpiCurrentPrice.time.updatedISO) }}</td>
      </tr>
      <tr>
        <td>免責聲明</td><td class="ta-l">{{ bpiCurrentPrice.disclaimer }}</td>
      </tr>
    </table>

    <div class="currency-list">
      <div v-for="currencyBpi in bpiCurrentPrice.bpi" :key="currencyBpi.code" class="currency-list-item">
        <div class="title ta-l">{{ currencyBpi.code }}</div>
        <div class="description">{{ currencyBpi.description }}</div>
        <div class="rate"> <span class="symbol" v-html="currencyBpi.symbol"></span> {{ currencyBpi.rate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'bitCoinPrice',
  computed: {
    ...mapState({
      bpiCurrentPrice: state => state.bitCoin.bpiCurrentPrice
    })
  },
  created () {
    this.$store.dispatch('bitCoin/InquiryCurrentPrice')
  }
}
</script>

<style lang="stylus" scoped>
.bit-coin-price
  display flex
  flex-direction column
  align-items center
  color #444

  td
    padding 8px

  .currency-list
    display flex
    flex-direction column
    margin-top 36px
    .currency-list-item
      margin-top 12px
      padding 12px
      width 480px
      &:first-child
        border-top 1px solid #ccc
      border-bottom 1px solid #ccc
      .title
        font-size 24px
      .description
        color #666
      .rate
        color #59F
        font-size 19px
        font-weight bold
        font-family monospace
.ta-l
  text-align left

</style>
