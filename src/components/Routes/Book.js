import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/Books/books';
import Progress from './Progress';
import './scss/Style.scss';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container d_flex_r g10_vw">
      <div className="book-details">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className="d_flex_r g15">
          <button type="button">Comments</button>
          <button type="button" onClick={removeHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="card-progress d_flex_r g10_vw">
        <Progress />
        <div className="d_flex_c progress_updates">
          <h2>CURRENT CHAPTER</h2>
          <h3>Chapter 1: &quot;Intuition&quot;</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
