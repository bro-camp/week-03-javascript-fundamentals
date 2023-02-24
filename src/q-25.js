const library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true,
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false,
  },
];

function displayReadingStatus(library) {
  for (let i = 0, n = library.length; i < n; i += 1) {
    if (library[i].readingStatus) {
      console.log(`Already read '${library[i].title}' by ${library[i].author}`);
    } else {
      console.log(`You still need to read '${library[i].title}' by ${library[i].author}`);
    }
  }
}

displayReadingStatus(library);

console.log('\n\n');
