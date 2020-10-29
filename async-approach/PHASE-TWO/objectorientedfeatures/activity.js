var BookList = /** @class */ (function () {
    function BookList(name) {
        this.name = name;
    }
    BookList.prototype.addBook = function (book) {
        if (this.books.length >= BookList.maxBookCount) {
            throw new Error('BookList is Full');
        }
        else {
            this.books.push(book);
            BookList.totalBookCount++;
        }
    };
    BookList.totalBooks = function () {
        return BookList.totalBookCount;
    };
    BookList.totalBookCount = 0;
    BookList.maxBookCount = 20;
    return BookList;
}());
var bookList = new bookList('My book list');
console.log("" + bookList.name);
bookList.addBook("The odyssey");
