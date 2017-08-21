// 常用的过滤器

// 给定金额（number） 千分符格式化 参数1是金额 参数2是小数位
export function money (value, decimal = 2) {
  if (isNaN(value)) {
    return '0.00'
  } else {
    let num = parseFloat(value)
    let newValue = numFormatToStr(num.toFixed(decimal))
    return newValue
  }
}

// 给定数值 百分号化 参数
export function percent (val, decimal = 2) {
  let output
  if (!isNaN(val)) {
    output = (val * 100).toFixed(decimal, 10) + '%'
  }
  return output
}

// 千分符
function numFormatToStr (num) {
  num = num || 0
  let negative = false
  if (num === 0) {
    return 0
  }
  if (num < 0) {
    num *= -1
    negative = true
  }
  if (num) {
    let x1 = window.parseInt(num).toString()
    let len = x1.length
    let x2 = num.toString().slice(len)
    if (len <= 3) {
      return negative ? '-' + x1 + x2 : x1 + x2
    }
    let r = len % 3
    let b = x1.slice(r, len).match(/\d{3}/g).join(',')
    x1 = r > 0 ? x1.slice(0, r) + ',' + b : b
    let x = negative ? '-' + x1 + x2 : x1 + x2
    return x
  } else {
    return 0
  }
}
