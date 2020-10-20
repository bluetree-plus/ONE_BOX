'use strict';

import './logic/bg/init'
import { handler } from './logic/bg/message_listener'
import $http from './utils/http'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  handler(request, sender, sendResponse)
})

// 请求可以跨域
console.info($http)
