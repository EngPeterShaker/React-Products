import {
  combineReducers
} from 'redux';
import BooksReducers from "./reducers_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducers,
  activeBook: ActiveBook
});

export default rootReducer;