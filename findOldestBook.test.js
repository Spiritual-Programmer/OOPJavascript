const functionsLibrary = require('./script')

test('finds the oldest book from the date published', () => {
  const inputTest = [
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
  result = {
    title: 'Carrie',
    dateOfPublication: '06/13/1982', 
    numberOfPages: '762', 
    author: 'Steven King'
  }

  expect(functionsLibrary.findOldestBook(inputTest)).toEqual(result)
})