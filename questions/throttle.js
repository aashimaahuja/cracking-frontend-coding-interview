/* Write polyfill of throttle. 

Type A - Call throttled function with A
Type a - Do nothing: 700ms left to wait
Type s - Do nothing: 400ms left to wait
Type h - Do nothing: 100ms left to wait
Delay is over - Nothing happens
Type i - Call throttled function with Aashi
No more typing
Delay is over - Nothing happens

---------------------

Can you implement with trailing

Type A - Call throttled function with A
Type a - Save Aa to waiting args: 700ms left to wait
Type s - Save Aas to waiting args: 400ms left to wait
Type h - Save Aash to waiting args: 100ms left to wait
Delay is over - Call throttled function with Aash
Type i - Save Aashi to waiting args: 700ms left to wait
No more typing
Delay is over - Call throttled function with Aashi

*/

function throttle(cb, wait) {
  let isBlocked = false;
  return function (...args) {
    if (!isBlocked) {
      cb(...args);
      isBlocked = true;
      setTimeout(() => {
        isBlocked = false;
      }, wait);
    }
  };
}

function throttleWithTrailing(cb, wait) {
  let isBlocked = false;
  let lastArgs = null;
  return function (...args) {
    if (!isBlocked) {
      cb(...args);
      isBlocked = true;
      lastArgs = null;

      setTimeout(() => {
        isBlocked = false;
      }, wait);
    } else {
      lastArgs = args;
    }
  };
}
