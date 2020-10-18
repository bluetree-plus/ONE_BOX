import '../../content.css'
import action from './init_brightness_bar'
import { moveBar, innerMoveBar } from './build_main_btn'

console.clear()

let request = null
let saveY = 0

moveBar.addEventListener('mousemove', e => {
  e.stopPropagation()
  request !== null && cancelAnimationFrame(request)
  request = requestAnimationFrame(_ => {
    if (saveY !== e.offsetY) {
      const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
      let value = `${e.offsetY / height}`.replace(/(\d)(\.\d)\d*$/g, '$1$2')
      console.info(height, e.offsetY, saveY, value)
      action.SEND_SET_BRIGHT_NESS({ isSave: false, value })
      innerMoveBar.style.height = `${e.offsetY}px`
      saveY = e.offsetY
    }
    request = null
  })
}, false)
