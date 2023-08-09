/*

Given an array , implement a function which reduces nesting of the array

const arr = [1, [2], [3, [4]]];

flatten(arr) ->  [1, 2, 3, 4]

Try to implement both recursive and iterative version

*/

function flatten(arr, result = []) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatten(item, result);
    } else {
      result.push(item);
    }
  });

  return result;
}

console.log(flatten([1, [2], [3, [4]]]));

/* --------------------------------------- */

function flattenIterative(arr) {
  let result = [];
  let stack = [...arr];

  while (stack.length > 0) {
    let element = stack.pop();
    if (Array.isArray(element)) {
      stack.push(...element);
    } else {
      result.push(element);
    }
  }

  return result.reverse();
}

console.log(flattenIterative([1, [2], [3, [4]]]));
