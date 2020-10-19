import { h } from '../../utils/create_element'
/**
 * 构建主按钮
 */

const mainBtn = h('div', { class: 'main__btn__' },
  [
    h('div', { class: 'inner_box', style: 'display:none;' }, [
      h('div', { class: 'switch' }, ['off']),
      h('div', { class: 'can_move' }, ['m']),
      h('div', { class: 'in_the_inner_box_left' }, [
        h('div', { class: 'move_bar' }, [
          h('div', { class: 'inner_move_bar' })
        ])
      ]),
      h('div', { class: 'in_the_inner_box_right' })
    ])
  ]
)

document.querySelector('body[__board__="__"]').appendChild(mainBtn)

export default mainBtn
export const innerBox = document.querySelector('.main__btn__ .inner_box')
export const moveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar')
export const innerMoveBar = document.querySelector('.main__btn__ .inner_box .in_the_inner_box_left .move_bar .inner_move_bar')
export const switchBar = document.querySelector('.main__btn__ .inner_box .switch')
export const canMove = document.querySelector('.main__btn__ .inner_box .can_move')

