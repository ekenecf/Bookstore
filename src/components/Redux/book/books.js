/* eslint-disable no-undef */
import { generate } from 'randomized-string';

const ADD = 'ADD';
const REMOVE = 'REMOVE';

const data = [{ title: 'mybook1', author: 'ekene', id: generate() },
  { title: 'mybook2', author: 'collins', id: generate() },
  { title: 'mybook3', author: 'John', id: generate() },
  { title: 'mybook4', author: 'doe', id: generate() },
];

export const AddAction = (data) => ({ type: ADD, payLoad: data });

export const RemoveAction = (data) => ({ type: REMOVE, payLoad: data });

const reducers = (state = data, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payLoad];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.payLoad)];
    default: return state;
  }
};
export default reducers;
