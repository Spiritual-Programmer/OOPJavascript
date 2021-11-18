"use strict";

const { find } = require("lodash");

const authors = [
  {
    "name": "steven king",
    "genre": "Horror"
  },
  {
    "name": "rudyard kipling",
    "genre": "Adventure"
  },
  {
    "name": "issac asimov",
    "genre": "Science Fiction"
  },
  {
    "name": "suzanne collins",
    "genre": "YA Fiction"
  }
];

class Book {
  constructor(title, dateOfPublication, author, numberOfPages) {
    this.title = title;
    this.dateOfPublication = dateOfPublication;
    this.numberOfPages = numberOfPages;
    this.author = author;
  }
};

const input = "Carrie,06/13/1982,Steven King,762\nThe Stand,01/01/1984,Steven King,1200\nThe Hunger Games,11/12/2013,Suzanne Collins,600\nThe Jungle Book,03/21/1898,Rudyard Kipling,483\nKim,02/03/1910,Rudyard Kipling,526\nI Robot,08/11/1945,Isaac Asimov,474\nFirestarter,04/01/1982,Steven King,597";

//Parse input
const splitInputByBook = input => input.split(new RegExp(/\n/));
const booksArray = splitInputByBook(input);
const booksArrayByDetails = booksArray.map(book => book.split(","));
const books = booksArrayByDetails.map(book => new Book(book[0],book[1],book[2],book[3]));

//Find Author with the most number of books
let dict = {};
books.forEach(book => book.author in dict == false ? dict[book.author] = 1: dict[book.author] += 1);
let maxNumberOfBooks = Object.values(dict).reduce((accumulator, numberOfTimes) => {
    return Math.max(accumulator,numberOfTimes)
 }, 0);
const getAuthorOfMostBooks = ((author, number) => Object.keys(author).find(key => author[key] === number));
const mostBooksAuthor = getAuthorOfMostBooks(dict,maxNumberOfBooks);

//Find oldest book
const findOldestBook = (books => {
  let neededBook = {};
  let oldestBook = new Date("12/31/2500");
  books.forEach(book => {
    if (book.author == mostBooksAuthor) {
      let currentDate = new Date(book.dateOfPublication);
      if (currentDate < oldestBook) {
      oldestBook = currentDate;
      neededBook = book;
      }
    }
  })
  return neededBook
})
const neededBook = findOldestBook(books);

//Find genre of author
const genre = authors.filter(author => author.name.toLowerCase() === neededBook.author.toLowerCase())[0].genre;

//Output Result
console.log(`${neededBook.title}, written by ${genre} writer ${neededBook.author} on ${neededBook.dateOfPublication} is ${neededBook.numberOfPages} pages long`);


module.exports = splitInputByBook, booksArrayByDetails, findOldestBook