import React from 'react';
import Book from './book';
import Form from './form';

const Books = () => {
  const books = [{ title: 'goodbook', author: 'ekene', id: 1 },
    { title: 'Collins', author: 'emeka', id: 2 },
  ];
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form />
    </div>
  );
};
export default Books;
