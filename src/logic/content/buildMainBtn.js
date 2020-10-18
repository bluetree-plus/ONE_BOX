import { h } from '../../utils/createElement'
/**
 * 构建主按钮
 */

const mainBtn = h('div', {
  style: 'z-index:9999999!important;',
  class: 'main__btn__'
},
  [
    h('div', { class: 'inner_box' })
  ]
)
mainBtn.onclick = _ => {
  console.info('滑稽')
}
document.querySelector('body[__is_]').appendChild(mainBtn)