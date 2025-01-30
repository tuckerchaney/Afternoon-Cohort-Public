// const colors = ["red", "blue", "green", "pink"];
// for (let i = 0; i < colors.length; i++) console.log(colors[i]);
// const mixedArray = [1, "hello", true, { name: "travis" }, [10, 20]];
// console.log(mixedArray);
// console.log(mixedArray[4][1]);

// const colors = ["red", "blue", "green", "pink"];
// colors.push("orange");
// colors.pop;
// console.log(colors);

// let fruits = ["apple", "orange", "cantelope", "cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const user = {
//   name: "Tucker",
//   age: 30,
//   profession: "BDM",
// };
// for (const key in user) {
//   if (Object.hasOwnProperty.call(user, key)) {
//     console.log(`${key}: ${user[key]}`);
//   }
// }
// console.log("hello");

// function sum() {
//   let sum = 0;
//   let numbers = [1, 20, 30, 80];

//   for (let i = 0; i < numbers.length; i++) {
//     let currentNumber = numbers[i];
//     // console.log(currentNumber);
//     sum += currentNumber;
//   }
//   console.log(sum);
// }
// sum();

// function doubledNumbers() {
//   const numbers = [2, 5, 9, 1];
//   const doubled = [];
//   for (let i = 0; i < numbers.length; i++) doubled.push(numbers[i] * 2);
//   console.log(doubled);
// }

// doubledNumbers();

// function evenNumbers() {
//   const numbers = [2, 5, 9, 1, 4, 6, 8];
//   let evens = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) evens.push(numbers[i]);
//   }
//   console.log(evens);
// }
// evenNumbers();
console.log("Exercise 1");
// Exercise 1
toDoList = ["Cook", "Eat", "Wash Dishes"];
console.log(toDoList);
toDoList.push("go to bed");
toDoList.shift();
console.log(toDoList);

console.log("Exercise 2");
// Exercise 2
function evenNumbers() {
  const numbers = [2, 5, 9, 1, 4, 6, 8];
  let evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) evens.push(numbers[i]);
  }
  console.log(evens.length);
}
evenNumbers();

console.log("Exercise 3");
// Exercise 3
function reverseNumbers() {
  let reversible = [1, 2, 3, 4, 5];
  let reversed = [];
  for (let i = reversible.length - 1; i >= 0; i--) {
    reversed.push(reversible[i]);
    // reversible = reversible.push(reversible[i]);
  }
  console.log(reversed);
}
reverseNumbers();

console.log("Exercise 4");
// Exercise 4
function highestNumbers() {
  let highNumbers = [5, 1, 9, 19];
  let highest = 0;
  for (let i = 0; i < highNumbers.length; i++)
    if (highNumbers[i] > highest) {
      highest = highNumbers[i];
    }
  console.log(highest);
}
highestNumbers();

// Exercise 5
console.log("Exercise 5");
function greetUsers() {
  let users = ["Tucker", "Travis", "Millisa", "Mark"];
  for (let i = 0; i < users.length; i++) {
    console.log(`Hi ${users[i]}, Welcome to the site!`);
  }
}
greetUsers();
