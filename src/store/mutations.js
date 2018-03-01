const addScore = 'addScore'
const rememberTime = 'rememberTime'
const clearTimer = 'clearTimer'

export default {
  [addScore] (state, s) {
    state.score += s
  },
  [rememberTime] (state) {
    state.timer = setInterval(() => {
      state.time++
    }, 1000)
  },
  [clearTimer] (state) {
    clearInterval(state.timer)
  }
}
