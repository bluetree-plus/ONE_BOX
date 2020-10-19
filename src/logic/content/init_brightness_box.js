import { h } from '../../utils/create_element'

/**
 * 遮罩层初始化逻辑
 */
let request = null
const styleText = _ => (
  Object.entries({
    width: `${document.documentElement.clientWidth}px`,
    height: `${document.documentElement.clientHeight}px`,
    background: `rgba(0,0,0,${_ === undefined ? brightness : _})`
  }).reduce((prev, [k, v]) => (prev += `${k}:${v}!important;`, prev), '')
)
// 缓存，以供窗口尺寸变化时使用
let brightness = 0

const SEND_GET_BRIGHT_NESS_SET_STYLE = ({
  isSave, value
}) => {
  // isSave 为真时获取后台存储的值
  if (isSave) {
    chrome.runtime.sendMessage({
      type: 'GET_BRIGHT_NESS'
    }, response => {
      console.log(response.message)
      brightness = response.message
      dom.setAttribute('style', styleText())
    })
  } else {
    // isSave 为假时仅设置样式值
    brightness = value
    dom.setAttribute('style', styleText(value))
  }
}

const SEND_SET_BRIGHT_NESS = ({
  value
}) => {
  chrome.runtime.sendMessage({
    type: 'SET_BRIGHT_NESS',
    value
  }, _ => {
    console.log('延后执行 SEND_SET_BRIGHT_NESS')
    brightness = value
  })
}

SEND_GET_BRIGHT_NESS_SET_STYLE({ isSave: true })

// 先加载到页面上
const dom = h('div', {
  class: '_box__',
  style: styleText()
})

// 对 body 的临时引用
let body = document.createElement('body')
body.setAttribute('__board__', '__')
document.documentElement.appendChild(body)
body.appendChild(dom)
body = null

window.addEventListener('resize', _ => {
  request !== null && cancelAnimationFrame(request)
  // 强制 60 Hz
  request = requestAnimationFrame(_ => {
    dom.setAttribute('style', styleText())
    request = null
  })
}, false)

export default {
  SEND_GET_BRIGHT_NESS_SET_STYLE,
  SEND_SET_BRIGHT_NESS
}