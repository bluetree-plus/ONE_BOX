/**
 * h(
 *  'div',
 *  {
 *   class: String,
 *   id: String,
 *   style: String
 *   ...
 *  },
 *  [
 *   h(...),
 *   'text'
 *  ]
 * )
 */
import { isObj } from './is_object'
import { isArr } from './is_array'

export const h = (key, attr, children) => {
  if (
    typeof key !== 'string' ||
    !isObj(attr) ||
    (!isArr(children) && children !== undefined)
  ) {
    throw new Error('arguments error')
  }
  return new Proxy({}, {
    get () {
      const el = document.createElement(key)
      Object.entries(attr).forEach(([k, v]) => typeof v === 'string' && el.setAttribute(k, v))
      children && children.forEach(_ => el.appendChild(
        typeof _ === 'string'
          ? document.createTextNode(_)
          : _
      ))
      return el
    }
  })[key]
}
