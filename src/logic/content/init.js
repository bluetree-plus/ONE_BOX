import { h } from '../../utils/createElement'

const cvsWidth = document.documentElement.clientWidth
const cvsHeight = document.documentElement.clientHeight
let request = null
// 先加载到页面上
const cvs = h('canvas', {
  style: `background:rgba(255,0,0,0.3);position:fixed!important;
  top:0!important;left:0!important;pointer-events:none!important;
  z-index:9999999!important;margin:0!important;padding:0!important;
  display:block!important;`,
  width: `${cvsWidth}`,
  height: `${cvsHeight}`,
  class: '_____'
})
// 对 body 的临时引用
let body = document.createElement('body')
document.documentElement.appendChild(body)
body.appendChild(cvs)
body = null

const draw = ctx => {

}

chrome.runtime.sendMessage(
  {
    type: 'GET_BRIGHT_NESS'
  },
  response => {
    console.log(response.message)
  }
)


window.addEventListener('resize', _ => {
  if (request !== null) {
    return
  }
  // 强制 60 Hz
  request = requestAnimationFrame(_ => {
    cvs.width = document.documentElement.clientWidth
    cvs.height = document.documentElement.clientHeight
    request = null
  })
}, false)