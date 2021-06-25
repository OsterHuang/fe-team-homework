<template>
  <div class="basis-form">
    <h3>Vue基礎表單</h3>
    <div class="person-detail mt-32">
      <div class="title">個人詳情</div>
      <div v-for="(prop, propName) of person" :key="propName" class="row">
         <div>{{ propName }}</div>
         <div>{{ prop }}</div>
      </div>
    </div>

    <div class="person-detail mt-32">
      <div class="title">單向綁定編輯</div>
      <div class="row">
         <div>name</div>
         <div><input :value="person.name" class="wd-full" @input="changeName"></div>
      </div>
      <div class="row">
         <div>sex</div>
         <div>
           <input id="gender-m" name="gender" type="radio" :checked="person.gender === 'M'" value="M" @click="changeGender"/><label for="gender-m">男</label>
           <div class="empty-24precent" />
           <input id="gender-f" name="gender" type="radio" :checked="person.gender === 'F'" value="F" @click="changeGender"/><label for="gender-f">女</label>
          </div>
      </div>
      <div class="row">
         <div>age</div>
         <div>
           <input type="number" :value="person.age"  class="wd-full" @input="changeAge" />
          </div>
      </div>
      <div class="row">
         <div>skills</div>
         <div class="check-box-container">
          <div v-for="option in skillOptions" :key="option" class="check-box-skill">
            <input :id="'chk_'+option" type="checkbox" :value="option" :checked="person.skills.includes(option)" @click="changeSkill" />
            <label :for="'chk_'+option">{{option}}</label>
          </div>
        </div>
      </div>
      <div class="row">
         <div>description</div>
         <div><textarea :value="person.description" class="wd-full" rows="6" @input="changeDescription"></textarea></div>
      </div>
      <div class="row">
         <div>county</div>
         <div>
           <select size="6" class="wd-120" :value="person.county" @change="changeCounty">
             <option value="台北市" >台北市</option>
             <option value="新北市" >新北市</option>
             <option value="桃園市" >桃園市</option>
             <option value="台中市" >台中市</option>
             <option value="台南市" >台南市</option>
             <option value="高雄市" >高雄市</option>
           </select>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basisForm',
  data () {
    return {
      skillOptions: [
        'FE', 'angular', 'react', 'vue',
        'BE', 'php', 'jsp', 'java', 'spring', 'express', 'koa', 'kotlin-be',
        'App', 'ios', 'android', 'swift', 'dart', 'java-app', 'object-c', 'flutter'
      ],
      person: {
        name: 'Oster Huang',
        gender: 'F', // M or F
        age: 66,
        skills: ['vue', 'react', 'nodejs', 'express', 'java', 'android', 'ios'],
        description: '快快樂樂工作，平平安安長大。我們一起快樂成長',
        county: '新北市'
      }
    }
  },
  methods: {
    changeName (e) {
      this.person.name = e.target.value
    },
    changeGender (e) {
      this.person.gender = e.target.value
    },
    changeAge (e) {
      this.person.age = e.target.value
    },
    changeSkill (e) {
      const clickedValue = e.target.value
      if (this.person.skills.includes(clickedValue)) {
        const clickedIdx = this.person.skills.indexOf(clickedValue)
        this.person.skills.splice(clickedIdx, 1)
      } else {
        this.person.skills.push(clickedValue)
      }
    },
    changeDescription (e) {
      this.person.description = e.target.value
    },
    changeCounty (e) {
      this.person.county = e.target.value
    }
  }
}
</script>

<style lang="stylus" scoped>
.basis-form
  display flex
  flex-direction column
  align-items center
  .person-detail
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
    > .row
      margin-top 10px

.row
  display flex
  > div
    &:nth-child(1)
      width 90px
      text-align right
      margin-right 16px
    &:nth-child(2)
      flex 1

.check-box-container
  display flex
  flex-wrap wrap

.check-box-skill
  width 90px
  text-align left

.mt-32
  margin-top 32px
.wd-full
  width 100%
.wd-120
  width 120px
.empty-24precent
  display inline-block
  width 24%
</style>
