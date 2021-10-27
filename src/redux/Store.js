import {createStore} from 'redux';
import { cartReducer } from './cart/cartReducer';
// import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(cartReducer, composeWithDevTools());

export default store;