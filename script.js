"use strict";
const prompt = require('prompt-sync')({sigint:true});

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
//Comment reserved for when testing
//const input = "Carrie,06/13/1982,Steven King,762\nThe Stand,01/01/1984,Steven King,1200\nThe Hunger Games,11/12/2013,Suzanne Collins,600\nThe Jungle Book,03/21/1898,Rudyard Kipling,483\nKim,02/03/1910,Rudyard Kipling,526\nI Robot,08/11/1945,Isaac Asimov,474\nFirestarter,04/01/1982,Steven King,597";

//Get input from user
let splitInputByBook = []
console.log(`Enter books formatted as Title,Date,Author,Length with date formatted as mm/dd/yyyy
Enter books one at a time and push enter once finished
Example: Carrie,06/13/1982,Steven King,762
=>`)
while (true) {
  let input = prompt();
  splitInputByBook.push(input);
  if (input == "") {
    splitInputByBook.pop()
    break
  }
}

function parseInput(input) {
  if (input == null || input.length === 0) throw "Invalid Input"
  else {
//     Comments reserved for testing
//     const splitInputByBook = input => input.split(/\n/);
//     const booksArray = splitInputByBook(input).filter(book => book.split(/,/).length === 4)
    const booksArray = splitInputByBook.filter(book => book.split(/,/).length === 4)
    if (booksArray.length < 1) throw "Invalid Input"
    const booksArrayByDetails = booksArray.map(book => book.split(","));
    const books = booksArrayByDetails.map(book => new Book(book[0],book[1],book[2],book[3]));
    return books
  }  
}
const books = parseInput(splitInputByBook);
//const books = parseInput(input);

function findAuthorWithMostBooks(books) {
  let dict = {};
  books.forEach(book => book.author in dict == false ? dict[book.author] = 1: dict[book.author] += 1);
  const maxNumberOfBooks = Object.values(dict).reduce((accumulator, numberOfTimes) => {
      return Math.max(accumulator,numberOfTimes)
  }, 0);
  const getAuthorOfMostBooks = ((author, number) => Object.keys(author).find(key => author[key] === number));
  return getAuthorOfMostBooks(dict,maxNumberOfBooks);
}
const mostBooksAuthor = findAuthorWithMostBooks(books)

function findOldestBook(books) {
  let neededBook = books[0];
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
}
const neededBook = findOldestBook(books);

//Find genre of author
const genre = authors.filter(author => author.name.toLowerCase() === neededBook.author.toLowerCase())[0].genre;

//Output Result
console.log(`${neededBook.title}, written by ${genre} writer ${neededBook.author} on ${neededBook.dateOfPublication} is ${neededBook.numberOfPages} pages long`);

//Export functions for unit testing
module.exports = {
  parseInput,
  findAuthorWithMostBooks, 
  findOldestBook 
}

