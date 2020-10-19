
export const handler = (request, sender, sendResponse) => {
  console.info(request, sender, sendResponse)

  switch (request.type) {
    case 'GET_BRIGHT_NESS':
      return sendResponse({
        message: localStorage.getItem('__bright_ness__'),
      })
    case 'SET_BRIGHT_NESS':
      {
        localStorage.setItem('__bright_ness__', request.value)
        return sendResponse()
      }
    default: ;
  }
}