(function (doc, win) {
  let docEle = doc.documentElement
  let eve = 'orientationchange' in win ? 'orientationchange' : 'resize'
  let calculate = () => {
    let clientWidth = docEle.clientWidth
    if (!clientWidth) return
    docEle.style.fontSize = 20 / 375 * clientWidth + 'px'
  }
  calculate()
  doc.addEventListener(eve, calculate, false)
  win.addEventListener(eve, calculate, false)
})(document, window)
