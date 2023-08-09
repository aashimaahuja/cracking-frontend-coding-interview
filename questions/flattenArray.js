/*

Given an array , implement a function which reduces nesting of the array

const arr = [1, [2], [3, [4]]];

flat(arr)
[1, 2, 3, 4]

Try to implement both recursive and iterative version

*/

function flatten(arr, res = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item, res);
    } else {
      res.push(item);
    }
  });

  return res;
}

// [1, [2], [3, [4]]]
function flattenIterative(arr) {
  let stack = [...arr];
  let res = [];

  while (stack.length > 0) {
    let el = stack.pop();
    if (Array.isArray(el)) {
      stack.push(...el);
    } else {
      res.push(el);
    }
  }

  return res.reverse();
}

console.log(flattenIterative([1, [[2]], [[5, [8]]], [3, [4]]]));
