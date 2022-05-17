import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import reducer from './book/books';
import Category from './categories/categories';

const rootReducer = combineReducers({
  reducer,
  Category,
});

const store = configureStore(rootReducer);

export default store;
