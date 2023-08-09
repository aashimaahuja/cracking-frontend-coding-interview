// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

function sum(a, b, c, d) {
  return a + b + c + d;
}

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

// curriedSum(1)(2)(3)(4)

function curry(fn) {
  function inner(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      return inner.bind(this, ...args);
    }
  }

  return inner;
}

const curriedJoin = curry(join);

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)(4));

console.log(curriedJoin(1)(2)(3));
