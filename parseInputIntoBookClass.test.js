const functionsLibrary = require('./script')

test('parses multiline strings into class objects', () => {
  const inputTest = "Carrie,06/13/1982,Steven King,762\nThe Stand,01/01/1984,Steven King,1200\nThe Hunger Games,11/12/2013,Suzanne Collins,600\nThe Jungle Book,03/21/1898,Rudyard Kipling,483\nKim,02/03/1910,Rudyard Kipling,526\nI Robot,08/11/1945,Isaac Asimov,474\nFirestarter,04/01/1982,Steven King,597";

  const result = 
  [
    {title: 'Carrie', dateOfPublication: '06/13/1982', numberOfPages: '762', author: 'Steven King'},
    {title: 'The Stand', dateOfPublication: '01/01/1984', numberOfPages: '1200', author: 'Steven King'},
    {title: 'The Hunger Games', dateOfPublication: '11/12/2013', numberOfPages: '600', author: 'Suzanne Collins'},
    {title: 'The Jungle Book', dateOfPublication: '03/21/1898', numberOfPages: '483', author: 'Rudyard Kipling'},
    {title: 'Kim', dateOfPublication: '02/03/1910', numberOfPages: '526', author: 'Rudyard Kipling'},
    {title: 'I Robot', dateOfPublication: '08/11/1945', numberOfPages: '474', author: 'Isaac Asimov'},
    {title: 'Firestarter', dateOfPublication: '04/01/1982', numberOfPages: '597', author: 'Steven King'}
  ]
  expect(functionsLibrary.parseInput(inputTest)).toEqual(result)
})

test('parses another multiline strings into class objects', () => {
  const inputTest = "Carrie,06/13/1982,Steven King,762\nI Robot,08/29/1945,Isaac Asimov,474\nThe Jungle Book,09/17/1900,Rudyard Kipling,483\nKim,02/03/1910,Rudyard Kipling,526\nMockingjay,08/09/2014,Suzanne Collins,642";

  const result = 
  [
    {title: 'Carrie', dateOfPublication: '06/13/1982', numberOfPages: '762', author: 'Steven King'},
    {title: 'I Robot', dateOfPublication: '08/29/1945', numberOfPages: '474', author: 'Isaac Asimov'},
    {title: 'The Jungle Book', dateOfPublication: '09/17/1900', numberOfPages: '483', author: 'Rudyard Kipling'},
    {title: 'Kim', dateOfPublication: '02/03/1910', numberOfPages: '526', author: 'Rudyard Kipling'},
    {title: 'Mockingjay', dateOfPublication: '08/09/2014', numberOfPages: '642', author: 'Suzanne Collins'}
  ]
  expect(functionsLibrary.parseInput(inputTest)).toEqual(result)
})

test('parses a single line string into a class object', () => {
  const inputTest = "Carrie,06/13/1982,Steven King,762"

  const result = 
  [
    {title: 'Carrie', dateOfPublication: '06/13/1982', numberOfPages: '762', author: 'Steven King'}
  ]
  expect(functionsLibrary.parseInput(inputTest)).toEqual(result)
})

test('checks for empty input', () => {
  expect( () => {
    functionsLibrary.parseInput("")}).toThrow("Invalid Input");
})