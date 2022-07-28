const libraryContainer = document.getElementById("libraryContainer");
const libraryList = document.getElementById("libraryList");

let myLibrary = [];

const Book = (name, author, numPages) => {
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = false;
};

const displayBooks = () => {
  myLibrary.forEach((book) => {
    // create parent li element
    let newBook = document.createElement("li");
    newBook.classList.add("book");

    // new div for info
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    let bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookInfo.appendChild(bookTitle);
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;
    bookInfo.appendChild(bookAuthor);
    let bookNumPages = document.createElement("p");
    bookNumPages = book.numPages;
    bookInfo.appendChild(bookNumPages);

    // append new dive to li element
    newBook.appendChild(bookInfo);

    // add button to remove the book from the library
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = 'remove book'
    removeButton.addEventListener("click", () => {
      myLibrary = myLibrary.filter(
        (libraryBook) => libraryBook.title !== book.title
      );
      // remove book element from DOM
      newBook.remove();
    });

    // add button to toggle read status
    let readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = "read status";
    readButton.addEventListener("click", () => {
      book.read = !read;
    });
  });
};

// add a new book to the library
const newBook = (title, author, numPages) => {
  let newBook = new Book(title, author, numPages);
  newBook.prototype = Object.create(Book.prototype);
  myLibrary.push(newBook);
};
