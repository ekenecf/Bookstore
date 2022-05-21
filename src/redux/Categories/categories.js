const CHECK = 'CHECK';

export const CheckStatus = () => ({
  type: CHECK,
});

const categories = {
  categories: ['Under construction'],
};

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK:
      return categories;
    default: return state;
  }
};

export default categoryReducer;
