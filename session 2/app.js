console.log("HELLO WORLD");

// VARIABLES

// let, const, var -> variables in js

let addressUMT = "UMT, Johar town, lahore, punjab, pakistan";

// addressUMT = "SOMETHING ELSE";

const name = "Ali"; // -- > cant be changes

console.log(addressUMT);

// data types

("UMT, Johar town, lahore, punjab, pakistan"); //->
123; //-> int
12.3; // -> decimal
//boolean; // -> true , false

// let success = false;

// arrays -> ["faizan", "ali", "raza"]  -> list of items

let names = ["faizan", "ali", "raza"];

// console.log(names);

// names.pop();
names.unshift("another name");
// console.log(names.includes("razaaaa"));

// console.log(names);

// Objects

let student = {
  name: "ali",
  age: 20,
  program: "CS",
};

student.age = 24;

console.log(Object.values(student));

// LOOPS

//i++  -> i = i + 1

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let success = true;
// while (success) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

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

// promises

// Pending, resolved, rejected

console.log("STARTING CODE");

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if ((success = true)) {
      resolve("Promise Resolved.");
    } else {
      reject("Promise Rejected");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log("ENDING CODE");

//  async await

async function getSuccess() {
  console.log("Hello");
  await new Promise((resolve) => setTimeout(() => resolve("resolved")), 2000);
  console.log("Hello");
}

getSuccess();
