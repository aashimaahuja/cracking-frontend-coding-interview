/* Given a string write a function which tell if
the given string is pallindrome or not.


isPallindrome('aba') -> true
isPallindrome('ababA') -> true
isPallindrome('abc') -> false

*/

function isPallindrome(str) {
  return str.toLowerCase().split("").reverse().join("") === str.toLowerCase();
}

console.log(isPallindrome("ababA"));
