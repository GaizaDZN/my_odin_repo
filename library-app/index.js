const libraryContainer = document.getElementById("libraryContainer");
const libraryList = document.getElementById("libraryList");

let myLibrary = [];

function Book(name, author, numPages) {
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.readStatus = false;
}

const displayBooks = () => {
  // delete current book elements if it exists
  if (document.querySelectorAll(".book")) {
    document.querySelectorAll(".book").forEach((book) => book.remove());
  }

  myLibrary.forEach((book) => {
    // create parent li element
    let newBook = document.createElement("li");
    newBook.classList.add("book");

    // new div for info
    let bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");

    let bookTitle = document.createElement("h3");
    bookTitle.textContent = `${book.name}`;
    let bookAuthor = document.createElement("p");
    bookAuthor.textContent = `author: ${book.author}`;
    let bookNumPages = document.createElement("p");
    bookNumPages.textContent = `number of pages: ${book.numPages}`;

    // append info to li
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookNumPages);

    // append div to li element
    newBook.appendChild(bookInfo);

    //append li to ol
    libraryList.appendChild(bookInfo)

    // add button to remove the book from the library
    let removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "remove book";
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
const addNewBook = () => {
  const inputTitle = document.getElementById("inputTitle");
  const inputAuthor = document.getElementById("inputAuthor");
  const inputNumPages = document.getElementById("inputNumPages");

  const bookToAdd = new Book(
    inputTitle.value,
    inputAuthor.value,
    inputNumPages.value
  );

  // remove value from inputs
  inputTitle.value = "";
  inputAuthor.value = "";
  inputNumPages.value = "";

  myLibrary.push(bookToAdd);
  displayBooks();
};

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", addNewBook);
