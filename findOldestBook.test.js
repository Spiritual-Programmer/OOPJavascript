const findOldestBook = require('./script')

test('finds the oldest book from the date published', () => {
  input = [
    {title: 'Carrie',
    dateOfPublication: '06/13/1982', 
    numberOfPages: '762', 
    author: 'Steven King'
    },

    {title: 'The Stand',
    dateOfPublication: '01/01/1984', 
    numberOfPages: '1200', 
    author: 'Steven King'
    }
  ]
  neededBook = {
    title: 'Carrie',
    dateOfPublication: '06/13/1982', 
    numberOfPages: '762', 
    author: 'Steven King'
  }

  expect(findOldestBook(input)).toEqual(neededBook)
})