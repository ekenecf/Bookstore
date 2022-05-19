import { generate } from 'randomized-string';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddAction } from './Redux/book/books';

function Form() {
  const dispatch = useDispatch();

  const state = { title: '', author: '', id: '' };

  const [statedata, setstate] = useState(state);

  const onchange = (e) => {
    setstate((state) => ({
      ...state,
      [e.target.name]: e.target.value,
      id: generate(),
    }));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter Book Title..."
        value={statedata.title}
        name="title"
        onChange={onchange}
      />

      <input
        type="text"
        placeholder="Enter Author Name..."
        value={statedata.author}
        name="author"
        onChange={onchange}
      />
      <button type="button" onClick={() => dispatch(AddAction(statedata))}>Add Book</button>
    </form>
  );
}
export default Form;
