// 存
export function save(key, val) {
  if (Object.prototype.toString.call(val) !== '[object Undefined]') {
    window.localStorage.setItem(key, JSON.stringify(val))
  }
}

// 取
export function get(key) {
  let str = window.localStorage.getItem(key)
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

// 删
export function remove(key) {
  window.localStorage.removeItem(key)
}
