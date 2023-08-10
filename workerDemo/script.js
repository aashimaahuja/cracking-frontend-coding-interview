const appDiv = document.getElementById("app");
const bgButton = document.querySelector("#bgButton");
const sumButton = document.querySelector("#sumButton");
const worker = new Worker("worker.js");

function calculateSum() {
  if (window.Worker) {
    worker.postMessage("Calculate sum");
  }
}

function changeBackgroundColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

worker.onmessage = function (message) {
  const sum = message.data;
  console.log(sum);
  alert(`Total sum is ${sum}`);
};

sumButton.addEventListener("click", calculateSum);
bgButton.addEventListener("click", changeBackgroundColor);
