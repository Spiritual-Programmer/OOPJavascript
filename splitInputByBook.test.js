const { expect } = require('@jest/globals')
const { test } = require('picomatch')
const splitInputByBook = require('./script')



test('parses multiline string into an array', () => {
  const input = "Carrie,06/13/1982,Steven King,762\nThe Stand,01/01/1984,Steven King,1200\nThe Hunger Games,11/12/2013,Suzanne Collins,600\nThe Jungle Book,03/21/1898,Rudyard Kipling,483\nKim,02/03/1910,Rudyard Kipling,526\nI Robot,08/11/1945,Isaac Asimov,474\nFirestarter,04/01/1982,Steven King,597";

  const parsedArray = ["Carrie,06/13/1982,Steven King,762","The Stand,01/01/1984,Steven King,1200","The Hunger Games,11/12/2013,Suzanne Collins,600","The Jungle Book,03/21/1898,Rudyard Kipling,483","Kim,02/03/1910,Rudyard Kipling,526","I Robot,08/11/1945,Isaac Asimov,474","Firestarter,04/01/1982,Steven King,597"]

  expect(splitInputByBook(input)).toEqual(parsedArray)
})