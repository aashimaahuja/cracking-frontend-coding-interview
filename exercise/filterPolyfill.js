/* Implement your own Array.prototype.filter().
    Usage -> [1, 2, 3, 4, 5, 6, 7].myFilter(num => num % 2 === 0);
    Output -> [2,4,6]
*/

Array.prototype.myFilter = function (cb) {
  let arr = this;
  let res = [];
  arr.forEach((element, index) => {
    if (cb(element, index, arr)) {
      res.push(element);
    }
  });

  return res;
};

console.log([1, 2, 3, 4, 5, 6, 7].myFilter((num) => num % 2 !== 0));
