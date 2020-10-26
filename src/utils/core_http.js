import { baseTime } from './base_time'

export const core = ({
  url,
  method,
  data,
  type,
  responseType,
  header,
  time
}) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.withCredentials = true
  xhr.onreadystatechange = _ => {
    if (xhr.readyState !== 4) {
      return
    }
    // console.info(typeof xhr.getAllResponseHeaders())
    xhr.status === 200
      ? resolve({ data: xhr.response, otherMes: 'success' })
      : reject({ data: '[-1]', otherMes: `status: ${xhr.status}` })
  }
  header && Object.entries(header).forEach(([k, v]) => k.toLowerCase() !== 'content-type' && xhr.setRequestHeader(k, v))
  xhr.setRequestHeader('content-type', type)
  xhr.responseType = responseType || 'json'
  xhr.timeout = time || baseTime
  xhr.onerror = _ => reject({ data: '[-1]', otherMes: _ })
  xhr.send(data)
})