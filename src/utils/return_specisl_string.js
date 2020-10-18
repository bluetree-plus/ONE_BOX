export const returnStr = (obj, init) => Object.entries(obj).reduce((prev, [k, v], i, { length }) => (
  (prev += i === length - 1 ? `${k}=${v}` : `${k}=${v}&`), prev
), init)