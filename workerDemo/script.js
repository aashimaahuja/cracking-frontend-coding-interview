const appDiv = document.getElementById("app");
const bgButton = document.querySelector("#bgButton");
const sumButton = document.querySelector("#sumButton");

function changeBackgroundColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

function calculateSum() {
  let sum = 0;
  for (let i = 0; i < 5000000000; i++) {
    sum += i;
  }
  alert(`Total sum is ${sum}`);
}

sumButton.addEventListener("click", calculateSum);
bgButton.addEventListener("click", changeBackgroundColor);
