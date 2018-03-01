<template>
  <div>
    <header class="test_tip">
      <span v-if="itemType === 'home'" class="test_home_tip">{{itemDetail[0].active_topic_phase}}</span>
      <span v-else-if="itemType === 'item'" class="test_item_tip">{{itemDetail[itemId].topic_name}}</span>
    </header>
    <section class="test_content">
      <router-link v-if="itemType === 'home'" class="test_button" to="item">start</router-link>
      <div v-if="itemType === 'item'" class="test_items">
        <p v-for="(item, index) in itemDetail[itemId].topic_answer" :key="index" @click="choose(index)">{{item.answer_name}}</p>
        <span class="test_choose">{{chooseName}}</span><br/>
        <span class="test_next" @click="addItemId">{{result}}</span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      itemId: 0,
      chooseName: '',
      answerId: '',
      result: '下一题'
    }
  },
  props: ['itemType'],
  computed: {
    ...mapState(['itemDetail', 'score'])
  },
  methods: {
    ...mapActions(['remember_time', 'clear_timer']),
    ...mapMutations(['addScore']),
    addItemId (e) {
      this.result = this.itemDetail.length - 1 > this.itemId ? '下一题' : '得分'
      if (!this.chooseName || this.chooseName === '请选择') {
        this.chooseName = '请选择'
        return
      }
      if (this.result === '下一题') {
        if (this.answerId === 1) {
          this.addScore(1)
        }
        this.itemId++
        this.chooseName = ''
      } else {
        if (this.answerId === 1) {
          this.addScore(1)
        }
        this.clear_timer()
        this.$router.push({
          name: 'score'
        })
      }
    },
    choose (i) {
      switch (i) {
        case 0:
          this.chooseName = 'A'
          break
        case 1:
          this.chooseName = 'B'
          break
        case 2:
          this.chooseName = 'C'
          break
        case 3:
          this.chooseName = 'D'
          break
      }
      this.answerId = this.itemDetail[this.itemId].topic_answer[i].is_standard_answer
    }
  }
}
</script>

<style lang="less" scoped>
.test_tip {
  margin-top: 1.5rem /* 30/20 */;
  height: 3rem /* 60/20 */;
  text-align: center;
  font-size: 1rem /* 20/20 */;
  .test_home_tip {
    color: #fff;
  }
  .test_item_tip {
    color: #fff;
  }
}
.test_content {
  margin-top: 5rem;
  color: #fff;
  text-align: center;
  .test_button {
    display: block;
    font-size: 1rem;
    color: currentColor;
    width: 5rem;
    margin: 0 auto;
    text-align: center;
    border: .05rem /* 1/20 */ solid currentColor;
    border-radius: .15rem /* 3/20 */;
  }
  .test_items {
    padding: 1rem /* 20/20 */;
    font-size: 1rem;
    p {
      text-align: left;
      padding-left: 1rem /* 20/20 */;
      color: #fff;
    }
  }
  .test_choose {
    color: #fff;
  }
  .test_next {
    color: #fff;
  }
}
</style>
