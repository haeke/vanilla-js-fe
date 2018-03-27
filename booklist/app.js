
//implementation to create a book
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//implementation
function interface() {
    return;
};

//event listeners



let bookForm = document.querySelector('#book-form');

bookForm.addEventListener('submit', function(e) {
    console.log('book form submitted');

    //target the title, author and isbn form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    //create a book object from the form values
    const book = new Book(title, author, isbn);
    console.log(`${book.title} - ${book.author} - ${book.isbn}`);
    //don't refresh on submit
    e.preventDefault();
});