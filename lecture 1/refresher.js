// ES6
// var i = 1 => declaration => assignment
// const
// let

// for (var i = 0; i < 10; i++){
//     //
// }

// console.log(i);

// for (let i = 0; i < 10; i++){
//     //
// }

// console.log(i);

// i is not defined

// i is undefined

// assignment to constant

//var i = 1
//var i = 2

// let i = 1
// let i = 2

// let i = 1
//  i = 2

// const i = 1
// const i = 2

// const z = 1; // => value

// const person = {
//     name: "Ahmed",
//     age: 26,
// };

// console.log(typeof 1);
// console.log(typeof person);

// person.address = "address";

//value tye
//reference type

// const anotherPerson = person

// person.name = "Ali"

// console.log(anotherPerson.name);

// const anotherPerson = { ...person } //spread operator

// person.name = "Ali"

// console.log(anotherPerson.name); // shallow and deep copying for objects

// person = {   => error

// }

// console.log(person === anotherPerson);

// console.log( 1 == "1"); // true
// console.log( 1 === "1"); // false

//========================================

// function add(a, b) {
//   return a + b;
// }

// assignment => variable

// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b; // return a + b

// const result = add(1, 2)

// const add = (a, b) => (a + b); // return a + b

// const add = (a, b) => {a + b} // return undefined

// const logger = a => console.log(a); //return undefined

// const logger = () => console.log("Hello"); //return undefined

// pass the function as a parameter

// const executer = (func) => {
//     console.log(func);
//   func();
// };

// const logger = () => console.log("Hello");
// const logger2 = () => console.log("ًWorld");

// // executer(logger) // => reference to the function

// // executer(logger()); // error

// // executer(logger2)

// return function from another Function

// const func1 = () => {
//     return () => {
//       console.log("");
//   };
// };

// const x = func1();
// console.log(x);
// x()

// const x = func1()();
// console.log(x);

//========================================

// const arr = [1, 2, 3, 4];

// arr.push(5)

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// const callback = (value, index, array) => {
//     // console.log(value);
//     // console.log(index);
//     // console.log(array);
// }

// arr.forEach(callback);

// arr.forEach((value, index, array) => console.log(value));

// arr.forEach((value) => console.log(value));

// map return new array
// const arr = [1, 2, 3, 4];

// const arr2 = arr.map((x) => x + 1);
// const arr2 = arr.map((x) => 5);
// const arr2 = arr.map((x) => {x + 1});

// console.log(arr2);

// const alpha = ["A", "B"]
// const newAlpha = alpha.map(x => x.toLowerCase())
// console.log(newAlpha);

// const arr = [1, 2, 3, 4];

// // const arr2 = arr.filter((x) => x % 2 === 0);

// // const arr2 = arr.filter((x) =>{ x % 2 === 0});

// const arr2 = arr.filter((x) => {
//   return x % 2 === 0;
// });

// console.log(arr2);

// const arr = [1, 2, 3, 4];

// const value = arr.find((x) => x % 2 === 0);

// console.log(value);

// const arr = [1, 2, 3, 4];

// const value = arr.findIndex((x) => x % 2 === 0);

// console.log(value);

//=============================================

// const person = {
//   name: "Ahmed",
//   age: 26,
// };

// // const name = person.name
// // const age = person.age

// // const { name } = person
// // const { age } = person

// const { name, age } = person;
// console.log(name, age);

// // const { name: personName, age } = person;
// // console.log(personName, age);

//=============================================

// arr = ["A", "B", "C"];

// // const first = arr[0];
// // const second = arr[1];
// // const third = arr[2];

// const [first, second, third] = arr;

// const [, , third] = arr;
