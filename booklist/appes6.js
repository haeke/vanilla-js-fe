
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    showAlert(message, uiclass) {
        const div = document.createElement('div');
        //add the class
        div.className = `alert ${uiclass} col-md-8`;
        //add the text to be displayed
        div.appendChild(document.createTextNode(message));
     
        //get the parent elements
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
     
        //insert the alert element above the form
        container.insertBefore(div, form);
     
        //remove the alert element after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if (target.className === 'delete') {
            //remove the parent elements parent element
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        //set the values of the three fields to ''
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Local storage implementation
class Store {
    static getBooks() {
        //look inside local storage 
        let books;
        if (localStorage.getItem('books') === null) {
            //doesn't exist
            books = [];
        } else {
           books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
       //get the books from local storage
       const books = Store.getBooks();

       //iterate through
       books.forEach(function(book) {
           const ui = new UI();
           //add book to the UI
           ui.addBookToList(book);
       });
    }

    static addBook(book) {
        //get the book from local storage
        const books = Store.getBooks();
        //add the book to the books array
        books.push(book);
        //set the new books to the books item in local storage
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        console.log(isbn);
        //remove the book from local storage based on the isbn
        const books = Store.getBooks();
        books.forEach(function(book, index) {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        //set the local storage again
        localStorage.setItem('books', JSON.stringify(books));
    }
}

//load when the DOM loads
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//event listeners
let bookForm = document.querySelector('#book-form');

//add book to the booklist
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
    
    //validate the input fields
    if (title === '' || author === '' || isbn === '') {
        //generate an alert
        ui.showAlert('Please fill in all fields.', 'alert-danger error');
    } else {
        //add book to the UI list
        ui.addBookToList(book);
        //add to store
        Store.addBook(book);
        //show alert for successful book added
        ui.showAlert('Book added to the list.', 'alert-success success');
    }
    //clear the UIfields
    ui.clearFields(title, author, isbn);
    //don't refresh on submit
    e.preventDefault();
});

//select the book-list element
const bookList = document.querySelector('#book-list');
//event listener for deleting a book
bookList.addEventListener('click', function(e) {
    //create a ui element
    const ui = new UI();
    //call the delete method on the UI object
    ui.deleteBook(e.target);

    //remove from local storage
    //grab the isbn number
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    //show alert
    ui.showAlert('Book removed', 'alert-success success');
    e.preventDefault();
});