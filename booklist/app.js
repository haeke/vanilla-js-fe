
//implementation to create a book
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//implementation
function UI() {
};

//clear the booklist fields
UI.prototype.clearFields = function() {
    //set the values of the three fields to nothing
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

//add book to the list
UI.prototype.addBookToList = function(book) {
    console.log(book);
    //target the book element
    const list = document.querySelector('#book-list');
    //create a table row element
    const row = document.createElement('tr');
    //insert the columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>`;
    //append to the row
    list.appendChild(row);
}

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

    //create a UI object
    const ui = new UI();
    //add book to the UI list
    ui.addBookToList(book);
    //clear the UIfields
    ui.clearFields(title, author, isbn);
    //don't refresh on submit
    e.preventDefault();
});