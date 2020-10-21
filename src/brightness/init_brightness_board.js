import { h } from '../utils/create_element'
import { sendMessage } from '../utils/chrome_api/chrome_runtime_send_message'

/**
 * 遮罩层初始化逻辑
 */

let request = null
// 缓存，以供窗口尺寸变化时使用
let brightness = 0

const styleText = _ => (
  Object.entries({
    width: `${document.documentElement.clientWidth}px`,
    height: `${document.documentElement.clientHeight}px`,
    background: `rgba(0,0,0,${_ === undefined ? brightness : _})`
  }).reduce((prev, [k, v]) => (prev += `${k}:${v}!important;`, prev), '')
)

const SEND_GET_BRIGHTNESS_SET_STYLE = ({
  isSave, value
}) => {
  // isSave 为真时获取后台存储的值
  if (isSave) {
    sendMessage({
      type: 'GET_BRIGHT_NESS'
    })
      .then(response => {
        brightness = response.brightness
        dom.setAttribute('style', styleText())
      })
  } else {
    // isSave 为假时仅设置样式值
    brightness = value
    dom.setAttribute('style', styleText(value))
  }
}

const SEND_SET_BRIGHTNESS = ({
  value
}) => {
  sendMessage({
    type: 'SET_BRIGHT_NESS',
    value
  })
    .then(_ => {
      console.log('延后执行 SEND_SET_BRIGHTNESS')
      brightness = value
    })
}

SEND_GET_BRIGHTNESS_SET_STYLE({ isSave: true })

// 先加载到页面上
const dom = h('div', {
  class: '_box__',
  style: styleText()
})

// 自定义标签，隔绝网页脚本操作，以防造成样式bug
let one_box = document.createElement('one_box')
one_box.setAttribute('__board__', '__')
document.documentElement.appendChild(one_box)
one_box.appendChild(dom)
one_box = null

window.addEventListener('resize', _ => {
  request !== null && cancelAnimationFrame(request)
  // 强制 60 Hz
  request = requestAnimationFrame(_ => {
    dom.setAttribute('style', styleText())
    request = null
  })
}, false)

export default {
  SEND_GET_BRIGHTNESS_SET_STYLE,
  SEND_SET_BRIGHTNESS
}