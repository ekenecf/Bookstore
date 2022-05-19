import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveAction } from './Redux/book/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  return (
    <li>
      {title}
      {' '}
      by
      {author}
      <button type="button" id={id} onClick={(e) => { dispatch(RemoveAction(e.target.id)); }}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
