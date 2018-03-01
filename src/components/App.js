


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';


import ProductList from "../containers/product_list";
import 'bootstrap4-plus-jquery';
import './App.scss';
const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return( 
    <div>
      <ProductList /> 
    </div>)
  }
}

ReactDOM.render(
<Provider store = {createStoreWithMiddleware(reducers)} > 
<App/>
</Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}


