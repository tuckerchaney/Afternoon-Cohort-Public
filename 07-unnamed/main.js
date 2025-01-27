// const btn = document.querySelector("#btn");
// const decrease = document.querySelector("#decrease");
// btn.addEventListener("click", clickCountAdd);
// decrease.addEventListener("click", clickCountMinus);
// const counter = document.querySelector("#counter");

// let count = 0;

// function clickCountAdd() {
//   count++;
//   console.log(count);
//   counter.textContent = count;
// }
// function clickCountMinus() {
//   count--;
//   console.log(count);
//   counter.textContent = count;
// }

// const quoteGoesHere = document.getElementById("quoteGoesHere");
// const newQuote = document.getElementById("newQuote");

// let quotes = ["hello", "hi", "greetings", "hola"];

// newQuote.addEventListener("click", quoteClicker);

// function quoteClicker() {
//   let randomNumber = Math.floor(Math.random() * quotes.length);
//   console.log(randomNumber);
//   quoteGoesHere.textContent = quotes[randomNumber];
// }

// alert("Welcome to My Website!");
const changeParagraph = document.getElementById("changeParagraph");
const paragraphButton = document.getElementById("paragraphButton");
paragraphButton.addEventListener("click", changeText);
function changeText() {
  console.log("hello");
  changeParagraph.textContent = "you clicked!";
}

const img1btn = document.getElementById("img1btn");
const img2btn = document.getElementById("img2btn");
const imageChanger = document.getElementById("imageChanger");
img1btn.addEventListener("click", image1);
img2btn.addEventListener("click", image2);
const img1 =
  "https://i.natgeofe.com/k/7ce14b7f-df35-4881-95ae-650bce0adf4d/mallard-male-standing.jpg?wp=1&w=1084.125&h=609";
const img2 =
  "https://media.istockphoto.com/id/115892641/photo/domestic-duck-anas-platyrhynchos.jpg?s=612x612&w=0&k=20&c=_hT9lrpu7n2z-0mBF5jvw0UAmd9ASik93SChQ-NO--E=";

function image1() {
  console.log("img1");
  imageChanger.src = img1;
}

function image2() {
  console.log("img2");
  imageChanger.src = img2;
}

const inputText = document.getElementById("inputText");
const inputButton = document.getElementById("inputButton");
const outputText = document.getElementById("outputText");

inputButton.addEventListener("click", textReplacer);

function textReplacer() {
  const text = inputText.value;
  outputText.textContent = text;
  inputText.value = "";
}
let timerInterval;
let timeLeft = 10;
const start = document.getElementById("start");
const stopBtn = document.getElementById("stopBtn");
const resume = document.getElementById("resume");
const timerNumber = document.getElementById("timerNumber");
const milliseconds = 0;

start.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(function () {
    timeLeft--;
    timerNumber.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft = 10;
      timerNumber.textContent = timeLeft;
    }
  }, 1000);
}
function stopTimer() {}

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const calculated = document.getElementById("calculated");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

addBtn.addEventListener("click", addFunction);
subtractBtn.addEventListener("click", subtractFunction);
multiplyBtn.addEventListener("click", multiplyFunction);
divideBtn.addEventListener("click", divideFunction);

function addFunction() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  addOutput = num1Value + num2Value;
  calculated.textContent = addOutput;
}

function subtractFunction() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  subtractOutput = num1Value - num2Value;
  calculated.textContent = subtractOutput;
}

function multiplyFunction() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  multiplyOutput = num1Value * num2Value;
  calculated.textContent = multiplyOutput;
}

function divideFunction() {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  divideOutput = num1Value / num2Value;
  calculated.textContent = divideOutput;
}
