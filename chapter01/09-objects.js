"use strict"

var obj = new Object();
//var obj = {}

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
var book = new Book('Title', 250, 'ISBN-45393943');
console.log('book.title', book.title);
book.title = 'new title';
console.log('book.title', book.title);

Book.prototype.printTitle = function () {
    console.log(this.title);
}
book.printTitle();