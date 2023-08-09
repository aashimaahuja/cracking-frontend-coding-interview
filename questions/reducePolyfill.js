/* Implement your own Array.prototype.reduce().
    Usage -> [1, 2, 3, 4, 5].myReduce((ac,cv) => ac+cv ,0);
    Output -> 15
*/

Array.prototype.myReduce = function (cb, initialValue) {
  let arr = this;
  let ac = initialValue;

  arr.forEach((currentValue) => {
    if (ac !== undefined) {
      ac = cb(ac, currentValue);
    } else {
      ac = currentValue;
    }
  });

  return ac;
};

console.log([1, 2, 3, 4, 5].myReduce((ac, cv) => ac + cv, 0));
console.log([1, 2, 3, 4, 5].reduce((ac, cv) => ac + cv, 0));
