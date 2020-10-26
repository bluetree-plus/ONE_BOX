'use strict';

import './bg/init'
import { onInstalledAddListener } from './utils/chrome_api/chrome_runtime_oninstalled_add_listener'
import { addListener } from './utils/chrome_api/chrome_runtime_onmessage_add_listener'
import { forBrightnessHandler } from './bg/brightness/handler'

import $http from './utils/http'
import zhihu from './other_functions/zhihu/request_meta'


onInstalledAddListener(
  data => {

    // console.info(data)

    addListener(
      [
        forBrightnessHandler
      ]
    )

    // open(chrome.runtime.getURL('./content.js'))

    // $http[zhihu.method]({
    //   url: zhihu.url,
    //   data: zhihu.data
    // })
    //   .then(result => {
    //     console.info(result)
    //   })
    //   .catch(error => {
    //     console.info(error)
    //   })

  }
)
