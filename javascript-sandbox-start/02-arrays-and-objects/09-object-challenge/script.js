const library = [
  {
    title: 'Interstellar',
    author: 'troy',
    status: {
      owned: true,
      read: false,
      reading: false,
    },
  },
  {
    title: 'f',
    author: 'troyO',
    status: {
      owned: true,
      read: false,
      reading: false,
    },
  },
  {
    title: 'Intellar',
    author: 'trooy',
    status: {
      owned: true,
      read: false,
      reading: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

// [{ title: firstBook, author, status }] = library;
const { title: firstBook } = library[0];

console.log(firstBook);

const x = JSON.stringify(library);

console.log(x);

let x1 = library[1];

console.log(x1);
