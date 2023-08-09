/*
    Create a function which takes a string and return string without duplicates

    removeDuplicates('aabbcc') -> abc
*/

function removeDuplicates(str) {
  let result = "";
  const arr = str.split("");

  const set = new Set(arr);
  result = [...set].join("");

  return result;
}

console.log(removeDuplicates("aabbcc"));
