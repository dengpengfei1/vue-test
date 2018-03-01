<template>
  <div>
    <div class="test_score">
      <span>score:{{score}}</span>
      <div></div>
      <span>用时: {{time}}</span>
      <div></div>
      <router-link to="home">返回首页</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['score', 'time'])
  }
}
</script>

<style lang="less" scoped>
.test_score {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5rem /* 100/20 */;
  height: 5rem /* 100/20 */;
  text-align: center;
  color: #fff;
  margin: auto;
  span {
    color: #fff;
  }
  a{
    color: #fff;
  }
}
</style>
