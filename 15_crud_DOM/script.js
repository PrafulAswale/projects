const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

let booksInfo = [];

// create book
function addBook() {
  let book = {
    title: title.value,
    author: author.value,
    year: year.value,
  };
  if (localStorage.getItem("booksInfo").length > 0) {
    booksInfo = [...JSON.parse(localStorage.getItem("booksInfo"))];
  }
  booksInfo.push(book);
  localStorage.setItem("booksInfo", JSON.stringify(booksInfo));

  title.innerText = "";
  author.innerText = "";
  year.innerText = "";
  displayBook();
}

//read book
function displayBook() {
  bookList.innerHTML = "";
  let books = JSON.parse(localStorage.getItem("booksInfo"));
  console.log(typeof books[0].title);
  for (let i = 0; i < books.length; i++) {
    let sec = document.createElement("section");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    // let div4 = document.createElement("div");
    // div4.classList.add("delete");
    div1.innerText = books[i].title;
    div2.innerText = books[i].author;
    div3.innerText = books[i].year;
    // div4.innerText = "Delete";
    sec.appendChild(div1);
    sec.appendChild(div2);
    sec.appendChild(div3);
    // sec.appendChild(div4);
    bookList.appendChild(sec);
  }
}

//update book
function updateBook() {}
//delete book
function deleteBook(title) {
  let books = JSON.parse(localStorage.getItem("booksInfo"));
  books = books.filter((book) => {
    return book.title !== title;
  });

  localStorage.setItem("booksInfo", JSON.stringify(books));
  displayBook();
}
if (localStorage.getItem("booksInfo").length > 0) displayBook();
btn.addEventListener("click", function (e) {
  //work on CRUD operation of DOM
  e.preventDefault();
  addBook();
});
