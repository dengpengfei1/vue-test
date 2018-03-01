export default {
  remember_time ({commit, state}) {
    commit('rememberTime')
  },
  clear_timer ({commit}) {
    commit('clearTimer')
  }
}
