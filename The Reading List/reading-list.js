class BookList {
    constructor() {
        this.allBooks = [];
        this.amountOfReadBooks = 0;
        this.amountOfUnreadBooks = 0;
        this.nextBook = this.defineNextBook();
        this.currentBook = this.defineCurrentBook();
        this.lastBookRead;
                    }
    countBooks(){
        this.amountOfReadBooks = this.allBooks.reduce((acc, book) => {
            return book.read === true ? acc + 1 : acc;
        }, 0);
        this.amountOfUnreadBooks = this.allBooks.length - this.amountOfReadBooks;
    }

    readingManager(book) {
        this.unreadBooks = this.allBooks.filter(book => !book.read);
        return this.unreadBooks;
    }

    defineNextBook() {
        this.readingManager();
        this.nextBook = this.unreadBooks.length > 1 ? this.unreadBooks[1] : "Não há livros na fila";

    }
    defineCurrentBook() {
        this.readingManager()
        this.currentBook = this.unreadBooks.length > 0 ? this.unreadBooks[0] : "Você não está lendo nenhum livro no momento";
        return(this.currentBook)
        }

   
    addBook(book) {
        this.allBooks = [...this.allBooks, book];
        this.defineCurrentBook()
        this.defineNextBook()
        this.countBooks();
    }

    finishCurrentBook() {
        if (this.currentBook !== undefined) {
            this.lastBookRead = this.currentBook;
            this.currentBook.read = true;
            this.currentBook.readDate = new Date();
            this.currentBook = this.nextBook;
            this.defineNextBook();
            this.countBooks();
        }
    }
}

class Book {
    constructor(title, genre, author, read) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate =  this.read ? new Date() : ("Livro ainda não lido");
    }
}
let myBookList = new BookList();

let harryPotter = new Book( 'Harry Potter', 'fantasy', 'J. K. Rowling', false);
let lordOfTheRings = new Book( 'The Lord of the Rings', 'fantasy', 'J. R. R. Tolkien', false);
let prideAndPrejudice = new Book( 'Pride and Prejudice', 'romantic novel', 'Jane Austen', false);

myBookList
  