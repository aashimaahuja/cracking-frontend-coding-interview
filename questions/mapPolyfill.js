/* Implement your own Array.prototype.map().
    Usage -> [1,2,3].myMap(num => num * 2)
    Output -> [2,4,6]
*/

Array.prototype.myMap = function (callback) {
  let newArray = [];
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i, arr));
  }

  return newArray;
};

console.log([1, 2, 3].myMap((num, i) => num * 2 * i));
