import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from './Redux/categories/categories';

function Category() {
  const useselector = useSelector((state) => state.Category);
  const dispatch = useDispatch();

  return (
    <>
      {useselector}
      <button type="button" onClick={() => { dispatch(CheckStatus()); }}>Check status</button>
    </>
  );
}
export default Category;
