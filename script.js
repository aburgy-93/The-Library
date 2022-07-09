"use strict";

const body = document.querySelector(".body");
const books = document.querySelector(".books");
const submitBtn = document.querySelector(".addBook");

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
  {
    author: "John",
    title: "Test",
    pages: 296,
  },
];

function Book(author, title, pages, readYet) {
  (this.author = author),
    (this.title = title),
    (this.title = pages),
    (this.readYet = readYet);

  return `${title}, ${author}, ${pages}, ${readYet}`;
}

function addBookeToLibrary(author, title, pages, readYet) {
  myLibrary.push(new Book(author, title, pages, readYet));
  console.log(myLibrary);
}

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
