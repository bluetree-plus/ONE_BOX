export const sendMessage = sendData => new Promise(
  resolve => chrome.runtime.sendMessage(sendData, response => resolve(response))
)