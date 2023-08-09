/* Write polyfill of debounce */

function debounce(cb, wait) {
  let timeoutId = null;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb(...args);
    }, wait);
  };
}
