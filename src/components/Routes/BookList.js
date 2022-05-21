import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import NewBook from './NewBook';
import { getBooks } from '../../redux/Books/books';
import './scss/Style.scss';

const BookList = () => {
  const { books, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  let fetchedBooks = '';
  if (loading) {
    fetchedBooks = <h2>Hold on...</h2>;
  } else {
    fetchedBooks = books.map((book) => (
      <div
        key={book.item_id}
        className="container"
      >
        <Book
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      </div>

    ));
  }

  return (
    <div>
      <ul>
        {fetchedBooks}
      </ul>
      <NewBook />
    </div>
  );
};

export default BookList;
