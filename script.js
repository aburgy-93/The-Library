"use strict";

// const addBookButton = document
//   .querySelector(".addBook")
//   .addEventListener("click", function () {});

// Get modal
const modal = document.getElementById("simpleModal");
// Get form
const form = document.getElementById("userForm");
// Show modal
const modalBtn = document.getElementById("modalBtn");
// Close modal X Button
const closeBtn = document.querySelector(".closeBtn");
// close modal bacground click
const closeModal = document.querySelector(".form");
// Get input from form
let nameInput = document.getElementById("author");
let titleInput = document.getElementById("bookTitle");
//textboxes
const textbox = document.querySelectorAll("#author bookTitle");
const submitButton = document.getElementById("submitBtn");
// Inputs
const inputs = document.querySelectorAll("input");
// close modal Submit Button // Needs to be redone DRY
const closeModalSubmit = (modal.style.display = "none");
//////////////////////////////////////////////////////

// Open Modal on Click
modalBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Close modal on click
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal window
window.addEventListener("click", function (e) {
  if (e.target === modal || e.target === form) {
    document.querySelector(".modal").style.display = "none";
  }
});

//get value of a text input

document.querySelector("form.form").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(titleInput.value);
});

// clear text fields
submitButton.addEventListener("click", function (e) {
  e.preventDefault;

  inputs.forEach((input) => {
    input.value = "";
  });
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal || e.target === form || e.target === closeBtn) {
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});

let myLibrary = [];

function Book(title, author, pages, readYet) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readYet = readYet;
  this.bookDetails = function () {
    return `${title}, ${author}, ${pages}, ${readYet}`;
  };
}

function addBookToLibrary(title, author, pages, redYet) {
  let newBook = new Book(title, author, pages, redYet);

  myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "295", "not read yet");
addBookToLibrary("Good Clean Fun", "Nick Offerman", "341", "not read yet");

// myLibrary.forEach(function (title) {
//   console.log(title);
// });

// const playerOne = {
//   name: "tim",
//   maker: "X",
// };

// const playertwo = {
//   name: "jenn",
//   maker: "O",
// };

// const printName = function (player) {
//   console.log(player.name);
// };

// printName(playerOne);

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(name);
//   };
// }

// const player1 = new Player("steve", "X");
// const player2 = new Player("also steve", "O");
// player1.sayName();
// player2.sayName();

// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   },
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// walk is taken from the prototype
// rabbit.walk();

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,

//   __proto__: table,
// };

// let pockets = {
//   money: 2000,

//   __proto__: bed,
// };

// console.log(pockets.pen);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   __proto__: hamster,
// };

// let lazy = {
//   __proto__: hamster,
// };

// // This one found the food
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // This one also has it, why? fix please.
// alert(lazy.stomach); // apple

// function Student() {}

// Student.prototype.sayName = function () {
//   console.log(this.name);
// };

// function EighthGrader(name) {
//   this.name = name;
//   this.grade = 8;
// }

// EighthGrader.prototype = Object.create(Student.prototype);

// function NinthGrader(name) {
//   this.name = name;
//   this.grade = 9;
// }

// NinthGrader.prototype = Object.create(Student.prototype);

// NinthGrader.prototype.sayName = function () {
//   console.log("HAHAHAHAHAHA");
// };

// const carl = new EighthGrader("carl");
// carl.sayName();
// const alex = new NinthGrader("alex");
// alex.sayName();

// console.log(book1.bookDetails());
