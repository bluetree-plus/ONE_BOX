'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page

// Communicate with background file by sending a message

chrome.runtime.sendMessage(
  {
    type: 'GET_BRIGHT_NESS'
  },
  response => {
    console.log(response.message)
  }
)

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});

// ----------

console.clear()

import { h } from './utils/createElement'
console.info(h, typeof h)
let dom = h('div', {
  style: 'background:red;',
  class: '_____huajixxx'
}, [
  '滑稽', h('span', {}, ['滑稽2s'])
])

document.body.appendChild(dom)
