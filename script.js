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
// Radio Buttons
const radioYesBtn = document.getElementById("yes");
const radioNoBtn = document.getElementById("no");
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
  // console.log(nameInput.value);
  // console.log(titleInput.value);
});

// Radio Button Default
radioYesBtn.checked = true;
radioNoBtn.checked = false;

submitButton.addEventListener("click", function (e) {
  e.preventDefault;

  if (e.target === submitButton) {
    radioYesBtn.checked = true;
  }
});

window.addEventListener("click", function (e) {
  if (e.target === modal || e.targer === form || e.target === closeBtn) {
    radioYesBtn.checked = true;
  }
});

// Adding books to Library
// Holy shit it works...

//////////////////////////////////////////////////////////////
const books = document.querySelector(".books");

let myLibrary = [
  {
    title: "book1",
    author: "test",
    pages: 500,
    read: true,
  },
  {
    title: "book2",
    author: "test",
    pages: 42096,
    read: false,
  },
];

// Add new card to main content

function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}

function createBookItem(book, index) {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("id", index);
  bookItem.setAttribute("key", index);
  bookItem.setAttribute("class", "card-book");

  bookItem.appendChild(
    createBookElement("h1", `Title: ${book.title}`, "book-title")
  );
  bookItem.appendChild(
    createBookElement("h1", `Author: ${book.author}`, "book-author")
  );
  bookItem.appendChild(
    createBookElement("h1", `Pages: ${book.pages}`, "book-pages")
  );
  books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks() {
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

renderBooks();

// Get data from form and push to library
const addBookForm = document.getElementById("userForm");

function Book(title, author, pages, readYet) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readYet = readYet;
  this.bookDetails = function () {
    return `${title}, ${author}, ${pages}, ${readYet}`;
  };
}

addBookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //make object from sumbitted info

  const formData = Array.from(
    document.querySelectorAll("#userForm input")
  ).reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});
  console.log(formData);

  const { author, bookTitle, pgNumber, readYet } = formData;

  console.log(author, bookTitle, pgNumber, readYet);

  //calling addBookToLibrary function
  addBookToLibrary(author, bookTitle, pgNumber);

  document.getElementById("userForm").reset();

  modal.style.display = "none";
});

function addBookToLibrary(title, author, pages, readYet) {
  myLibrary.push(new Book(title, author, pages, readYet));
  renderBooks();
  console.log(myLibrary);
}
///////////////////////////////////////////////////

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
