export const addListener = callbacks => (
  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => callbacks.forEach(_ => _(request, sender, sendResponse))
  )
)