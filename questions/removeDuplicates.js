/*
    Create a function which takes a string and return string without duplicates

    removeDuplicates('aabbcc') -> abc
*/

function removeDuplicates(str) {
  let arr = str.split("");
  let set = new Set(arr);
  return Array.from(set).join("");
}

console.log(removeDuplicates("aabbccd"));
