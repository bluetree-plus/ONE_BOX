// 先后顺序
import './brightness.css'
import ACTION from './init_brightness_board'
import mainBtn, { canMove, moveBar, innerMoveBar, switchBar, innerBox } from './build_main_btn'
import { sendMessage } from '../utils/chrome_api/chrome_runtime_send_message'

let isMainBtnClick = false // 主按钮是否点击
let requestOfMoveBar = null // 滑动条移动限频状态位
let timeOfMoveBar = null // 滑动条延时通知后台状态位
let saveYOfMoveBar = 0 // 内滑动条缓存
let requestOfCanMove = null // 主按钮移动移动限频状态位
let timeOfCanMove = null // 主按钮移动延时通知后台状态位
let isSwitchBarClick = false // 亮度调节按钮是否点击
let isCanMoveClick = false // 是否可移动状态位

const setMainBtnLeftAndTop = (left, top) => mainBtn.setAttribute('style',
  Object.entries({
    left: `${left}px`,
    top: `${top}px`
  }).reduce((prev, [k, v]) => (prev += `${k}:${v};`, prev), '')
)
const SEND_SET_MAIN_BTN_LEFT_TOP = (left, top) => {
  sendMessage({
    type: 'SET_MAIN_BTN_LEFT_TOP',
    left,
    top
  })
    .then(_ => console.log('延后执行 SEND_SET_MAIN_BTN_LEFT_TOP'))
}

const clickHandler = e => {
  // console.info(e.target)
  switch (e.target) {
    case mainBtn:
      e.stopPropagation()
      isMainBtnClick = !isMainBtnClick
      isMainBtnClick
        ? innerBox.style.display = 'flex'
        : innerBox.style.display = 'none'
      break
    case canMove:
      isCanMoveClick = !isCanMoveClick
      isCanMoveClick
        ? canMove.style.background = '#90EE90'
        : canMove.style.background = '#fff'
      break
    case switchBar:
      isSwitchBarClick = !isSwitchBarClick
      isSwitchBarClick
        ? (switchBar.style.background = '#90EE90',
          switchBar.innerHTML = 'on')
        : (switchBar.style.background = '#fff',
          switchBar.innerHTML = 'off')
      break
    default: ;
  }
}

console.clear()

sendMessage({
  type: 'GET_BRIGHT_NESS'
})
  .then(response => {
    const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
    const h = Math.floor(height * response.brightness)
    innerMoveBar.style.height = `${h}px`
  })

sendMessage({
  type: 'GET_MAIN_BTN_LEFT_TOP'
})
  .then(({ left, top }) => {
    // 当前屏幕尺寸大于后台存储的left，top值时，将回归初始值，并后台存储
    // 否则依旧使用当前 left , top
    if (
      ((+left) > document.documentElement.clientWidth - 25 - 10 - 25) ||
      ((+top) > document.documentElement.clientHeight - 10 - 25)
    ) {
      setMainBtnLeftAndTop(0, 100)
      SEND_SET_MAIN_BTN_LEFT_TOP(0, 100)
    } else {
      setMainBtnLeftAndTop(left, top)
    }
  })

// 事件监听器、事件绑定
moveBar.onmousemove = e => {
  e.stopPropagation()
  if (!isSwitchBarClick) {
    return
  }
  requestOfMoveBar !== null && cancelAnimationFrame(requestOfMoveBar)
  requestOfMoveBar = requestAnimationFrame(_ => {
    if (saveYOfMoveBar !== e.offsetY) {
      // 获取当前高度
      const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
      let value = `${e.offsetY / height}`.replace(/(\d)(\.\d)\d*$/g, '$1$2')
      // console.info(height, e.offsetY, saveYOfMoveBar, value)
      console.info('move')
      ACTION.SEND_GET_BRIGHTNESS_SET_STYLE({ isSave: false, value })
      innerMoveBar.style.height = `${e.offsetY}px`
      saveYOfMoveBar = e.offsetY
      // 延后通知后台
      timeOfMoveBar !== null && clearTimeout(timeOfMoveBar)
      timeOfMoveBar = setTimeout(_ => {
        ACTION.SEND_SET_BRIGHTNESS({ value })
        timeOfMoveBar = null
      }, 5000)
    }
    requestOfMoveBar = null
  })
}

window.addEventListener('mousemove', e => {
  if (!isMainBtnClick || !isCanMoveClick) {
    return
  }
  requestOfCanMove !== null && cancelAnimationFrame(requestOfCanMove)
  requestOfCanMove = requestAnimationFrame(_ => {
    // left [0, document.documentElement.clientWidth - 25 - 10 - 25]
    // top [0, document.documentElement.clientHeight - 10 - 25]

    let left = Math.floor(e.clientX - 12.5 - 10 - 25)
    let top = Math.floor(e.clientY - 12.5)
    if (left > document.documentElement.clientWidth - 25 - 10 - 25 || left < 0) {
      return
    }
    if (top > document.documentElement.clientHeight - 10 - 25 || top < 0) {
      return
    }
    setMainBtnLeftAndTop(left, top)
    // 延后通知后台
    timeOfCanMove !== null && clearTimeout(timeOfCanMove)
    timeOfCanMove = setTimeout(_ => {
      SEND_SET_MAIN_BTN_LEFT_TOP(left, top)
      timeOfCanMove = null
    }, 5000)
    console.info('move main btn')
    requestOfCanMove = null
  })
}, false)


mainBtn.onclick = clickHandler