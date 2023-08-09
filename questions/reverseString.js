// Create a function that reverses the given string

/*
    reverse("Hello World")
    output -> dlroW olleH
*/

function reverse(str) {
  let newString = str.split("").reverse().join("");

  return newString;
}

console.log(reverse("Hello World"));
