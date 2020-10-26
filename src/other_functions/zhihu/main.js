

const zhihu = document.querySelector('[__board__="__"] .main__btn__ .inner_box .in_the_inner_box_middle .item[zhihu]')

zhihu.onclick = e => {
  e.stopPropagation()
  console.info('滑稽')
}