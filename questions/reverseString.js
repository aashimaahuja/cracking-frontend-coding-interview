// Create a function that reverses the given string

/*
    reverse("Hello World")
*/

function reverse(text) {
  const reversedString = text.split("").reverse().join("");
  return reversedString;
}

console.log(reverse("Hello World"));
