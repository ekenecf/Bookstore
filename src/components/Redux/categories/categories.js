const CHECK = 'CHECK';

const initialState = [];
export const CheckStatus = () => ({ type: CHECK, payLoad: 'under construction' });

const Category = (state = initialState, action) => {
  switch (action.type) {
    case CHECK:
      return action.payLoad;
    default: return state;
  }
};
export default Category;
