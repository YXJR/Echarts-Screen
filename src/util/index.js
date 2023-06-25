export function debounce(delay, callback) {
  //防抖
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.call(this, ...args)
    }, delay)
  }
}
