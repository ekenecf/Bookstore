import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './Books/books';
import categoryReducer from './Categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk));

export default store;
