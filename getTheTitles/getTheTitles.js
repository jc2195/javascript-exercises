const getTheTitles = function(books) {
    const bookList = books.map(book => book.title);
    return bookList;
} 

module.exports = getTheTitles;
