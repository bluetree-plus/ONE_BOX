'use strict';
// ----------
import './logic/bg/init'
import { handler } from './logic/bg/message_listener'
import $http from './utils/http'

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handler(request, sender, sendResponse)
})

// 请求可以跨域
console.info($http)
