/* Implement your own Array.prototype.filter().
    Usage -> [1, 2, 3, 4, 5, 6, 7].myFilter(num => num % 2 === 0);
    Output -> [2,4,6]
*/

Array.prototype.myFilter = function (callback) {
  let arr = this;
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
};

console.log([1, 2, 3, 4, 5, 6, 7].myFilter((num) => num % 2 !== 0));
