import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatus } from '../../redux/Categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const update = (event) => {
    event.preventDefault();

    dispatch(CheckStatus());
  };

  return (
    <>
      <div>
        <button type="button" onClick={update}>
          Check Status
        </button>
        <h4>{ categories }</h4>
      </div>
    </>
  );
}

export default Categories;
