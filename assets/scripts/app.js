//IMPORTS & EXPORTS

// import { apiKeyExample } from "./utility.js";

// import apiKeyExample from "./utility.js";

// console.log(apiKeyExample)

//VARIABLES & VALUES

// const userMessage = "Hello world!!";

// console.log(userMessage);

//OPERATORS

// console.log("operators" + "are" + "fun!");

//FUNCTIONS & PARAMETERS

// function greeting() {
//     console.log("Welcome!!!!");
// }

// greeting();

//ARROW FUNCTIONS

// export default (userName, message) => {
//     console.log("Hello");
//     return userName + message;
// }

//OBJECTS & CLASSES

// const user = {
//     name: "Roger",
//     age: 28,
//     greet() {
//         console.log("Hey there!");
//         console.log(this.name);
//     }
// };

// console.log(user.name);
// user.greet();

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log("Hey there!");
//     }
// }

// const newUser = new User("John", 33);
// console.log(newUser);
// newUser.greet();

//ARRAYS & ARRAY METHODS

// const hobbies = ["gardening", "hockey", "woodworking"];

// console.log(hobbies[2]);

// hobbies.push("coding");

// const index = hobbies.findIndex((item) => item === "hockey");

// console.log(index);

// const editedHobbies = hobbies.map((item) => item + "!");

// console.log(editedHobbies);

// const objectHobbies = hobbies.map((item) => ({text: item}));

// console.log(objectHobbies);

//DESTRUCTURING

// const [firstName, lastName] = ["Roger", "Thomas"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const user = {
// name: "Roger",
// age: 28
// };

// const name = user.name;
// const age = user.age;

// const {name, age} = {
//     name: "Roger",
//     age: 28
// }

// console.log(name);
// console.log(age);

// THE SPREAD OPERATOR

// const hobbies = ["Gardening", "Hockey"];
// const user = {
//     name: "Roger",
//     age: 28
// };

// const newHobbies = ["Coding", "Woodworking"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//     isAdmin: true,
//     ...user
// };
// console.log(extendedUser);

// CONTROL STRUCTURES

// const password = prompt("Your password");

// if (password === "Hello") {
//     console.log("Hello works");
// } else if (password === "hello") {
//     console.log("hello works");
// } else {
//     console.log("Access not granted");
// }

// const hobbies = ["Gardening", "Hockey"];

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// USING FUNCTIONS AS VALUES

// function handleTimeout() {
//     console.log("Timed out!!");
// }

// setTimeout(handleTimeout, 2000);

// DEFINING FUNCTIONS INSIDE OF FUNCTIONS

// function init() {
//     function greet() {
//         console.log("Hi!");
//     }

//     greet();
// }

// init();

// REFERENCE VS PRIMITIVE VALUES

let userMessage = "Hello!";
userMessage = userMessage.concat("!!!");

const hobbies = ["Gardening", "Hockey"];
hobbies.push("Coding");

console.log(hobbies);
