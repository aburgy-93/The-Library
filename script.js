"use strict";

const body = document.querySelector(".body");
const books = document.querySelector(".books");
const addBook = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".closeModalBtn");
const form = document.querySelector(".form");
const readBtn = document.querySelector(".readYet");
const addBookBtn = document.querySelector(".add");

addBook.addEventListener("click", function (e) {
  e.preventDefault;
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function (e) {
  e.preventDefault;
  modal.style.display = "none";
});

document.addEventListener("click", function (e) {
  if (e.target === modal) {
    document.querySelector(".modal").style.display = "none";
  }
});

let myLibrary = [
  {
    author: "John",
    title: "Test",
    pages: 296,
  },
  {
    author: "John",
    title: "Test",
    pages: 296,
  },
];

function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute("class", className);
  return element;
}

function createNewLibraryCard(book, index) {
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
  bookItem.appendChild(
    createBookElement("h1", `Read: ${book.readYet}`, "book-pages")
  );
  books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks() {
  renderBooks.textContent = "";
  myLibrary.map((book, index) => {
    createNewLibraryCard(book, index);
  });
}

renderBooks();

function Book(author, title, pages, readYet) {
  (this.author = author),
    (this.title = title),
    (this.title = pages),
    (this.readYet = readYet);

  return `${title}, ${author}, ${pages}, ${readYet}`;
}

// close modal function
// function closeModal(){
//   document.querySelector('.modal').style.display = 'none'
// }

addBookBtn.addEventListener("click", function (e) {
  e.preventDefault;
  //make object from sumbitted info

  const formData = Array.from(document.querySelectorAll(".form input")).reduce(
    (acc, input) => ({ ...acc, [input.id]: input.value }),
    {}
  );
  console.log(formData);

  const { author, bookTitle, pgNumber, readYet } = formData;

  console.log(author, bookTitle, pgNumber, readYet);

  //calling addBookToLibrary function
  addBookToLibrary(author, bookTitle, pgNumber);

  // document.querySelector(".form").reset();

  modal.style.display = "none";
});

function addBookToLibrary(author, title, pages, readYet) {
  myLibrary.push(new Book(author, title, pages, readYet));
  renderBooks();
}
