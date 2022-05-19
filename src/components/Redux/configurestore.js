import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducers from './book/books';
import Category from './categories/categories';

const rootReducer = combineReducers({
  reducers,
  Category,
});
const store = createStore(rootReducer);

export default store;
