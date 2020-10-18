export const isObj = _ => Object.prototype.toString.call(_).slice(8, -1) === 'Object'
