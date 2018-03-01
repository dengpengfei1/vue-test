<template>
  <div>
    <itemContainer itemType='item'></itemContainer>
  </div>
</template>

<script>
import itemContainer from '../../components/itemContainer'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['time'])
  },
  methods: {
    ...mapActions(['remember_time'])
  },
  components: {
    itemContainer
  },
  created () {
    this.remember_time()
  }
}
</script>
