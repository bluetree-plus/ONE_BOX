'use strict';

import './bg/init'
import { forBrightnessHandler } from './bg/for_brightness'
import { addListener } from './utils/chrome_api/chrome_runtime_onmessage_addListener'
import $http from './utils/http'

addListener(
  [
    forBrightnessHandler
  ]
)

// 请求可以跨域
console.info($http)

// $http.get({
//   url: 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total',
//   data: {
//     limti: 100
//   }
// })
//   .then(result => {
//     console.info(result)
//   })
//   .catch(error => {
//     console.info(error)
//   })
