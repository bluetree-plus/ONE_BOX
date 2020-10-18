import { h } from '../../utils/create_element'

/**
 * 遮罩层初始化逻辑
 */
let request = null
const styleText = _ => (
  Object.entries({
    position: 'fixed',
    top: '0',
    left: '0',
    'pointer-events': 'none',
    'z-index': '9999999',
    margin: '0',
    padding: '0',
    display: 'block'
  }).reduce((prev, [k, v]) => (prev += `${k}:${v}!important;`, prev),
    `width:${document.documentElement.clientWidth}px!important;
    height:${document.documentElement.clientHeight}px!important;
    background:rgba(0,0,0,${_ === undefined ? brightness : _});`
  )
)
// 缓存，以供窗口尺寸变化时使用
let brightness = 0

const SEND_SET_BRIGHT_NESS = ({
  isSave, value
}) => {
  // isSave 为真时存入后台缓存中
  console.info('SEND_SET_BRIGHT_NESS')
  if (isSave) {
    chrome.runtime.sendMessage({
      type: 'GET_BRIGHT_NESS'
    }, response => {
      console.log(response.message)
      brightness = response.message
      dom.setAttribute('style', styleText())
    })
  } else {
    brightness = value
    dom.setAttribute('style', styleText(value))
  }
}

SEND_SET_BRIGHT_NESS({ isSave: true })

// 先加载到页面上
const dom = h('div', {
  style: styleText()
})

// 对 body 的临时引用
let body = document.createElement('body')
body.setAttribute('style', `position:absolute!important;
top:0!important;left:0!important;margin:0!important;padding:0!important;`)
body.setAttribute('__is_', true)
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
  SEND_SET_BRIGHT_NESS
}