import {combineReducers} from 'redux';
import ProductsReducers from "./reducers_products";
// import ActiveProduct from "./reducer_active_product";

const rootReducer = combineReducers({
  // state: (state = {}) => state
products : ProductsReducers,
// activeProduct : ActiveProduct
});

export default rootReducer;
