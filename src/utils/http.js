import { isObj as _is } from './is_object'
import { returnStr as _return } from './return_specisl_string'
import { core } from './core_http'

const Http = (_ => {

  const Http = function () { }

  Http.prototype.json = function (config) {
    if (!_is(config)) {
      throw new Error('argument is not a object')
    }
    let { url } = config
    if (typeof url !== 'string') {
      throw new Error('url is not a string')
    }
    const { data, header, time, responseType } = config
    return core({
      url,
      method: 'post',
      data: _is(data) ? JSON.stringify(data) : null,
      type: 'application/json; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: _is(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  Http.prototype.post = function (config) {
    if (!_is(config)) {
      throw new Error('argument is not a object')
    }
    let { url } = config
    if (typeof url !== 'string') {
      throw new Error('url is not a string')
    }
    const { data, header, time, responseType } = config
    return core({
      url,
      method: 'post',
      data: _is(data) ? _return(data, '') : null,
      type: 'application/x-www-form-urlencoded; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: _is(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  Http.prototype.get = function (config) {
    if (!_is(config)) {
      throw new Error('argument is not a object')
    }
    let { url } = config
    if (typeof url !== 'string') {
      throw new Error('url is not a string')
    }
    const { data, header, time, responseType } = config
    _is(data) && (url = `${url}${_return(data, '?')}`)
    return core({
      url,
      method: 'get',
      data: null,
      type: 'application/x-www-form-urlencoded; charset=utf-8',
      responseType: typeof responseType === 'string' ? responseType : undefined,
      header: _is(header) ? header : undefined,
      time: typeof time === 'number' ? time : undefined
    })
  }

  return Http
})()

/**
 * xxx 可以是 get post json
 * new Http.xxx({
 *  url: String 请求的地址，必填
 *  data: Object 请求需要的数据，选填
 *  header: Object 除 content-type 之外的其他请求头，选填
 *  time: Number 请求超时时间，选填
 *  responseType: String 服务器响应的数据类型，选填
 * })
 */
export default new Http()