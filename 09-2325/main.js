// function processData(number, callback) {
//   let result = number + 5;
//   callback(result);
// }

// function logResult(result) {
//   console.log(`Processed Result: ${result}`);
// }

// processData(10, logResult);

// const double = (number) => console.log(number * 2);

// double(10);

// const calculateAverage = (grades) => {
//   let amountOfGrades = grades.length;
//   let total = 0;
//   console.log(grades);
//   for (let i = 0; i < grades.length; i++) {
//     let currentGrade = grades[i];
//     console.log(currentGrade);
//     total += currentGrade;
//   }
//   console.log(total / amountOfGrades);
// };
// calculateAverage([10, 70, 50, 79, 90]);

// const doubled = (numbers) => {
//   const numbersDoubled = numbers.map((num) => num * 2);
//   console.log(numbersDoubled);
// };

// // doubled([10, 20, 5, 1, 2, 12, 51]);

// const logEvens = (nums) => {
//   const evens = nums.filter((num) => num % 2 === 0);
//   console.log(evens);
// };

// // // logEvens([10, 20, 5, 1, 2, 12, 51]);

// // const readNumbers = (nums) => nums.foreach((num) => console.log(num));

// // readNumbers([10, 20, 5, 1, 2, 12, 51]);

// const iTake5Seconds = () => {
//   setTimeout(() => {
//     console.log(`This message is logged after 5 seconds`);
//   }, 5000);
// };

// // iTake5Seconds();

// const countDown = (initialCount, seconds) => {
//   setInterval(() => {
//     initialCount--;
//     console.log(initialCount);
//   }, seconds);
// };
// countDown(15, 5000);

console.log("Exercise 1");
// Exercise 1

const applyDiscount = (prices, discount, callback) => {
  let discounted = prices.map((price) => price - (price * discount) / 100);
  callback(discounted);
};
const logData = (discounted) => {
  console.log(`This is the discounted price: ${discounted}`);
};
applyDiscount([100, 200, 300, 400, 500], 25, logData);

console.log("Exercise 2");
// // Exercise 2

const squareAndPrint = (numbers) => {
  const squared = numbers.map((number) => number * number);
  console.log(squared);
};
squareAndPrint([2, 4, 6, 8]);

console.log("Exercise 3");
// Exercise 3

const reversing = (reverse) => {
  let reversed = reverse.map((reverses) =>
    reverses.split("").reverse().join("")
  );
  console.log(reversed);
};
reversing(["hello", "hola"]);
console.log("Exercise 4");
// Exercise 4

const numbers = [7, 8, 5, 2, 4];
const odds = numbers.filter((number) => number % 2 != 0);
console.log(odds);

console.log("Exercise 5");
// Exercise 5

const seconds5Completed = () => {
  setTimeout(() => {
    console.log(`Task Completed`);
  }, 5000);
};

seconds5Completed();

const notYet = (seconds) => {
  setInterval(() => {
    console.log("Not yet");
  }, seconds);
};
notYet(2000);
