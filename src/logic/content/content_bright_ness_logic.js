import '../../content.css'
import ACTION from './init_brightness_bar'
import { moveBar, innerMoveBar } from './build_main_btn'

console.clear()

chrome.runtime.sendMessage({
  type: 'GET_BRIGHT_NESS'
}, response => {
  const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
  const h = Math.floor(height * response.message)
  innerMoveBar.style.height = `${h}px`
})

let request = null
let _time = null
let saveY = 0

moveBar.addEventListener('mousemove', e => {
  e.stopPropagation()
  request !== null && cancelAnimationFrame(request)
  request = requestAnimationFrame(_ => {
    if (saveY !== e.offsetY) {
      // 获取当前高度
      const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
      let value = `${e.offsetY / height}`.replace(/(\d)(\.\d)\d*$/g, '$1$2')
      // console.info(height, e.offsetY, saveY, value)
      console.info('move')
      ACTION.SEND_GET_BRIGHT_NESS_SET_STYLE({ isSave: false, value })
      innerMoveBar.style.height = `${e.offsetY}px`
      saveY = e.offsetY
      _time !== null && clearTimeout(_time)
      // 延后通知后台
      _time = setTimeout(_ => {
        ACTION.SEND_SET_BRIGHT_NESS({ value })
        _time = null
      }, 5000)
    }
    request = null
  })
}, false)
