<template>
  <div class="custom-two-way-binding">
    <h3>客製雙向綁定</h3>

    <div class="form-area mt-32">
      <span class="title">客製可多選多選項-子元件</span>
      <CustomOptions v-model="checkedOptions" :options="availableOptions" />
    </div>

    <div class="form-area mt-32 txt-ag-left">
      <span class="title">父元件資料</span>

      <div>
        availableOptions: {{ availableOptions }}
      </div>
      <div class="mt-32">
        checkedOptions: {{ checkedOptions }}
      </div>
    </div>
  </div>
</template>

<script>
import CustomOptions from '@/components/CustomOptions'

export default {
  name: 'customTwoWayBinding',
  components: {
    CustomOptions
  },
  data () {
    return {
      availableOptions: [
        'Pure CSS', 'SCSS', 'LESS', 'Stylus', 'bootstrap', 'tailwind', 'bem', 'style in JS'
      ],
      checkedOptions: [
        'LESS', 'bem'
      ]
    }
  }

}
</script>

<style lang="stylus" scoped>
.custom-two-way-binding
  display flex
  flex-direction column
  align-items center
  color #444
  .form-area
    position relative
    width 640px
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
    > .row
      margin-top 10px

.mt-32
  margin-top 32px
.txt-ag-left
  text-align left
</style>
