
export const handler = (request, sender, sendResponse) => {
  console.info('&&&&')
  console.info(request, sender, sendResponse)

  switch (request.type) {
    case 'GET_BRIGHT_NESS':
      return sendResponse({
        message: localStorage.getItem('__bright_ness__'),
      })
    case 'GREETINGS': {
      const message = `Hi ${sender.tab ? 'Con' : 'Pop'
        }, my name is Bac. I am from Background. It's great to hear from you.`

      // Log message coming from the `request` parameter
      console.log(request.payload.message)
      // Send a response message
      return sendResponse({
        message,
      })
    }
    default: ;
  }
}