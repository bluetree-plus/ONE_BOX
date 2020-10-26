export const addListener = callbacks => (
  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      callbacks.forEach(_ => _(request, sender, sendResponse))
      // 这里必须显示的返回 true
      // 才能在监听回调中启用异步
      // 这里是一个坑点，希望看到这里的朋友能够注意到
      return true
    }
  )
)