import {combineReducers} from 'redux';
import ProductsReducers from "./reducers_products";
import ActiveProduct from "./reducer_active_product";

const rootReducer = combineReducers({
  // state: (state = {}) => state
products : ProductsReducers,
// activeProduct : ActiveProduct
});

export default rootReducer;

// import {SEARCH} from '../actions/index';

// const initialState = {
//   contents: [
//     'Mirististica', 'Vet'
//   ],
//   value: '',
//   works: []
// };

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case SEARCH:
//       {
//         const {value} = action;
//         const works = state
//           .contents
//           .filter((val) => val.includes(value));
//           console.log(works);
//           console.log(state);
          
          
//         // return {
//         //  ...state,
//         //   value,
//         //   works
//         // };
//       }
//     default:
//       return state;
//   }
// }