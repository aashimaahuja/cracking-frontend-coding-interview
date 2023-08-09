/* Implement your own Array.prototype.reduce().
    Usage -> [1, 2, 3, 4, 5].myReduce((ac,cv) => ac+cv ,0);
    Output -> 15
*/

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;
  let ac = initialValue;

  for (let i = 0; i < arr.length; i++) {
    if (ac !== undefined) {
      ac = callback(ac, arr[i]);
    } else {
      ac = arr[i];
    }
  }

  return ac;
};

console.log([1, 2, 3, 4, 5].myReduce((ac, cv) => ac + cv));
