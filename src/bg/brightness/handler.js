
export const forBrightnessHandler = (request, sender, sendResponse) => {
  // console.info(request, sender, sendResponse)

  switch (request.type) {
    case 'GET_BRIGHT_NESS':
      return sendResponse({
        brightness: localStorage.getItem('__bright_ness__'),
      })
    case 'SET_BRIGHT_NESS':
      {
        localStorage.setItem('__bright_ness__', request.value)
        return sendResponse()
      }
    case 'GET_MAIN_BTN_LEFT_TOP':
      return sendResponse({
        left: localStorage.getItem('__main_btn_left__'),
        top: localStorage.getItem('__main_btn_top__'),
      })
    case 'SET_MAIN_BTN_LEFT_TOP':
      {
        const { left, top } = request
        localStorage.setItem('__main_btn_left__', `${left}`)
        localStorage.setItem('__main_btn_top__', `${top}`)
        return sendResponse()
      }
    default: ;
  }
}