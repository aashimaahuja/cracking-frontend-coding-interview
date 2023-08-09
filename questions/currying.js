/*

Given a function sum write a curried function

function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);

curriedSum(1)(2)(3)  // 6
curriedSum(2)(4)(4) // 10

*/

function sum(a, b, c) {
  return a + b + c;
}

function curry(cbFn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return cbFn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));

console.log(curriedSum(2)(4)(4));

// ----------------------------------------------

/*

Write a generic curry function which when passed any function would return its curry function

function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);

curriedSum(1)(2)(3)  // 6
curriedSum(2)(5) // 7
curriedSum(1)(2)(3)(4) // 10

function(a, b, c){
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);
curriedJoin(1)(2)(3) -> 1_2_3
curriedJoin(1)(2)(3)(4) -> 1_2_3_4

*/

// sum(1)(2)(3)

function curry(cb) {
  function inner(...args) {
    if (args.length === cb.length) {
      return cb(...args);
    } else {
      inner.bind(this, ...args);
    }
  }
  return inner;
}
