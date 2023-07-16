const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function numberOfBooksRead(library) {
  // Check if the library object exists and has a 'books' property
  if (!library || !library.books || !Array.isArray(library.books)) {
    throw new Error("Invalid library object or missing 'books' property.");
  }

  // Filter the books with 'readingStatus' set to true and get the count
  const readBooks = library.books.filter((book) => book.readingStatus === true);

  // Return the count of read books
  return readBooks.length;
}

// Do not change the code below

alert(numberOfBooksRead());
