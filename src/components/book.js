import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <li>
      {title}
      {' '}
      by
      {author}
      <button type="submit">Delete</button>
    </li>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
