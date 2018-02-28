<template>
  <div>
    <header class="test_tip">
      <!-- <span v-if="itemType === 'home'">{{active_topic_phase}}</span> -->
      <!-- <span v-else-if="itemType === 'item'">{{topic_name}}</span> -->
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['itemType'],
  computed: {
    ...mapState(['itemDetail'])
  },
  created () {
    console.log(this.itemDetail);
  }
}
</script>
