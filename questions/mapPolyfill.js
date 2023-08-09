/* Implement your own Array.prototype.map().
    Usage -> [1,2,3].myMap(num => num * 2)
    Output -> [2,4,6]
*/

Array.prototype.myMap = function (cb) {
  let arr = this;
  let res = [];
  arr.forEach((element, index) => {
    res.push(cb(element, index, arr));
  });

  return res;
};

console.log([1, 2, 3].myMap((num, i) => (num + i) * 2));
console.log([1, 2, 3].map((num, i) => (num + i) * 2));
