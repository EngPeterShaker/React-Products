import {
  combineReducers
} from 'redux';
import ProductsReducers from "./reducers_products";
// import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  // state: (state = {}) => state
products : ProductsReducers,
  // activeBook: ActiveBook
});

export default rootReducer;