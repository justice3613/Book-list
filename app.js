function Book(title, author, isbn){
        this.title = title;
        this.author =author;
        this.isbn = isbn;
}

function UI(){};

//Clear input Fields
UI.prototype.clearFields = function(){
    const title = document.getElementById('title').value = '',
    author  = document.getElementById('author').value = '',
    isbn   = document.getElementById('isbn').value = '';

}

        //Add Book To List
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
//create a tr Element
        const row = document.createElement('tr');
//create an Inner func
row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}<td>
    <td><a href="#" class="delete">X</a><td>`;

    list.appendChild(row);

}

//Show Alert
UI.prototype.showAlert = function(msg, className){

    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
};

UI.prototype.claerAlert = function(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
        currentAlert.remove();

    }
}

//Delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

//Addind an EventListener On the form
document.getElementById('book-form').addEventListener('submit', function(e){

    //Obtaining the UI Variables
    const  title  = document.getElementById('title').value,
            author  = document.getElementById('author').value,
            isbn   = document.getElementById('isbn').value;

        //Instantiating the Book fN
        const book = new Book(title, author, isbn);

        const ui = new UI();

        //Validate the fields
        if(title == ''|| author == '' || isbn == ''){
            ui.claerAlert();
            ui.showAlert('Please fill in all fields', 'error');

        }else{
                //Book to list
            ui.addBookToList(book);

            //Clear the inputs
            ui.clearFields();

              //show alert
      ui.showAlert('Book Added!', 'success');

        }
e.preventDefault();
})

//Delete the Item
document.getElementById('book-list').addEventListener('click', function(e){

      //Instantiate the Ui
      const ui = new UI();

      //delete from UI
      ui.deleteBook(e.target);

      //show alert
      ui.showAlert('Book Deleted!', 'success');

    e.preventDefault();
})