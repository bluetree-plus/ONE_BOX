import ACTION from './init_brightness_box'
import mainBtn, { canMove, moveBar, innerMoveBar, switchBar, innerBox } from './build_main_btn'

console.clear()

chrome.runtime.sendMessage({
  type: 'GET_BRIGHT_NESS'
}, response => {
  const height = +getComputedStyle(moveBar, null).height.replace(/\D/g, '')
  const h = Math.floor(height * response.message)
  innerMoveBar.style.height = `${h}px`
})

let requestOfMoveBar = null // 滑动条移动限频状态位
let timeOfMoveBar = null // 滑动条延时器状态位
let saveYOfMoveBar = 0

let requestOfCanMove = null // 主按钮是否移动移动限频状态位
let timeOfCanMove = null // 主按钮移动延时器状态位
let saveYOfCanMove = 0
let saveXOfCanMove = 0


let isSwitchBarClick = false
let isCanMoveClick = false

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
      ACTION.SEND_GET_BRIGHT_NESS_SET_STYLE({ isSave: false, value })
      innerMoveBar.style.height = `${e.offsetY}px`
      saveYOfMoveBar = e.offsetY
      // 延后通知后台
      timeOfMoveBar !== null && clearTimeout(timeOfMoveBar)
      timeOfMoveBar = setTimeout(_ => {
        ACTION.SEND_SET_BRIGHT_NESS({ value })
        timeOfMoveBar = null
      }, 5000)
    }
    requestOfMoveBar = null
  })
}


window.addEventListener('mousemove', e => {
  if (!isCanMoveClick) {
    return
  }
  requestOfCanMove !== null && cancelAnimationFrame(requestOfCanMove)
  requestOfCanMove = requestAnimationFrame(_ => {
    if (saveYOfCanMove !== e.clientY || saveXOfCanMove !== e.clientX) {
      let left = Math.floor(e.clientX - 25 - 12.5)
      let top = Math.floor(e.clientY - 450 - 12.5)
      mainBtn.setAttribute('style',
        Object.entries({
          left: `${left}px`,
          top: `${top}px`
        }).reduce((prev, [k, v]) => (prev += `${k}:${v};`, prev), '')
      )
      saveXOfCanMove = left
      saveYOfCanMove = top
      // 延后通知后台
      console.info('滑稽')
    }
  })
}, false)

switchBar.onclick = e => {
  e.stopPropagation()
  isSwitchBarClick = !isSwitchBarClick
  isSwitchBarClick
    ? (switchBar.style.boxShadow = '1px 1px 5px #90EE90 inset',
      switchBar.innerHTML = 'on')
    : (switchBar.style.boxShadow = '1px 1px 5px #fff inset',
      switchBar.innerHTML = 'off')
}

canMove.onclick = e => {
  e.stopPropagation()
  isCanMoveClick = !isCanMoveClick
  isCanMoveClick
    ? canMove.style.boxShadow = '1px 1px 5px #90EE90 inset'
    : canMove.style.boxShadow = '1px 1px 5px #fff inset'
  console.info('滑稽 click', saveXOfCanMove, saveYOfCanMove)
}

mainBtn.onmouseenter = _ => innerBox.style.display = 'flex'
// mainBtn.onmouseleave = _ => innerBox.style.display = 'none'