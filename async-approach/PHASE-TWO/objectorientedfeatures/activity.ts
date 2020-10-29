class BookList {
    private books: string[];
    private name: string;

    static totalBookCount: number = 0;
    static maxBookCount: number = 20;
    constructor(name: string){
        this.name = name;
    }
    addBook(book: string){
        if (this.books.length >= BookList.maxBookCount){
            throw new Error('BookList is Full');
        } else {
            this.books.push(book);
            BookList.totalBookCount++;
        }
    }

    static totalBooks(){
        return BookList.totalBookCount;
    }
}

var bookList = new bookList('My book list');

console.log(`${bookList.name}`);
bookList.addBook("The odyssey");


