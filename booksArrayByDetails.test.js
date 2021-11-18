const { test } = require('picomatch')
const booksArrayByDetails = require('./script')

test('parses book details into different elements of an array', () => {
  input = "Carrie,06/13/1982,Steven King,762"
  parsedArray = ["Carrie","06/13/1982","Steven King","762"]

  expect(booksArrayByDetails(input)).toEqual(parsedArray)
})