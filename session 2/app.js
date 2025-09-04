console.log("HELLO WORLD");

// VARIABLES

// let, const, var -> variables in js

let addressUMT = "UMT, Johar town, lahore, punjab, pakistan";

// addressUMT = "SOMETHING ELSE";

const name = "Ali"; // -- > cant be changes

// console.log(addressUMT);

// data types

// "sdfhsdjksdfsfei923" -> string

("UMT, Johar town, lahore, punjab, pakistan"); //->
123; //-> int
12.3; // -> decimal
//boolean; // -> true , false

// let success = false;

// arrays -> ["faizan", "ali", "raza"]  -> list of items
//  0        1        2

// let names = ["faizan", "ali", "raza"];

// names.pop();
// console.log(names);

// names.unshift("another name");
// console.log(names.includes("faizan"));

// console.log(names);

// Objects

let student = {
  name: "ali",
  age: 20,
  program: "CS",
  address: {
    city: "lahore",
    country: "pakistan",
  },
};

student.age = 24;
// console.log(student.program);/

// console.log(Object.values(student));

// --------------------------

// LOOPS

//i++  -> i = i + 1

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;

// let success = true;
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (false);

// i - 10
// false
// 1

// Functions

function getStudent(name, age, program) {
  console.log(name);
  console.log(age);
  console.log(program);
}

// getStudent("faizan", 19, "cs");

// ASYNCRONOUS PROGRAMMING

// promises

// Pending, resolved, rejected

// console.log("STARTING CODE");

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;
//     if (success === true) {
//       resolve("Promise Resolved after 2 seconds.");
//     } else {
//       reject("Promise Rejected");
//     }
//   }, 5000);
// });

// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// console.log("ENDING CODE");

//  async await

// console.log("STARTING CODE");

// async function getSuccess() {
//   console.log("Hello");
//   console.log("Hello 2");
//   console.log("Hello 3");
//   await new Promise((resolve) => setTimeout(() => resolve("resolved")), 2000);
//   console.log("Hello 2");
// }

// console.log("ENDING CODE");

getSuccess();

// DOM MANIPULATION
let heading = document.getElementById("heading");

function handleButtonClick() {
  console.log("BUTTON CLICKED");
}
