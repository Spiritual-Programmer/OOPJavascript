const functionsLibrary = require('./script');

test('finds author with the most number of books', () => {
  const inputTest = 
  [
    {title: 'Carrie', dateOfPublication: '06/13/1982', numberOfPages: '762', author: 'Steven King'},
    {title: 'The Stand', dateOfPublication: '01/01/1984', numberOfPages: '1200', author: 'Steven King'},
    {title: 'The Hunger Games', dateOfPublication: '11/12/2013', numberOfPages: '600', author: 'Suzanne Collins'},
    {title: 'The Jungle Book', dateOfPublication: '03/21/1898', numberOfPages: '483', author: 'Rudyard Kipling'},
    {title: 'Kim', dateOfPublication: '02/03/1910', numberOfPages: '526', author: 'Rudyard Kipling'},
    {title: 'I Robot', dateOfPublication: '08/11/1945', numberOfPages: '474', author: 'Isaac Asimov'},
    {title: 'Firestarter', dateOfPublication: '04/01/1982', numberOfPages: '597', author: 'Steven King'}
  ]

  const result = "Steven King"

  expect(functionsLibrary.findAuthorWithMostBooks(inputTest)).toEqual(result)
})