import React from 'react';

function Form() {
  return (
    <form>
      <input
        id="title"
        type="text"
        placeholder="Enter Book Title..."
      />

      <input
        id="author"
        type="text"
        placeholder="Enter Author Name..."
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
export default Form;
