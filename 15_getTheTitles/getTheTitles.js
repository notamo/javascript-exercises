/*
const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }

]
getTheTitles(books) // ['Book','Book2']
*/

const getTheTitles = function(arr) {
    return arr.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
